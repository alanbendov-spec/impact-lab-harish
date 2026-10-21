# Clase 3 (Baal Shem Tov → IA → Mashíaj) — Estado Final (21-oct-2026)

- **Estado:** LISTO y verificado (`PASS check-deck-local` y `RESULTADO: OK` en `check-deck.sh`).
- **11 correcciones de Alan aplicadas (72 láminas):**
  1. **5.500 = 1740** verificado con fuente primaria y corregido en deck, guion y audio (`zohar-5500.mp3`).
  2. **Lám. 12 ("ya se siente como Shabat"):** fondo visual de mesa de Shabat preparada con velas y jalot.
  3. **Botón de audio:** reubicado en la barra superior/controles sin solaparse con las flechas de navegación.
  4. **Láms. 15 y 17:** videos en formato grande centrado, `autoplay: true`, audio al 50% cuando aporta.
  5. **Lám. 19 separada en dos (actuales 19 y 20):** Apolo (`v3-apollo-computers.mp4`) y transmisión satelital mundial de Janucá (`v4-rebbe-technology.mp4` — Chanukah Live 1990), cada uno en su propia lámina grande con autoplay.
  6. **Lám. 24 (actual 25):** reemplazado el video confuso por interacción binaria clara en pantalla sin video confuso.
  7. **Láms. 27–32 (actuales 28–33):** notas del orador EN/ES explicativas añadidas, clip de 3Blue1Brown ampliado y explicación detallada para Alan en `~/Desktop/coding-projects/yeshiva-harish/impact-lab-3-mashiaj-ai/EXPLICACION-28-31.md`.
  8. **Lám. 48 (actual 49):** persona identificada con nombre, cargo y empresa.
- **Audios hebreos (`audio/kids/`):** 72/72 archivos MP3 generados con ElevenLabs (`eleven_v3`, voz Brian) y 72/72 transcripciones `.mp3.txt` validadas con Whisper local.
- **QA visual:** 72/72 láminas verificadas en Chrome headless 1280×720 sin overflow (`0 issues`), 15/15 videos MP4 locales con `duration > 0`.
- **Pendiente (fase posterior):** español, ruso y versión adultos; commit/push a GitHub Pages tras revisión de Alan.
