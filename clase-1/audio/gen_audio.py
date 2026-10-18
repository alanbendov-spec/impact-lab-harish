#!/usr/bin/env python3
# Genera una voz dramatica por slide (ElevenLabs eleven_v3) y la mezcla con una
# cama de musica suave (ffmpeg). Un mp3 por slide: audio/vo-<id>.mp3
import json, os, base64, urllib.request, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
KEY = open(os.path.expanduser('~/Library/Application Support/harish-capture/.el')).read().strip()
S = json.load(open(os.path.join(HERE, 'script.json')))
MUSIC = os.path.join(HERE, 'music-bed.mp3')

def tts(text, path):
    body = {"text": text, "model_id": S['model'], "language_code": "en",
            "voice_settings": S['voice_settings']}
    req = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{S['voice']}?output_format=mp3_44100_128",
        data=json.dumps(body).encode(),
        headers={"xi-api-key": KEY, "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=240) as r:
        open(path, 'wb').write(r.read())

def mix(voice_path, out_path):
    # musica a -20dB bajo la voz, con fade in/out, cortada al largo de la voz + 1.2s de cola
    if not os.path.exists(MUSIC):
        os.replace(voice_path, out_path); return
    cmd = ["ffmpeg","-y","-i",voice_path,"-i",MUSIC,
      "-filter_complex",
      "[1:a]volume=0.14,afade=t=in:st=0:d=0.8[m];"
      "[0:a][m]amix=inputs=2:duration=first:dropout_transition=0,afade=t=out:st=0:d=0:nb_samples=1[a]",
      "-map","[a]","-ac","2","-b:a","160k",out_path]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        print("ffmpeg mix fallo, uso voz sola:", r.stderr[-300:]); os.replace(voice_path, out_path)

made = []
for sid, text in S['lines'].items():
    raw = os.path.join(HERE, f'_raw-{sid}.mp3')
    out = os.path.join(HERE, f'vo-{sid}.mp3')
    print("generando", sid, "...")
    tts(text, raw)
    mix(raw, out)
    if os.path.exists(raw): os.remove(raw)
    sz = os.path.getsize(out)
    made.append((sid, sz))
    print(f"  -> vo-{sid}.mp3  ({sz} bytes)")

print("\nLISTO. mp3 por slide:")
for sid, sz in made: print(f"  {sid}: {sz} bytes")
