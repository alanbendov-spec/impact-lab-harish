#!/usr/bin/env python3
"""Build local EN/ES/RU WebVTT tracks from Whisper-local transcripts."""

from __future__ import annotations

import concurrent.futures
import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
QA = ROOT / "qa/transcribe"
OUT = ROOT / "captions"

SOURCES = {
    "programa-intro": (QA / "programa-he-whisper.vtt", "he", 0.0, 96.80),
    "mordechai-intro": (QA / "mordechai-whisper.vtt", "en", 0.0, 82.72),
    "break-p1": (QA / "break-whisper.vtt", "en", 0.0, 138.0),
    "break-p2": (QA / "break-whisper.vtt", "en", 138.0, 194.0),
    "break-p3a": (QA / "break-whisper.vtt", "en", 194.0, 445.0),
    "break-p3b": (QA / "break-whisper.vtt", "en", 445.0, 697.0),
    "break-p4": (QA / "break-whisper.vtt", "en", 697.0, 757.34),
}


def seconds(stamp: str) -> float:
    hh, mm, ss = stamp.replace(",", ".").split(":")
    return int(hh) * 3600 + int(mm) * 60 + float(ss)


def stamp(value: float) -> str:
    value = max(0.0, value)
    hh = int(value // 3600)
    mm = int(value % 3600 // 60)
    ss = value % 60
    return f"{hh:02d}:{mm:02d}:{ss:06.3f}"


def read_vtt(path: Path) -> list[tuple[float, float, str]]:
    lines = path.read_text(encoding="utf-8-sig").splitlines()
    cues = []
    index = 0
    while index < len(lines):
        if "-->" not in lines[index]:
            index += 1
            continue
        left, right = [part.strip().split()[0] for part in lines[index].split("-->", 1)]
        index += 1
        text = []
        while index < len(lines) and lines[index].strip():
            text.append(lines[index].strip())
            index += 1
        clean = re.sub(r"<[^>]+>", "", " ".join(text))
        clean = " ".join(clean.replace("&gt;&gt;", "").split())
        if clean:
            cues.append((seconds(left), seconds(right), clean))
    return cues


def clip(cues: list[tuple[float, float, str]], start: float, end: float) -> list[tuple[float, float, str]]:
    output = []
    for cue_start, cue_end, text in cues:
        if cue_end <= start or cue_start >= end:
            continue
        local_start = max(cue_start, start) - start
        local_end = min(cue_end, end) - start
        if local_end - local_start >= 0.15:
            output.append((local_start, local_end, text))
    return output


def translate(text: str, language: str, source: str = "en") -> str:
    query = urllib.parse.urlencode({"client": "gtx", "sl": source, "tl": language, "dt": "t", "q": text})
    url = "https://translate.googleapis.com/translate_a/single?" + query
    for attempt in range(4):
        try:
            with urllib.request.urlopen(url, timeout=30) as response:
                data = json.loads(response.read().decode("utf-8"))
            return "".join(piece[0] for piece in data[0] if piece[0]).strip()
        except Exception:
            if attempt == 3:
                raise
            time.sleep(1 + attempt)
    raise RuntimeError("translation failed")


def translate_cues(cues: list[tuple[float, float, str]], language: str, source: str = "en") -> list[tuple[float, float, str]]:
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        texts = list(pool.map(lambda cue: translate(cue[2], language, source), cues))
    return [(start, end, text) for (start, end, _), text in zip(cues, texts)]


def write_vtt(path: Path, cues: list[tuple[float, float, str]]) -> None:
    rows = ["WEBVTT", ""]
    for index, (start, end, text) in enumerate(cues, 1):
        rows.extend([str(index), f"{stamp(start)} --> {stamp(end)}", text, ""])
    path.write_text("\n".join(rows), encoding="utf-8")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    parsed: dict[Path, list[tuple[float, float, str]]] = {}
    for stem, (source, source_language, start, end) in SOURCES.items():
        parsed.setdefault(source, read_vtt(source))
        original = clip(parsed[source], start, end)
        english = original if source_language == "en" else translate_cues(original, "en", source_language)
        write_vtt(OUT / f"{stem}.en.vtt", english)
        for language in ("es", "ru"):
            write_vtt(OUT / f"{stem}.{language}.vtt", translate_cues(english, language))
    (OUT / "README.md").write_text(
        "# Subtítulos\n\n"
        "Fuentes transcritas localmente con Whisper `large-v3-turbo`. "
        "El video hebreo se transcribió en hebreo y se volvió a procesar con la traducción de Whisper a inglés; "
        "las pistas ES/RU se tradujeron desde ese VTT y todas se sirven como archivos locales.\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
