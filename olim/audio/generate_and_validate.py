#!/usr/bin/env python3
"""Generate Brian/eleven_v3 Hebrew support audio and validate with local Whisper."""

from __future__ import annotations

import difflib
import json
import re
import subprocess
import tempfile
import unicodedata
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AUDIO = ROOT / "audio"
ENV = Path.home() / "Desktop/coding-projects/motion-graphics-sandbox/.env"
MODEL = Path.home() / "Library/Application Support/whisper-models/ggml-large-v3-turbo.bin"
VOICE = "nPczCjzI2devNBz1zQrb"
SCRIPTS = {
    "he-cover": "ברוכים הבאים לאימפקט לאב לעולים. הערב נשחק, נלמד על בינה מלאכותית, ונבנה רעיון ביחד.",
    "he-promise": "העסקה שלנו פשוטה: אתם מקבלים כלים, ואתם מביאים סקרנות, אומץ, ומילה שאפשר לסמוך עליה.",
    "he-ai": "בינה מלאכותית מנבאת מה יבוא אחר כך. היא חזקה מאוד, אבל אתם אלה שחושבים, בודקים ומחליטים.",
    "he-pasuk": "ועשו לי מקדש ושכנתי בתוכם. אפשר לבנות משהו ממשי, ולמלא אותו במשמעות ובהשפעה טובה.",
    "he-routes": "אפשר לפתור בעיה בחריש, לבנות עסק קטן, או לעזור לעולם היהודי. בחרו מסלול שמדליק אתכם.",
    "he-challenge": "יש לכם שמונה דקות. בחרו בעיה אמיתית בחריש, המציאו פתרון עם בינה מלאכותית, והכינו פיץ׳ בשתי שפות.",
    "he-close": "אל תחכו להרגיש מוכנים. לומדים, בונים ומשפיעים. ההבדל היחיד הוא שהבונה כבר התחיל.",
}


def api_key() -> str:
    for line in ENV.read_text(encoding="utf-8").splitlines():
        if line.startswith("ELEVENLABS_API_KEY="):
            return line.split("=", 1)[1].strip().strip("\"'")
    raise RuntimeError("ELEVENLABS_API_KEY missing")


def normalize(text: str) -> str:
    text = unicodedata.normalize("NFKD", text)
    text = "".join(char for char in text if not unicodedata.combining(char))
    return " ".join(re.sub(r"[^\u0590-\u05ff ]", " ", text).split())


def generate(name: str, text: str, key: str) -> Path:
    path = AUDIO / f"{name}.mp3"
    payload = json.dumps({
        "text": text,
        "model_id": "eleven_v3",
        "language_code": "he",
        "voice_settings": {"stability": 0.5, "similarity_boost": 0.75, "style": 0.0, "use_speaker_boost": True},
    }, ensure_ascii=False).encode("utf-8")
    request = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE}?output_format=mp3_44100_64",
        data=payload,
        method="POST",
        headers={"xi-api-key": key, "Content-Type": "application/json", "Accept": "audio/mpeg"},
    )
    with urllib.request.urlopen(request, timeout=120) as response:
        body = response.read()
    if len(body) < 4000:
        raise RuntimeError(f"{name}: short response")
    path.write_bytes(body)
    return path


def validate(path: Path, expected: str) -> tuple[float, float, str]:
    with tempfile.TemporaryDirectory(prefix="olim-audio-") as tmp:
        wav = Path(tmp) / "audio.wav"
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(path), "-ar", "16000", "-ac", "1", str(wav)], check=True)
        run = subprocess.run([
            "whisper-cli", "-m", str(MODEL), "-l", "he", "-nt", "-np", "-f", str(wav),
        ], capture_output=True, text=True, timeout=240, check=True)
    transcript = " ".join(run.stdout.split())
    score = difflib.SequenceMatcher(None, normalize(expected), normalize(transcript)).ratio()
    probe = subprocess.run([
        "ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", str(path),
    ], capture_output=True, text=True, check=True)
    return float(probe.stdout.strip()), score, transcript


def main() -> None:
    key = api_key()
    rows = []
    for name, script in SCRIPTS.items():
        path = generate(name, script, key)
        duration, score, transcript = validate(path, script)
        (AUDIO / f"{name}.mp3.txt").write_text(transcript + "\n", encoding="utf-8")
        rows.append((name, duration, score, transcript))
    report = [
        "# Validación de audio hebreo",
        "",
        "Generación: Brian / `eleven_v3` / `he`. Validación: Whisper local `large-v3-turbo`.",
        "",
        "| archivo | duración | similitud | resultado |",
        "|---|---:|---:|---|",
    ]
    for name, duration, score, transcript in rows:
        report.append(f"| {name}.mp3 | {duration:.1f}s | {score:.0%} | {'OK' if score >= .72 else 'REVISAR'} |")
    report.extend(["", "Transcripciones locales: archivos `audio/*.mp3.txt`."])
    (AUDIO / "VALIDACION.md").write_text("\n".join(report) + "\n", encoding="utf-8")
    if any(score < .72 for _, _, score, _ in rows):
        raise SystemExit("one or more clips need review")


if __name__ == "__main__":
    main()
