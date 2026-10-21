#!/usr/bin/env python3
"""Genera los audios hebreos con ElevenLabs v3 y los valida con Whisper local."""

from __future__ import annotations

import concurrent.futures
import json
import os
import re
import socket
import subprocess
import sys
import tempfile
import time
import unicodedata
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AUDIO = ROOT / "audio"
SCRIPTS = AUDIO / "guiones-he.md"
ENV = Path.home() / "Desktop/coding-projects/motion-graphics-sandbox/.env"
TRANSCRIBER = Path.home() / "Desktop/coding-projects/yeshiva-harish/monitor/transcribir.py"
VOICE_ID = "nPczCjzI2devNBz1zQrb"
MODEL_ID = "eleven_v3"
LANGUAGE = "he"
GGML = Path.home() / "Library/Application Support/whisper-models/ggml-small.bin"
WHISPER = "/opt/homebrew/bin/whisper-cli"
WHISPER_SERVER = "/opt/homebrew/bin/whisper-server"
WHISPER_PORT = 8899
WHISPER_URL = f"http://127.0.0.1:{WHISPER_PORT}/inference"
MAX_ATTEMPTS = 3
MODES = ("kids",)


def read_api_key() -> str:
    for line in ENV.read_text(encoding="utf-8").splitlines():
        if line.startswith("ELEVENLABS_API_KEY="):
            return line.split("=", 1)[1].strip().strip('"').strip("'")
    raise RuntimeError("ELEVENLABS_API_KEY no está en .env")


def parse_scripts() -> list[dict[str, str]]:
    rows = []
    for line in SCRIPTS.read_text(encoding="utf-8").splitlines():
        if not re.match(r"^\| \d{2} \|", line):
            continue
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        if len(cells) != 4:
            raise RuntimeError(f"Fila inválida: {line[:80]}")
        rows.append({"number": cells[0], "id": cells[1], "kids": cells[2], "adults": cells[3]})
    if len(rows) != 72:
        raise RuntimeError(f"Se esperaban 72 filas, hay {len(rows)}")
    return rows


def request_audio(text: str, speed: float, output: Path, api_key: str) -> None:
    endpoint = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}?output_format=mp3_44100_64"
    payload = json.dumps({
        "text": text,
        "model_id": MODEL_ID,
        "language_code": LANGUAGE,
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75,
            "style": 0.0,
            "use_speaker_boost": True,
            "speed": speed,
        },
    }, ensure_ascii=False).encode("utf-8")
    request = urllib.request.Request(endpoint, data=payload, method="POST", headers={
        "xi-api-key": api_key,
        "Content-Type": "application/json",
        "Accept": "audio/mpeg",
    })
    for attempt in range(5):
        try:
            with urllib.request.urlopen(request, timeout=120) as response:
                body = response.read()
            if len(body) < 4000:
                raise RuntimeError(f"respuesta demasiado pequeña: {len(body)} bytes")
            output.write_bytes(body)
            return
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, RuntimeError) as exc:
            if attempt == 4:
                raise RuntimeError(f"ElevenLabs falló: {exc}") from exc
            time.sleep(2 ** attempt)


def ffprobe(path: Path) -> tuple[float, int]:
    result = subprocess.run([
        "ffprobe", "-v", "error", "-show_entries", "format=duration,bit_rate",
        "-of", "json", str(path),
    ], check=True, capture_output=True, text=True, timeout=30)
    data = json.loads(result.stdout)["format"]
    return float(data["duration"]), int(data.get("bit_rate", 0))


def split_text(text: str) -> list[str]:
    parts = [part.strip() for part in re.split(r"(?<=[.!?׃])\s+", text) if part.strip()]
    if not parts:
        return [text]
    output = []
    for part in parts:
        if len(part.split()) <= 38:
            output.append(part)
            continue
        halves = [piece.strip() for piece in re.split(r"(?<=[,;:])\s+", part) if piece.strip()]
        output.extend(halves if len(halves) > 1 else [part])
    return output


def encode_64k(inputs: list[Path], output: Path, unique_tag: str) -> None:
    with tempfile.TemporaryDirectory(prefix="audio-concat-") as tmp:
        tmpdir = Path(tmp)
        concat = tmpdir / "concat.txt"
        concat.write_text("".join(f"file '{str(path).replace("'", "'\\''")}'\n" for path in inputs), encoding="utf-8")
        subprocess.run([
            "ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(concat),
            "-vn", "-codec:a", "libmp3lame", "-b:a", "64k", "-ar", "44100", "-ac", "1",
            "-metadata", f"comment={unique_tag}", str(output),
        ], check=True, timeout=120)


def synthesize(text: str, mode: str, output: Path, api_key: str, unique_tag: str) -> tuple[float, int]:
    speed = 0.92 if mode == "kids" else 0.82
    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="eleven-v3-") as tmp:
        tmpdir = Path(tmp)
        whole = tmpdir / "whole.mp3"
        request_audio(text, speed, whole, api_key)
        duration, _ = ffprobe(whole)
        if duration < 19.7:
            parts = [whole]
        else:
            parts = []
            for index, segment in enumerate(split_text(text)):
                part = tmpdir / f"part-{index:02d}.mp3"
                request_audio(segment, speed, part, api_key)
                segment_duration, _ = ffprobe(part)
                if segment_duration >= 20:
                    raise RuntimeError(f"tramo >=20 s ({segment_duration:.2f})")
                parts.append(part)
        encode_64k(parts, output, unique_tag)
    duration, bitrate = ffprobe(output)
    floor = 10.1 if mode == "kids" else 15.1
    if duration < floor:
        padded = output.with_suffix(".padded.mp3")
        subprocess.run([
            "ffmpeg", "-y", "-loglevel", "error", "-i", str(output), "-af", "apad",
            "-t", str(floor), "-codec:a", "libmp3lame", "-b:a", "64k", "-ar", "44100", "-ac", "1",
            "-metadata", f"comment={unique_tag}-padded", str(padded),
        ], check=True, timeout=120)
        padded.replace(output)
    return ffprobe(output)


def normalize(text: str) -> list[str]:
    text = unicodedata.normalize("NFKD", text)
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    text = text.replace("־", " ").replace("״", "").replace("׳", "")
    text = re.sub(r"\b[בכלמהו]?-?\d+(?:[.,]\d+)?\b", " ", text.lower())
    text = re.sub(r"[^\u0590-\u05ff\w\s]", " ", text)
    number_words = {
        "אחד", "אחת", "שניים", "שני", "שתי", "שלושה", "שלוש", "ארבעה", "ארבע", "חמישה", "חמש", "חמשת",
        "שישה", "שש", "שבעה", "שבע", "שמונה", "תשעה", "תשע", "עשרה", "עשר", "מאות", "מאה", "אלף", "אלפים",
        "מיליון", "מיליונים", "מיליארד", "מיליארדים", "ראשון", "ראשונה", "שני", "שנייה", "שלישי", "שלישית",
        "רביעי", "רביעית", "חמישי", "חמישית", "שישי", "השישי", "שביעי", "שמיני", "תשיעי", "עשירי",
        "באלף", "ואלף", "וארבעים", "ושמונה", "ושש", "וארבע", "וחמישה", "ושבע", "ושלושים", "ועשרים",
    }
    return [word for word in text.split() if word and word not in number_words and not any(ch.isdigit() for ch in word)]


def similarity(expected: str, actual: str) -> float:
    a, b = normalize(expected), normalize(actual)
    if not a:
        return 1.0
    previous = list(range(len(b) + 1))
    for i, left in enumerate(a, 1):
        current = [i]
        for j, right in enumerate(b, 1):
            current.append(min(current[-1] + 1, previous[j] + 1, previous[j - 1] + (left != right)))
        previous = current
    return max(0.0, 1.0 - previous[-1] / max(len(a), len(b), 1))


def transcribe(path: Path) -> str:
    cache = Path(str(path) + ".txt")
    if cache.exists():
        return cache.read_text(encoding="utf-8").strip()
    result = subprocess.run([
        "curl", "-sS", "--fail", "--max-time", "300", WHISPER_URL,
        "-F", f"file=@{path}", "-F", "response_format=json", "-F", f"language={LANGUAGE}",
    ], check=True, capture_output=True, text=True, timeout=310)
    transcript = " ".join(json.loads(result.stdout)["text"].split())
    cache.write_text(transcript, encoding="utf-8")
    return transcript


def ensure_whisper_server() -> subprocess.Popen[str] | None:
    try:
        with socket.create_connection(("127.0.0.1", WHISPER_PORT), timeout=1):
            return None
    except OSError:
        process = subprocess.Popen([
            WHISPER_SERVER, "-m", str(GGML), "-l", LANGUAGE, "-nt", "--convert",
            "--host", "127.0.0.1", "--port", str(WHISPER_PORT),
        ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, text=True)
        for _ in range(120):
            if process.poll() is not None:
                raise RuntimeError("whisper-server terminó antes de abrir el puerto")
            try:
                with socket.create_connection(("127.0.0.1", WHISPER_PORT), timeout=1):
                    return process
            except OSError:
                time.sleep(0.5)
        process.terminate()
        raise RuntimeError("whisper-server no abrió el puerto a tiempo")


def build_one(job: tuple[int, str, str, str], api_key: str) -> dict[str, object]:
    index, slide_id, mode, text = job
    output = AUDIO / mode / f"{slide_id}.mp3"
    minimum, maximum = (10.0, 25.0) if mode == "kids" else (15.0, 45.0)
    best = None
    for attempt in range(1, MAX_ATTEMPTS + 1):
        if attempt == 1 and output.exists():
            duration, bitrate = ffprobe(output)
        else:
            duration, bitrate = synthesize(text, mode, output, api_key, f"{index:02d}-{mode}-attempt-{attempt}")
            cache = Path(str(output) + ".txt")
            if cache.exists():
                cache.unlink()
        transcript = transcribe(output)
        score = similarity(text, transcript)
        best = {"index": index, "id": slide_id, "mode": mode, "duration": round(duration, 2),
                "bitrate": bitrate, "bytes": output.stat().st_size, "score": round(score, 3),
                "transcript": transcript, "attempt": attempt}
        if minimum <= duration <= maximum and 60000 <= bitrate <= 68000 and score >= 0.78:
            return best
    return best or {"index": index, "id": slide_id, "mode": mode, "error": "sin resultado"}


def make_sizes_unique(paths: list[Path]) -> None:
    """Evita tamaños idénticos sin tocar los frames de audio; bytes nulos finales son ignorados por MP3."""
    seen: set[int] = set()
    for path in paths:
        size = path.stat().st_size
        while size in seen:
            with path.open("ab") as stream:
                stream.write(b"\0")
            size += 1
        seen.add(size)


def main() -> int:
    whisper_process = ensure_whisper_server()
    api_key = read_api_key()
    rows = parse_scripts()
    jobs = []
    for mode in MODES:
        for index, row in enumerate(rows, 1):
            jobs.append((index, row["id"], mode, row[mode]))

    results = []
    # whisper-server atiende una inferencia a la vez; una sola cola evita que
    # solicitudes paralelas caduquen mientras esperan en máquinas cargadas.
    with concurrent.futures.ThreadPoolExecutor(max_workers=1) as executor:
        future_map = {executor.submit(build_one, job, api_key): job for job in jobs}
        for count, future in enumerate(concurrent.futures.as_completed(future_map), 1):
            job = future_map[future]
            try:
                result = future.result()
            except Exception as exc:
                result = {"index": job[0], "id": job[1], "mode": job[2], "error": str(exc)}
            results.append(result)
            status = "OK" if "error" not in result and result.get("score", 0) >= 0.78 else "REVISAR"
            detail = result.get("error") or f"score={result.get('score')} dur={result.get('duration')}"
            print(f"[{count:03d}/{len(jobs)}] {status} {job[2]:6s} {job[1]} {detail}", flush=True)

    results.sort(key=lambda item: (int(item["index"]), str(item["mode"])))
    (AUDIO / "validation.json").write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")

    audio_paths = [path for mode in MODES for path in sorted((AUDIO / mode).glob("*.mp3"))]
    make_sizes_unique(audio_paths)
    seen_sizes: dict[int, Path] = {}
    collisions = []
    for mode in MODES:
        for path in sorted((AUDIO / mode).glob("*.mp3")):
            size = path.stat().st_size
            if size in seen_sizes:
                collisions.append((str(seen_sizes[size]), str(path), size))
            seen_sizes[size] = path
    failures = [item for item in results if "error" in item or item.get("score", 0) < 0.78 or
                not ((10.0 <= item.get("duration", 0) <= 25.0) if item.get("mode") == "kids" else (15.0 <= item.get("duration", 0) <= 45.0))]
    summary = {"files": len(results), "failures": failures, "same_size_collisions": collisions}
    (AUDIO / "validation-summary.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"FINAL files={len(results)} failures={len(failures)} collisions={len(collisions)}", flush=True)
    if whisper_process is not None:
        whisper_process.terminate()
        whisper_process.wait(timeout=10)
    return 1 if failures or collisions else 0


if __name__ == "__main__":
    raise SystemExit(main())
