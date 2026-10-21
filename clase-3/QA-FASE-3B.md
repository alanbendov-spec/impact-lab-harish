# QA — Fase 3b

Estado parcial, 20-oct-2026.

- Cobertura: 71/71 láminas con `en`, `es`, `he`; notas localizadas; HE usa `dir=rtl`.
- Audios cotejados: kids 19/19 y adults 19/19 pasan similitud Whisper ≥0,78; no requieren regeneración.
- Generación pendiente en curso: 52 MP3 por modo, con transcripción y validación automática.
- Chrome headless 1280×720: 6 combinaciones idioma/público, 71 láminas, viewport 1280×720 sin overflow global.
- Video: 15/15 con metadata y `duration > 0`.
- Audio UI: botón por lámina en kids; adults sólo en HE; atajo `A`; autoentrada HE adults salvo láminas con video.
- `videos-en-decks/check-deck.sh`: no localizado aún en disco; pendiente.

PENDIENTE: repetir QA al terminar audios y registrar resultado final.
