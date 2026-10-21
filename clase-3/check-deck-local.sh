#!/usr/bin/env bash
set -euo pipefail

deck_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$deck_dir"

node --check content.js >/dev/null
node --check app.js >/dev/null

node - <<'JS'
const fs = require('fs'), vm = require('vm');
const window = {};
vm.runInNewContext(fs.readFileSync('content.js', 'utf8'), {window});
const C = window.DECK_CONTENT;
const missing = [];
for (const slide of C.slides) {
  for (const lang of ['en', 'he']) if (slide[lang] == null) missing.push(slide.id + ':' + lang);
  if (C.durations[slide.id] == null) missing.push(slide.id + ':duration');
}
if (C.slides.length !== 72 || missing.length) throw new Error(`slides=${C.slides.length} missing=${missing.join(',')}`);
console.log('OK content: 72 slides, EN/HE + durations');
JS

video_count=0
for video in videos/*.mp4; do
  duration="$(ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 "$video")"
  awk -v value="$duration" 'BEGIN { exit !(value > 0) }'
  video_count=$((video_count + 1))
done
test "$video_count" -eq 15
echo "OK video: 15/15 duration > 0"

mp3_count="$(find audio/kids -maxdepth 1 -name '*.mp3' | wc -l | tr -d ' ')"
txt_count="$(find audio/kids -maxdepth 1 -name '*.txt' | wc -l | tr -d ' ')"
test "$mp3_count" -eq 72
test "$txt_count" -eq 72
echo "OK audio kids: 72 MP3 + 72 Whisper TXT"

echo 'PASS check-deck-local'
