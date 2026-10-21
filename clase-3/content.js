(function () {
  "use strict";

  window.DECK_CONTENT = {
    meta: {
      title: "Impact Lab 3 — From the Baal Shem Tov to AI",
      kicker: "IMPACT LAB · CLASS 3 · 5787",
      showKickerOnAllSlides: false,
      school: "Yeshivat Bnei Akiva Harish"
    },
    ui: {
      previous: "Previous slide",
      next: "Next slide",
      fullscreen: "Fullscreen",
      notes: "Presenter notes",
      notesHint: "N closes notes",
      videoMissing: "Media slot",
      videoMissingDetail: "Add the local MP4 to activate playback",
      videoReady: "Click or press Space to play",
      pending: "SOURCE PENDING",
      rebbes: "CHAIN OF REBBEIM",
      revolutions: "INDUSTRIAL REVOLUTIONS",
      years: "YEARS",
      sources: "SOURCE MAP"
    },
    acts: [
      { id: "0", label: "ACT 0", title: "The question" },
      { id: "I", label: "ACT I", title: "The prophecy" },
      { id: "II", label: "ACT II", title: "Friday afternoon" },
      { id: "III", label: "ACT III", title: "Acceleration" },
      { id: "M", label: "INTERLUDE", title: "Inside the machine" },
      { id: "IV", label: "ACT IV", title: "Already here" },
      { id: "V", label: "ACT V", title: "Abundance" },
      { id: "VI", label: "ACT VI", title: "After labor" },
      { id: "VII", label: "ACT VII", title: "Ancient mirrors" },
      { id: "VIII", label: "ACT VIII", title: "Our work" }
    ],
    challenge: {
      en: "Build one AI action that gives someone time, dignity, or Torah",
      he: "בנו פעולה אחת עם בינה מלאכותית שנותנת למישהו זמן, כבוד או תורה"
    },
    durations: {
      "opening": 40, "home-below": 50, "why-now": 60, "genesis": 45,
      "zohar-5500": 50, "double-opening": 45, "besht": 45, "watt-jenner-volta": 60,
      "wellsprings": 60, "seven-days": 50, "friday-clock": 45, "shabbat-smell": 60,
      "technology-aroma": 45, "timeline-overview": 60, "first-revolution": 95, "tanya-mind": 45,
      "second-revolution": 105, "train-telephone": 60, "third-revolution": 75, "chanukah-satellite": 70, "fourth-revolution": 50,
      "ai-revolution": 90, "machine-childhood": 55, "machine-switch": 45, "machine-human-video": 85,
      "machine-eniac": 80, "machine-parallel": 45, "machine-parallel-video": 70, "machine-same-math": 45,
      "machine-old-new": 55, "machine-alexnet": 60, "machine-formula": 40, "machine-next-word": 60,
      "machine-surprise": 45, "machine-revealed": 55, "acceleration": 45, "replacement": 40,
      "nisan-28": 80, "nisan-28-part-2": 70, "days-of-moshiach": 60, "final-hours": 50,
      "rambam-quote": 60, "rambam-icons": 50, "ready-made": 50, "food": 45,
      "health": 45, "torah": 45, "time": 60, "leaders-abundance": 90,
      "flying-car": 90, "musk-reveal": 45, "post-labor": 60, "musk-optional": 90,
      "optimus": 80, "musk-rambam": 45, "meaning": 60, "ai-kabbalah": 100,
      "middot": 70, "lowest-place": 45, "revelation-below": 55, "besht-ai": 55,
      "october-awakening": 60, "voice-nations": 55, "access": 50, "will": 60,
      "same-phone": 60, "impact-mission": 60, "taste-shabbat": 50, "challenge": 90,
      "sources": 45, "image-sources-1": 30, "image-sources-2": 30
    },
    timeline: {
      start: 1700,
      end: 2026,
      rebbes: [
        { id: "besht", name: "Baal Shem Tov", start: 1698, end: 1760 },
        { id: "maggid", name: "Maggid", start: 1704, end: 1772 },
        { id: "alter", name: "Alter Rebbe", start: 1745, end: 1812, note: "Tanya 1797" },
        { id: "tzemach", name: "Tzemach Tzedek", start: 1789, end: 1866 },
        { id: "maharash", name: "Maharash", start: 1834, end: 1882 },
        { id: "rashab", name: "Rashab", start: 1860, end: 1920 },
        { id: "rayatz", name: "Rayatz", start: 1880, end: 1950 },
        { id: "rebbe", name: "The Rebbe", start: 1950, end: 1994 }
      ],
      revolutions: [
        { id: "r1", name: "1st · STEAM", start: 1760, end: 1840 },
        { id: "r2", name: "2nd · ELECTRIC", start: 1870, end: 1914 },
        { id: "r3", name: "3rd · DIGITAL", start: 1950, end: 2010 },
        { id: "r4", name: "4th · CONNECTED", start: 2011, end: 2026 },
        { id: "ai", name: "AI", start: 2022, end: 2026 }
      ]
    },
    rambamItems: [
      { id: "hunger", en: "NO HUNGER", he: "אין רעב" },
      { id: "war", en: "NO WAR", he: "אין מלחמה" },
      { id: "envy", en: "NO ENVY", he: "אין קנאה" },
      { id: "good", en: "GOOD FLOWS", he: "הטובה מושפעת" },
      { id: "delicacies", en: "DELICACIES LIKE DUST", he: "מעדנים כעפר" },
      { id: "knowledge", en: "KNOW G-D", he: "לדעת את ה׳" }
    ],
    sources: [
      { kind: "classic", text: "CLASSICAL · Genesis 7:11 · Zohar I, Vayera 117a" },
      { kind: "classic", text: "CLASSICAL · Tanya ch. 36 · Mishneh Torah, Kings 12:5" },
      { kind: "classic", text: "CLASSICAL · Shabbat 30b · Zohar II 162b" },
      { kind: "classic", text: "CLASSICAL · Baal Shem Tov letter: experience 1746; letter c. 1752" },
      { kind: "classic", text: "CLASSICAL · Sichos Kodesh, Shavuot 5739 (1979)" },
      { kind: "classic", text: "CLASSICAL · Rebbe, 28 Nisan 5751; 12 Adar I 5752" },
      { kind: "prediction", text: "PREDICTION · Musk–Sunak, 2 Nov 2023 · VivaTech, 23 May 2024" },
      { kind: "prediction", text: "PREDICTION · Associated Press, 19 Nov 2025" },
      { kind: "prediction", text: "PREDICTION · Altman, The Intelligence Age (2024)" },
      { kind: "prediction", text: "PREDICTION · Altman, Moore’s Law for Everything (2021)" },
      { kind: "prediction", text: "PREDICTION · Hassabis, TIME (2025) · Amodei (2024)" },
      { kind: "fact", text: "HISTORY · WEF; Library of Congress; NASA; JEM/Chabad" },
      { kind: "fact", text: "IMAGES · Wikimedia Commons · full attribution in CREDITS.md" }
    ],
    slides: [
      {
        id: "opening", act: "0", type: "cover",
        en: "From the Baal Shem Tov to AI",
        subEn: "Living the days of Moshiach",
        he: "מהבעל שם טוב ועד הבינה המלאכותית — חיים בימות המשיח",
        notes: "Abrir como una película: una historia de más de tres siglos.\nLa pregunta no es qué puede hacer la IA, sino por qué llega precisamente ahora."
      },
      {
        id: "home-below", act: "0", type: "home",
        en: "We were created to build G-d’s home down here",
        he: "נבראנו כדי לעשות לו יתברך דירה בתחתונים",
        tag: "TANYA · CHAPTER 36",
        source: "Tanya, chapter 36",
        notes: "Recordar la idea central de la clase 1: la meta ocurre aquí abajo.\nLa tecnología también pertenece al material que debemos transformar."
      },
      {
        id: "why-now", act: "0", type: "question",
        en: "Why is all this technology arriving now?",
        he: "למה כל הטכנולוגיה הזאת מגיעה דווקא עכשיו?",
        notes: "Dejar silencio después de la pregunta.\nInvitar dos o tres respuestas antes de abrir el texto del Génesis."
      },
      {
        id: "genesis", act: "I", type: "genesis",
        en: "The deep burst open. The windows of heaven opened.",
        he: "נִבְקְעוּ כָּל מַעְיְנֹת תְּהוֹם רַבָּה, וַאֲרֻבֹּת הַשָּׁמַיִם נִפְתָּחוּ",
        tag: "GENESIS 7:11",
        background: "img/commons/medzhybizh-historic.jpg",
        source: "Genesis 7:11",
        notes: "Leer la imagen en dos direcciones: agua que sube y cielo que se abre.\nEl Zohar convierte ese verso en un mapa de la historia."
      },
      {
        id: "zohar-5500", act: "I", type: "counter",
        en: "The fifty-sixth century began in 5500: 1740",
        he: "המאה החמישים ושש החלה בשנת ה׳ת״ק — 1740",
        tag: "ZOHAR · VAYERA 117a",
        background: "img/commons/besht-synagogue.jpg",
        source: "Zohar I, Vayera 117a · sixth century of the sixth millennium: 5500–5600 (1740–1840)",
        counter: { from: 5000, to: 5500 },
        notes: "El Zohar habla del sexto siglo del sexto milenio, no de un único año.\nEse período comienza en 5500 (1740) y termina en 5600 (1840). Fuente: Chabad.org, The Fifty-Sixth Century."
      },
      {
        id: "double-opening", act: "I", type: "split",
        en: "Heaven opened as Chasidut. The deep opened as science.",
        he: "השמיים נפתחו כחסידות, והתהום נפתחה כמדע",
        background: "img/commons/besht-signature.jpg",
        split: [
          { en: "HEAVEN", he: "חסידות" },
          { en: "THE DEEP", he: "מדע" }
        ],
        notes: "Presentar las dos aperturas como simultáneas, no como enemigas.\nLa sabiduría de arriba y la de abajo preparan un mismo mundo."
      },
      {
        id: "besht", act: "I", type: "image",
        en: "The Baal Shem Tov opened Torah’s inner light to everyone",
        he: "הבעל שם טוב פתח את פנימיות התורה לכולם",
        background: "img/commons/besht-synagogue.jpg",
        image: { src: "img/commons/besht-signature.jpg", label: "BAAL SHEM TOV · SIGNATURE" },
        notes: "No presentar al Besht sólo como fundador de un movimiento.\nSu innovación fue volver accesible la vida interior de la Torá."
      },
      {
        id: "watt-jenner-volta", act: "I", type: "images",
        en: "Same century: Watt 1769 · Jenner 1796 · Volta 1800",
        he: "ואט, ג׳נר וולטה — שלוש דלתות שנפתחו במאה אחת",
        background: "img/commons/watt-engine.jpg",
        images: [
          { src: "img/commons/watt-engine.jpg", label: "WATT · 1769" },
          { src: "img/commons/edward-jenner.jpg", label: "JENNER · 1796" },
          { src: "img/commons/alessandro-volta.jpg", label: "VOLTA · 1800" }
        ],
        notes: "Hacer entrar las tres figuras una por una.\nVapor, vacunación y electricidad muestran otra apertura del conocimiento."
      },
      {
        id: "wellsprings", act: "I", type: "quote",
        en: "When your wellsprings spread outward, the Master will come",
        he: "לכשיפוצו מעיינותיך חוצה — אז יבוא האדון",
        tag: "BAAL SHEM TOV · EXPERIENCE 1746 · LETTER c. 1752",
        background: "img/commons/besht-synagogue.jpg",
        source: "Baal Shem Tov letter, printed in Ben Porat Yosef (1781); experience 1746; letter c. 1752 (Rosman)",
        notes: "Subrayar el verbo spread: la condición es que el conocimiento salga.\nLa tecnología ampliará después la escala de esa difusión."
      },
      {
        id: "seven-days", act: "II", type: "week",
        en: "Seven days. Seven thousand years. We are late on Friday.",
        he: "שבעה ימים, שבעת אלפים שנה — אנחנו בשעות המאוחרות של יום שישי",
        week: ["1", "2", "3", "4", "5", "6", "7"],
        notes: "Usar la semana como modelo pedagógico, no como cálculo de fecha exacta.\nEl sexto día queda iluminado: preparación intensa antes de Shabat."
      },
      {
        id: "friday-clock", act: "II", type: "clock",
        en: "Year 5787 feels like Friday at 18:50",
        he: "שנת תשפ״ז מרגישה כמו יום שישי בשעה 18:50",
        clock: "18:50",
        notes: "Presentar 18:50 como imagen proporcional del viernes, no como pronóstico.\nLa sensación es que casi todo está listo y falta encender la luz."
      },
      {
        id: "shabbat-smell", act: "II", type: "aroma",
        en: "Friday afternoon: the whole house already smells like Shabbat",
        he: "ביום שישי אחר הצהריים כל הבית כבר מריח כמו שבת",
        background: "img/commons/shabbat-table.jpg",
        source: "Crzrussian / Wikimedia Commons · CC BY-SA 3.0",
        notes: "Pedir que imaginen su casa antes de Shabat.\nTodavía no empezó, pero la comida y la calma ya cambian el ambiente."
      },
      {
        id: "technology-aroma", act: "II", type: "quote",
        en: "Technology is the aroma of Shabbat",
        he: "הטכנולוגיה היא הריח של שבת",
        notes: "Esta es la tesis puente de la charla.\nLa abundancia tecnológica permite saborear un mundo menos dominado por la carencia."
      },
      {
        id: "timeline-overview", act: "III", type: "timeline",
        en: "Two timelines. One accelerating story.",
        he: "שני צירי זמן — סיפור אחד שמאיץ",
        background: "img/commons/power-loom-early.jpg",
        timeline: { window: [1700, 2026], active: ["r1", "r2", "r3", "r4", "ai"] },
        notes: "Leer arriba la cadena de Rebeim y abajo las revoluciones.\nNo afirmar causalidad mecánica; mostrar un paralelismo histórico que se acelera."
      },
      {
        id: "first-revolution", act: "III", type: "timeline-video",
        en: "Steam turned muscle into machine",
        he: "הקיטור הפך כוח שרירים לכוח של מכונה",
        background: "img/commons/boulton-watt.jpg",
        timeline: { window: [1745, 1850], active: ["r1"] },
        media: [{ id: "V1", slug: "v1-steam", label: "V1 · 07:20–07:50 · OPERATING REPLICA", autoplay: true, volume: 0.5 }],
        source: "Video: Industrial Revolution, A7TaigDb0WQ · replica, not 19th-century footage",
        notes: "Mostrar que la primera revolución amplifica fuerza física.\nEl clip debe ser breve y dejar oír el ritmo mecánico del vapor."
      },
      {
        id: "tanya-mind", act: "III", type: "timeline-images",
        en: "Tanya made Chasidut thinkable for every mind",
        he: "ספר התניא פתח את החסידות להבנה של כל אדם",
        background: "img/commons/tanya-rabati.jpg",
        timeline: { window: [1735, 1870], active: ["alter", "r1"] },
        images: [
          { src: "img/commons/alter-rebbe.jpg", label: "ALTER REBBE" },
          { src: "img/commons/tanya-rabati.jpg", label: "TANYA · HISTORIC EDITION" }
        ],
        notes: "En paralelo al vapor, el Alter Rebe organiza la experiencia interior.\nTania permite trabajar con ideas profundas de manera sistemática."
      },
      {
        id: "second-revolution", act: "III", type: "timeline-video",
        en: "Electricity erased night. Assembly lines multiplied human strength.",
        he: "החשמל מחק את הלילה, וקווי הייצור הכפילו את כוח האדם",
        background: "img/commons/ford-assembly-restored.jpg",
        timeline: { window: [1860, 1920], active: ["r2", "rashab"] },
        media: [{ id: "V2", slug: "v2-ford-c1919", label: "V2 · FORD, c. 1919 · 01:30–02:10", autoplay: true, muted: true }],
        source: "Video: Where and How Fords Are Made 2, c. 1919 · moving line introduced 1913",
        notes: "La segunda revolución organiza energía y producción a escala.\nEl Ford de 1913 sirve para ver velocidad, repetición y abundancia material."
      },
      {
        id: "train-telephone", act: "III", type: "timeline-symbols",
        en: "“From a telephone: That which one speaks here is heard elsewhere!”",
        he: "מן הטלפון: מה שמדברים כאן נשמע במקום אחר",
        background: "img/commons/bell-transmitter.jpg",
        timeline: { window: [1840, 1930], active: ["r2", "maharash", "rashab"] },
        symbols: ["TRAIN", "TELEGRAPH", "TELEPHONE"],
        source: "The Rebbe · Sichos Kodesh, Shavuot 5739 (1979)",
        notes: "La tríada completa: teléfono, lo dicho aquí se oye allí; telégrafo, cada palabra cuesta; tren, un minuto tarde puede hacer perder el viaje.\nNo atribuirla a Hayom Yom."
      },
      {
        id: "third-revolution", act: "III", type: "timeline-video-focus",
        en: "Apollo 11 landed with only 30 seconds of fuel left",
        he: "אפולו 11 נחתה כשנותרו רק שלושים שניות של דלק",
        background: "img/commons/eniac-women.jpg",
        timeline: { window: [1938, 1975], active: ["r3"] },
        media: [{ id: "V3", slug: "v3-apollo-computers", label: "NASA · APOLLO 11 · 01:30–02:13", autoplay: true, volume: 0.5 }],
        source: "NASA, Apollo 11: Landing on the Moon · nOcDftgR5UQ · 01:30–02:13",
        notes: "El módulo esquivó un cráter y un campo de rocas durante el descenso.\nCuando aterrizó, quedaban unos treinta segundos de combustible. Escuchar las voces de misión al 50%."
      },
      {
        id: "chanukah-satellite", act: "III", type: "timeline-video-focus",
        en: "Chanukah Live linked Jewish communities around the world by satellite",
        he: "חנוכה לייב חיבר קהילות יהודיות ברחבי העולם באמצעות לוויין",
        background: "img/commons/rebbe-1991.jpg",
        timeline: { window: [1950, 2005], active: ["r3", "rebbe"] },
        media: [{ id: "V4", slug: "v4-rebbe-technology", label: "JEM · CHANUKAH LIVE 1990 · GLOBAL SATELLITE LINK", autoplay: true, volume: 0.5 }],
        source: "Jewish Educational Media · Chanukah Live 1990 · 3bri9V0gjRg · 00:40–01:20",
        notes: "El mapa y las señales en vivo muestran ciudades conectadas al mismo tiempo.\nLa tecnología satelital convirtió una celebración local en una experiencia judía mundial."
      },
      {
        id: "fourth-revolution", act: "III", type: "timeline-images",
        en: "The fourth revolution connected everything, everywhere",
        he: "המהפכה הרביעית חיברה הכול, בכל מקום",
        background: "img/commons/ibm-simon.jpg",
        timeline: { window: [2005, 2026], active: ["r4"] },
        images: [
          { src: "img/commons/ibm-simon.jpg", label: "CONNECTED PHONE" },
          { src: "img/commons/kuka-robot.jpg", label: "INDUSTRIAL ROBOT" },
          { src: "img/commons/chatgpt-gpt4.jpg", label: "NETWORKED INTELLIGENCE" }
        ],
        notes: "El smartphone ya no es un aparato aislado: coordina un sistema.\nRobots, hogares y ciudades comienzan a compartir datos en tiempo real."
      },
      {
        id: "ai-revolution", act: "III", type: "timeline-video",
        en: "The machine learned language, vision, and apparent thought",
        he: "המכונה למדה שפה, ראייה ומראית עין של חשיבה",
        background: "img/commons/gpt5-ui.jpg",
        timeline: { window: [2018, 2026], active: ["ai"] },
        media: [{ id: "V10", slug: "v10-ai-demo", label: "V10 · OPENAI VOICE · 00:08–00:38", autoplay: true, volume: 0.5 }],
        images: [
          { src: "img/commons/gpt5-ui.jpg", label: "REASONING UI" },
          { src: "img/commons/tesla-optimus.jpg", label: "HUMANOID ROBOT" }
        ],
        source: "OpenAI, What’s New with ChatGPT Voice, 5 Dec 2025",
        notes: "Distinguir capacidad observable de conciencia: por eso dice apparent thought.\nLa novedad es que la máquina trabaja con símbolos humanos, no sólo números."
      },
      {
        id: "machine-childhood", act: "M", type: "images",
        en: "When I was a kid, we bought NVIDIA cards… to play racing games.",
        he: "כשהייתי ילד, קנינו כרטיסי NVIDIA… כדי לשחק במשחקי מכוניות.",
        tag: "ILLUSTRATION",
        background: "img/generated/retro-racing-illustration.jpg",
        interludeLabel: true,
        images: [
          { src: "img/generated/retro-racing-illustration.jpg", label: "ILLUSTRATION" },
          { src: "img/commons/geforce-256.jpg", label: "GEFORCE 256 · 1999 · COMMONS PD" }
        ],
        source: "Illustration: OpenAI ImageGen · GeForce 256: Hyins / Wikimedia Commons, public domain",
        notes: "Contar la anécdota propia; la foto de la GeForce 256 entra después.\nRotular claramente la recreación como illustration."
      },
      {
        id: "machine-switch", act: "M", type: "machine-switch",
        en: "A computer is just switches. ON = 1. OFF = 0.",
        he: "מחשב הוא בסך הכול מתגים. דולק = 1. כבוי = 0.",
        notes: "Hacer coincidir el cambio del interruptor con 0 → 1.\nNo avanzar hasta que la relación física/binaria esté clara."
      },
      {
        id: "machine-human-video", act: "M", type: "video",
        en: "When people follow one binary rule, they form a living computer",
        he: "כשבני אדם עוקבים אחרי כלל בינארי פשוט, הם יוצרים מחשב חי",
        sub: {
          en: "A single 0 or 1 is simple. But connect thousands following logic gates (AND, OR), and complex computation emerges.",
          es: "Un solo 0 o 1 no hace nada. Pero al conectar miles siguiendo compuertas lógicas (AND, OR), emerge el cómputo complejo.",
          he: "0 או 1 בודד אינו אומר דבר. אך כשמחברים אלפים לפי שערים לוגיים (AND, OR), מתפרץ חישוב מורכב."
        },
        interaction: "Classroom experiment: 3 students raise/lower hands (1 or 0) to form a logic gate.",
        interactionHe: "ניסוי בכיתה: 3 תלמידים מרימים/מורידים יד (1 או 0) כדי ליצור שער לוגי",
        media: [{ id: "W1", slug: "w1-human-computer", label: "W1 · HUMAN COMPUTER · 01:20–01:48", autoplay: true, volume: 0.6 }],
        source: "3 Body Problem · The Human Computer · 30 million people acting as logic gates",
        notes: "INTERACCIÓN: tres alumnos forman un número binario o compuerta AND.\nEl clip muestra qué pasa cuando esa reacción binaria se multiplica a escala: emerge un computador vivo."
      },
      {
        id: "machine-eniac", act: "M", type: "machine-eniac",
        en: "1945: 17,468 tubes filled a room. Today: 208 billion switches on one chip.",
        he: "1945: ‏17,468 שפופרות מילאו חדר. היום: 208 מיליארד מתגים על שבב אחד.",
        media: [{ id: "W4", slug: "w4-transistor", label: "W4 · INTEL · 00:04–00:27", autoplay: true, volume: 0.5 }],
        source: "ENIAC (U. Michigan) · NVIDIA Blackwell B200 (2024) · parts of each switch are virus-sized, thousands of times thinner than a hair",
        notes: "El zoom va de la sala ENIAC al chip; luego reproducir el clip opcional de Intel.\nDecir “encapsulado/GPU”, no un único die monolítico."
      },
      {
        id: "machine-parallel", act: "M", type: "machine-parallel",
        en: "A CPU is one genius working in line. A GPU is thousands working at once.",
        he: "מעבד רגיל = גאון אחד שעובד בתור. כרטיס גרפי = אלפים שעובדים בבת אחת.",
        notes: "La fila CPU avanza punto por punto; la matriz GPU se enciende a la vez.\nAclarar que los puntos no representan núcleos equivalentes."
      },
      {
        id: "machine-parallel-video", act: "M", type: "video",
        en: "A GPU makes parallel work visible.",
        he: "כרטיס גרפי הופך עבודה מקבילית לדבר שאפשר לראות.",
        media: [{ id: "W2", slug: "w2-cpu-gpu", label: "W2 · MYTHBUSTERS · 02:43–03:18", autoplay: true, volume: 0.8 }],
        source: "NVIDIA NVISION 08 demonstration · excerpt via HOSTKEY; classroom analysis",
        notes: "La CPU pintaría los puntos uno por uno; la GPU dispara muchas operaciones equivalentes al mismo tiempo.\nLa demostración de pintura hace visible esa simultaneidad. Audio activo con el disparo de pintura."
      },
      {
        id: "machine-same-math", act: "M", type: "quote",
        en: "Games and AI need the same math: millions of multiplications at once.",
        he: "משחקים ובינה מלאכותית צריכים אותה מתמטיקה: מיליוני הכפלות בבת אחת.",
        source: "NVIDIA developer documentation · parallel matrix multiplication",
        notes: "Conectar vértices 3D y redes neuronales con álgebra lineal paralela.\nNo afirmar que juegos e IA sean la misma aplicación."
      },
      {
        id: "machine-old-new", act: "M", type: "quote",
        en: "Old AI followed rules people wrote. New AI learns from examples.",
        he: "הבינה המלאכותית הישנה עקבה אחרי חוקים שאנשים כתבו. החדשה לומדת מדוגמאות.",
        source: "“Artificial intelligence” named 1956 (Dartmouth) · Deep Blue beats Kasparov 1997 (rules + search)",
        notes: "Contrastar programación explícita con aprendizaje desde datos.\nDeep Blue sirve como ejemplo de reglas, evaluación y búsqueda."
      },
      {
        id: "machine-alexnet", act: "M", type: "alexnet",
        en: "2012: AlexNet shocked ImageNet on 2 gaming GPUs",
        he: "2012: אלכסנט הדהימה את תחרות ImageNet עם 2 כרטיסי גיימינג",
        sub: {
          en: "ImageNet was the world championship of computer vision (1.2M photos). While traditional algorithms struggled at 26% error, AlexNet used two video-game cards (GTX 580) to slash error to 15.3% — igniting modern deep learning.",
          es: "ImageNet era el mundial de visión artificial (1,2M fotos). Los algoritmos tradicionales tenían 26% de error. AlexNet usó dos tarjetas de videojuegos (GTX 580) y redujo el error a 15,3% — desatando la IA moderna.",
          he: "תחרות ImageNet הייתה אליפות העולם בראייה ממוחשבת (1.2 מיליון תמונות). אלגוריתמים מסורתיים נתקעו ב־26% שגיאה. אלכסנט השתמשה בשני כרטיסי מסך למשחקים (GTX 580) וריסקה את השגיאה ל־15.3% — והציתה את מהפכת ה־AI המודרנית."
        },
        source: "ILSVRC 2012 · Krizhevsky, Sutskever, Hinton · Error rate 26.2% → 15.3%",
        notes: "El contador baja de 26,2% a 15,3%.\nExplicar que ImageNet era el mundial de reconocimiento visual y que dos tarjetas comerciales para videojuegos superaron a los mayores centros de supercómputo."
      },
      {
        id: "machine-formula", act: "M", type: "replacement",
        en: "Data + gaming chips + neural networks = the AI explosion.",
        he: "נתונים + שבבי משחק + רשתות עצביות = פיצוץ הבינה המלאכותית.",
        steps: ["DATA", "GAMING CHIPS", "NEURAL NETWORKS"],
        notes: "Hacer entrar los tres ingredientes y luego decir la ecuación completa.\nEl salto fue una convergencia, no un invento aislado."
      },
      {
        id: "machine-next-word", act: "M", type: "video",
        en: "Trained only to guess the next word… it learned to translate, code and reason.",
        he: "אימנו אותה רק לנחש את המילה הבאה… והיא למדה לתרגם, לתכנת ולחשוב.",
        sub: {
          en: "It assigns probabilities to all possible next words, adjusts millions of parameters, and repeats.",
          es: "Asigna probabilidades a todas las palabras posibles, ajusta millones de parámetros y repite el proceso.",
          he: "המודל מעניק הסתברות לכל מילה אפשרית, מתקן מיליוני פרמטרים וחוזר חלילה."
        },
        media: [{ id: "W5", slug: "w5-next-word", label: "W5 · 3BLUE1BROWN · 00:33–01:29", autoplay: true, volume: 0.8 }],
        source: "3Blue1Brown · Large Language Models explained briefly · excerpt for classroom analysis",
        notes: "El video explica con calma cómo predecir la siguiente palabra mediante probabilidades genera diálogo natural y razonamiento emergente."
      },
      {
        id: "machine-surprise", act: "M", type: "quote",
        en: "They designed the learning. What it learned surprised them.",
        he: "הם תכננו את הלמידה. מה שהיא למדה הפתיע אותם.",
        source: "OpenAI “sentiment neuron” 2017 · GPT-3 2020 · ChatGPT launched as a “research preview”, 30-11-2022",
        notes: "Fórmula precisa: humanos diseñaron arquitectura, datos y objetivo; parte de lo aprendido sorprendió.\nEvitar “apareció solo” o “nadie lo buscó”."
      },
      {
        id: "machine-revealed", act: "M", type: "genesis",
        en: "Not only invented — revealed. “The fountains of the deep burst open.”",
        he: "לא רק הומצא — נחשף. \"נִבְקְעוּ כָּל מַעְיְנֹת תְּהוֹם\".",
        tag: "GENESIS 7:11",
        background: "img/commons/medzhybizh-historic.jpg",
        source: "Genesis 7:11 · thematic return",
        notes: "Volver visualmente al agua y al cielo de la lámina 4.\nCerrar el interludio y regresar a la aceleración histórica."
      },
      {
        id: "acceleration", act: "III", type: "acceleration",
        en: "The intervals keep shrinking",
        he: "המרווחים בין המהפכות הולכים ומתקצרים",
        background: "img/commons/first-transistor.jpg",
        timeline: { window: [1700, 2026], active: ["r1", "r2", "r3", "r4", "ai"] },
        intervals: [
          { en: "STEAM TO ELECTRIC", value: 110 },
          { en: "ELECTRIC TO DIGITAL", value: 80 },
          { en: "DIGITAL TO CONNECTED", value: 61 },
          { en: "CONNECTED TO AI", value: 11 }
        ],
        notes: "Hacer aparecer los intervalos de mayor a menor.\nLa aceleración cambia nuestra experiencia: una generación vive varias rupturas."
      },
      {
        id: "replacement", act: "III", type: "replacement",
        en: "Muscle. Distance. Calculation. Now thought and work.",
        he: "שרירים, מרחק, חישוב — ועכשיו גם חשיבה ועבודה",
        background: "img/commons/kuka-robot.jpg",
        timeline: { window: [1700, 2026], active: ["r1", "r2", "r3", "ai"] },
        steps: ["MUSCLE", "DISTANCE", "CALCULATION", "THOUGHT + WORK"],
        notes: "Resumir cada revolución por aquello que dejó de limitar tanto al humano.\nLa IA toca una capa nueva: tareas que asociábamos con pensamiento."
      },
      {
        id: "nisan-28", act: "IV", type: "video",
        en: "“I have done whatever I can; from now on, you must do whatever you can.”",
        he: "עשיתי כל אשר ביכולתי; מכאן ולהבא עשו כל אשר ביכולתכם",
        tag: "28 NISAN 5751 · 1991",
        media: [{ id: "V5-P1", slug: "v5-rebbe-28-nisan-p1", label: "V5 · PART 1 · 01:40–02:15", autoplay: true, volume: 0.5 }],
        source: "The Rebbe · Helping to Bring Mashiach · 11 Apr 1991",
        notes: "Antes del clip, explicar que el Rebe transfiere responsabilidad.\nDespués, preguntar qué significa hacer todo lo posible con las herramientas actuales."
      },
      {
        id: "nisan-28-part-2", act: "IV", type: "video",
        en: "“Now, do everything you can to bring Mashiach, here and now, immediately.”",
        he: "עכשיו עשו כל אשר ביכולתכם להביא את משיח צדקנו תיכף ומיד ממש",
        tag: "28 NISAN 5751 · PART 2",
        media: [{ id: "V5-P2", slug: "v5-rebbe-28-nisan-p2", label: "V5 · PART 2 · 02:20–02:47", autoplay: true, volume: 0.5 }],
        source: "The Rebbe · Helping to Bring Mashiach · 11 Apr 1991",
        notes: "Segundo capítulo del mismo discurso.\nDejar que la última instrucción quede completa, sin buscar el minuto en vivo."
      },
      {
        id: "days-of-moshiach", act: "IV", type: "video",
        en: "“It is not only a feeling that the ‘birth pangs’ of Moshiach are over, it is reality.”",
        he: "אין זו רק הרגשה שחבלי משיח כבר עברו — זוהי מציאות",
        subEn: "Swords into Plowshares · disarmament as a tangible foretaste of Isaiah 2:4",
        media: [{ id: "V6", slug: "v6-rebbe-moshiach-days", label: "V6 · COMPLETE · 00:00–00:14", autoplay: true, volume: 0.5 }],
        source: "The Rebbe · Moshiach, a Reality · 16 Feb 1992; Swords Into Plowshares · 1 Feb 1992",
        notes: "Vincular el clip con el cambio geopolítico posterior a la Guerra Fría.\nNo usar la frase no verificada “we already live in the days of Moshiach”."
      },
      {
        id: "final-hours", act: "IV", type: "hours",
        en: "These are not years before. They are the final hours.",
        he: "אלה לא השנים שלפני — אלה השעות האחרונות",
        notes: "Volver al reloj del viernes y acercar la escala.\nLa tarea urgente no es esperar una época, sino aprender a vivirla ahora."
      },
      {
        id: "rambam-quote", act: "V", type: "rambam-quote",
        en: "Good will overflow. Delicacies will be as common as dust.",
        he: "הַטּוֹבָה תִּהְיֶה מֻשְׁפַּעַת הַרְבֵּה, וְכָל הַמַּעֲדַנִּים מְצוּיִין כֶּעָפָר",
        tag: "RAMBAM · MELAJIM 12:5",
        source: "Mishneh Torah, Kings and Wars 12:5",
        notes: "Leer el original lentamente y destacar la palabra mushpaat, abundancia que fluye.\nEl Rambam describe condiciones materiales que liberan la atención humana."
      },
      {
        id: "rambam-icons", act: "V", type: "rambam-icons",
        en: "Abundance frees humanity to know G-d",
        he: "השפע משחרר את האנושות כדי לדעת את ה׳",
        notes: "Hacer entrar los seis iconos uno por uno, sin explicarlos todos de golpe.\nEl último icono revela el propósito: no ocio vacío, sino conocimiento de D-os."
      },
      {
        id: "ready-made", act: "V", type: "ready-made",
        en: "The earth will offer ready-made bread and clothing",
        he: "הארץ עתידה להוציא לחם ובגדים מוכנים",
        tag: "TALMUD · SHABBAT 30b",
        source: "Shabbat 30b · aggadic image, not a literal technology forecast",
        products: ["BREAD", "CLOTHING"],
        notes: "Presentar la imagen talmúdica con una sonrisa: productos listos desde la tierra.\nHoy la automatización vuelve menos extraña esa metáfora de abundancia."
      },
      {
        id: "food", act: "V", type: "abundance",
        en: "Food: precision farming and automation can multiply abundance",
        he: "מזון: חקלאות מדויקת ואוטומציה יכולות להרבות שפע",
        abundance: "FOOD",
        notes: "Dar ejemplos sin convertir la lámina en lista técnica.\nLa idea es que producir y distribuir comida puede requerir menos escasez."
      },
      {
        id: "health", act: "V", type: "abundance",
        en: "Health: AI already sees patterns no single doctor can",
        he: "בריאות: בינה מלאכותית מזהה דפוסים שאף רופא יחיד לא יכול לראות",
        abundance: "HEALTH",
        notes: "Mencionar AlphaFold como cambio en la velocidad de investigar proteínas.\nAclarar que la IA apoya diagnóstico; no reemplaza responsabilidad médica."
      },
      {
        id: "torah", act: "V", type: "abundance",
        en: "Torah: every source can enter one living conversation",
        he: "תורה: כל מקור יכול להיכנס לשיחה חיה אחת",
        abundance: "TORAH",
        notes: "Usar Sefaria y una jevruta asistida como ejemplos cercanos.\nLa abundancia de acceso aumenta la responsabilidad de estudiar con precisión."
      },
      {
        id: "time", act: "V", type: "abundance",
        en: "Time: automation can return our attention to what matters",
        he: "זמן: אוטומציה יכולה להחזיר את תשומת הלב למה שבאמת חשוב",
        abundance: "TIME",
        notes: "La abundancia más valiosa puede ser atención recuperada.\nPreguntar qué haríamos con cinco horas semanales liberadas de tareas repetitivas."
      },
      {
        id: "leaders-abundance", act: "V", type: "prediction-cards",
        en: "Technologists predict abundance. Classical sources define its purpose.",
        he: "אנשי טכנולוגיה מנבאים שפע; המקורות הקלאסיים מגדירים את מטרתו",
        quotes: [
          { name: "SAM ALTMAN · CEO, OPENAI · 2024", quote: "A defining characteristic of the Intelligence Age will be massive prosperity.", source: "The Intelligence Age" },
          { name: "SAM ALTMAN · CEO, OPENAI · 2021", quote: "This revolution will generate enough wealth for everyone to have what they need, if we as a society manage it responsibly.", source: "Moore’s Law for Everything" },
          { name: "DEMIS HASSABIS · CEO, GOOGLE DEEPMIND · 2025", quote: "If we do this right, we should end up with radical abundance.", source: "TIME" },
          { name: "DARIO AMODEI · CEO, ANTHROPIC · 2024", quote: "At that point our current economic setup will no longer make sense, and there will be a need for a broader societal conversation about how the economy should be organized.", source: "Machines of Loving Grace" }
        ],
        source: "PREDICTIONS · Altman 2021/2024 · Hassabis, TIME 2025 · Amodei 2024",
        notes: "Marcar estas frases como predicciones, no como hechos observados.\nEl dorado queda reservado para las fuentes clásicas; el cian identifica proyecciones tecnológicas."
      },
      {
        id: "flying-car", act: "VI", type: "quote",
        en: "What happens when software meets the physical world?",
        he: "מה קורה כשהתוכנה פוגשת את העולם הפיזי?",
        sub: {
          en: "Beyond screens: humanoid robots, autonomous factories, and vehicles that fly.",
          es: "Más allá de las pantallas: robots humanoides, fábricas autónomas y vehículos que vuelan.",
          he: "מעבר למסכים: רובוטים דמויי אדם, מפעלים אוטונומיים וכלי רכב מעופפים."
        },
        notes: "Transición hacia el mundo físico y la robótica.\nPlantear la pregunta antes de mostrar el prototipo volador."
      },
      {
        id: "musk-reveal", act: "VI", type: "video",
        en: "Tesla Roadster: Elon Musk tests a rocket-thruster flying car",
        he: "טסלה רודסטר: אילון מאסק בודק רכב מעופף עם מנועי רקטה",
        sub: {
          en: "Equipped with cold-gas thrusters developed with SpaceX, Musk demonstrated a prototype capable of flight and hover.",
          es: "Equipado con propulsores de gas frío desarrollados junto a SpaceX, Musk mostró un prototipo capaz de volar y levitar.",
          he: "מצויד במנועי גז קר שפותחו עם SpaceX, מאסק הציג אב-טיפוס המסוגל לריחוף וטיסה."
        },
        media: [{ id: "V7", slug: "v7-the-ramp", label: "V7 · TESLA ROADSTER · SPACEX THRUSTERS", autoplay: true, volume: 0.8 }],
        source: "Tesla, The Ramp · Demo with SpaceX cold-gas thrusters",
        notes: "El clip muestra el despegue con propulsores de cohete.\nConectar esta transformación física con la visión de trabajo opcional."
      },
      {
        id: "post-labor", act: "VI", type: "post-labor",
        en: "“Post-labor economics describes a fundamental transformation of economic systems in which artificial intelligence and automation render human-level labor costs effectively negligible across all sectors of the economy.”",
        he: "מכונות מייצרות יותר, בזמן שעבודת אדם הופכת לבחירה",
        tag: "POST-LABOR ECONOMICS",
        background: "img/commons/kuka-robot.jpg",
        loop: ["MACHINES", "ABUNDANCE"],
        source: "David Shapiro · Post Labor Economics · 16 Nov 2023",
        notes: "Definir post-labor economics en lenguaje simple: producir sin depender de cada hora humana.\nNo implica automáticamente justicia; la distribución sigue siendo una decisión social."
      },
      {
        id: "musk-optional", act: "VI", type: "video",
        en: "“My prediction is that work will be optional.”",
        he: "התחזית שלי היא שעבודה תהיה עניין של בחירה",
        tag: "PREDICTION",
        background: "img/commons/tesla-optimus.jpg",
        media: [{ id: "V8", slug: "v8-musk-work-optional", label: "V8 · AP · 00:08–00:42", autoplay: true, volume: 0.5 }],
        source: "PREDICTION · Elon Musk, Associated Press · 19 Nov 2025; cf. Musk–Sunak 2 Nov 2023; VivaTech 23 May 2024",
        notes: "Presentar la afirmación como predicción, no como resultado empírico.\nEl clip incluye la comparación con cultivar verduras por gusto."
      },
      {
        id: "optimus", act: "VI", type: "video",
        en: "Optimus turns software into physical labor",
        he: "אופטימוס הופך תוכנה לעבודה פיזית",
        background: "img/commons/tesla-optimus.jpg",
        media: [{ id: "V9", slug: "v9-optimus", label: "V9 · COMPLETE · 00:00–00:32", autoplay: true, muted: true }],
        source: "Cheddar, 26 May 2025 · montage does not prove general autonomy or household reliability",
        notes: "Mostrar que el salto no es sólo conversación en pantalla.\nUn robot conecta modelos digitales con tareas en el mundo físico."
      },
      {
        id: "musk-rambam", act: "VI", type: "compare",
        en: "Musk: optional work. Rambam: knowing G-d.",
        he: "מאסק: עבודה לבחירה. הרמב״ם: לדעת את ה׳",
        background: "img/commons/edison-bulb.jpg",
        compare: [
          { title: "MUSK", line: "WORK OPTIONAL" },
          { title: "RAMBAM", line: "KNOW G-D" }
        ],
        source: "PREDICTION · Musk, AP 19 Nov 2025 · CLASSICAL · Mishneh Torah, Kings 12:5",
        notes: "Poner las dos frases al mismo nivel visual, sin decir que son equivalentes.\nMusk describe una condición; el Rambam propone el propósito."
      },
      {
        id: "meaning", act: "VI", type: "question",
        en: "“How do we find meaning in life if you have a magic genie that can do everything you want?”",
        he: "איך נמצא משמעות בחיים אם יש לנו ג׳יני קסום שיכול לעשות כל מה שנרצה?",
        tag: "PREDICTION",
        background: "img/commons/chatgpt-gpt4.jpg",
        source: "PREDICTION · Elon Musk in conversation with Rishi Sunak · 2 Nov 2023",
        notes: "Formular la pregunta de sentido como el límite del post-labor.\nLa respuesta de la Torá: conocimiento, estudio y relación, no consumo infinito."
      },
      {
        id: "ai-kabbalah", act: "VII", type: "jewish-wisdom",
        en: "Even AI builders turn to Jewish wisdom",
        he: "אפילו בוני בינה מלאכותית פונים לחכמה יהודית",
        wisdom: [
          { name: "GERSHOM SCHOLEM · 17 JUN 1965", quote: "Named the Weizmann Institute computer ‘Golem’" },
          { name: "NORBERT WIENER · 1964", quote: "God & Golem, Inc." },
          { name: "JARON LANIER · MICROSOFT · 2023", quote: "AI should be more like the Talmud… The Talmud is actually anti-golem" },
          { name: "DEAN W. BALL · OPENAI · JUL 2026", quote: "They have to read the Talmud to make further progress" }
        ],
        source: "NLI / Weizmann · MIT Press · Calcalist/CTech, 15 Jun 2023 · C14 reproduction, 14 Jul 2026",
        notes: "No atribuir a Altman, Amodei o Hassabis ideas sobre Cábala.\nBall está verificado mediante reproducción secundaria; presentarlo como comentario, no doctrina técnica."
      },
      {
        id: "middot", act: "VII", type: "middot",
        en: "Chesed gives. Gevurah limits. Tiferet balances.",
        he: "חסד נותן, גבורה מגבילה, ותפארת מאזנת",
        tag: "A CHASSIDIC LENS",
        middot: [
          { en: "CHESED", he: "לתת" },
          { en: "GEVURAH", he: "להגביל" },
          { en: "TIFERET", he: "לאזן" }
        ],
        notes: "Usar las midot como lente de diseño responsable.\nCapacidad sin límite puede dañar; límite sin generosidad impide crear."
      },
      {
        id: "lowest-place", act: "VIII", type: "lowlands",
        en: "AI reaches the lowest places. That is where holiness belongs.",
        he: "הבינה המלאכותית מגיעה למקומות הנמוכים ביותר — ושם שייכת הקדושה",
        notes: "Volver explícitamente a dira betajtonim de la clase 1.\nSi la IA entra en lo cotidiano, allí mismo puede servir una finalidad sagrada."
      },
      {
        id: "revelation-below", act: "VIII", type: "quote",
        en: "Every revelation below unlocks a revelation above.",
        he: "כל גילוי למטה פותח גילוי למעלה.",
        tag: "A CHASSIDIC TEACHING",
        source: "Zohar I, Vayera 117a · wisdom below and wisdom above open together",
        notes: "Enseñanza jasídica: la sabiduría de abajo y la de arriba se abren juntas.\nNuestra tarea: llenar la materia de espíritu."
      },
      {
        id: "besht-ai", act: "VIII", type: "quote",
        en: "The Baal Shem Tov opened the secrets of Torah to every Jew. AI gives us time and tools to learn them.",
        he: "הבעל שם טוב פתח את סודות התורה לכל יהודי. הבינה המלאכותית נותנת לנו זמן וכלים ללמוד אותם.",
        background: "img/commons/besht-synagogue.jpg",
        notes: "Unir acceso espiritual y acceso técnico sin decir que son equivalentes.\nLa herramienta libera tiempo; el estudio sigue requiriendo voluntad y precisión."
      },
      {
        id: "october-awakening", act: "VIII", type: "quote",
        en: "After October 7th, many hearts opened. That awakening is a gift — start with yourself.",
        he: "אחרי שבעה באוקטובר, הרבה לבבות נפתחו. ההתעוררות הזאת היא מתנה — תתחילו מעצמכם.",
        tag: "REFLECTION",
        source: "JPPI 2025 · JFNA 2025 · evidence is heterogeneous and self-reported",
        notes: "Lámina sobria: sin fotos de víctimas ni cifras.\nNo afirmar un giro uniforme; hablar de muchos corazones y empezar por uno mismo."
      },
      {
        id: "voice-nations", act: "VIII", type: "mission",
        en: "Not only for our people — for the whole world. AI + English = a voice to the nations.",
        he: "לא רק לעם שלנו — לכל העולם. בינה מלאכותית + אנגלית = קול אל העמים.",
        notes: "Cambiar la escala: del trabajo interior a una voz responsable hacia afuera.\nPedir un ejemplo de mensaje que valga la pena traducir y compartir."
      },
      {
        id: "access", act: "VIII", type: "access",
        en: "“Imagine a world where… everything… became half as expensive every two years.”",
        he: "דמיינו עולם שבו הכול נעשה זול בחצי מדי שנתיים",
        tag: "PREDICTION · CONCEPTUAL",
        source: "PREDICTION · Sam Altman, Moore’s Law for Everything · 16 Mar 2021",
        notes: "El gráfico es conceptual, no una serie de datos.\nPresentar la caída de costos como predicción de Altman, no como acceso universal observado."
      },
      {
        id: "will", act: "VIII", type: "will",
        en: "Only one variable remains: will",
        he: "אין דבר העומד בפני הרצון",
        tag: "CHASSIDIC SAYING",
        source: "Chassidic saying · parallel: Zohar II 162b, כל מלין דעלמא לא תליין אלא ברעותא",
        notes: "Presentarlo como dicho jasídico, nunca como cita talmúdica.\nEl paralelo del Zohar dice que los asuntos del mundo dependen de la voluntad."
      },
      {
        id: "same-phone", act: "VIII", type: "two-people",
        en: "Same phone. One scrolls. One builds.",
        he: "אותו טלפון — אחד גולל, ואחד בונה",
        notes: "No moralizar el descanso; contrastar hábito pasivo con creación intencional.\nEl objeto es idéntico. La voluntad produce dos futuros distintos."
      },
      {
        id: "impact-mission", act: "VIII", type: "mission",
        en: "Impact Lab turns abundance into what nobody should lack",
        he: "אימפקט לאב הופך שפע למה שלאף אחד לא צריך להיות חסר",
        notes: "Conectar la charla con proyectos concretos de los alumnos.\nCada equipo debe identificar una carencia real y convertir capacidad en ayuda."
      },
      {
        id: "taste-shabbat", act: "VIII", type: "aroma",
        en: "Living Moshiach means tasting Shabbat before Shabbat arrives",
        he: "לחיות משיח פירושו לטעום את השבת עוד לפני שהיא נכנסת",
        notes: "Cerrar el círculo del reloj y del aroma.\nVivir esa época hoy significa usar abundancia con propósito, calma y generosidad."
      },
      {
        id: "challenge", act: "VIII", type: "challenge",
        en: "",
        he: "",
        tag: "NEXT CLASS",
        notes: "Leer el desafío y pedir que cada alumno nombre a una persona concreta.\nLa próxima clase empieza mostrando una acción pequeña ya construida."
      },
      {
        id: "sources", act: "VIII", type: "sources",
        en: "Every claim should remain traceable to its source",
        he: "כל טענה צריכה להישאר מחוברת למקור שלה",
        notes: "No narrar toda la bibliografía.\nDorado: fuentes clásicas. Cian: predicciones de tecnólogos."
      },
      {
        id: "image-sources-1", act: "VIII", type: "credits",
        en: "Image sources · Wikimedia Commons · 1/2",
        he: "מקורות התמונות · ויקישיתוף · 1/2",
        credits: [
          "Nicolás Pérez · Watt engine · CC BY-SA 3.0", "David Maciulaitis · Boulton & Watt · CC BY 2.0",
          "Unknown · Stephenson’s Rocket · Public domain", "Clem Rutter · Early power loom · CC BY 3.0",
          "rumpleteaser · 1896 loom · CC BY 2.0", "William Ridley · Edward Jenner · Public domain",
          "Unknown · Alessandro Volta · Public domain", "Gillard · Volta pile · Public domain",
          "Unknown · Bell telephone · Public domain", "Floyd L. Darrow · Bell transmitter · Public domain",
          "Thomas Edison / Norris Peters · bulb · Public domain", "Unknown · Ford assembly line · Public domain",
          "United States Army · ENIAC women · Public domain", "TexasDex · ENIAC Penn · CC BY-SA 3.0",
          "Windell Oskay · first transistor · CC BY 2.0", "Mister rf · transistor replica · CC BY-SA 4.0"
        ],
        source: "Full file-page links: CREDITS.md",
        notes: "Referencia visual 1/2.\nNo hace falta narrarla; queda para trazabilidad y consulta."
      },
      {
        id: "image-sources-2", act: "VIII", type: "credits",
        en: "Image sources · Wikimedia Commons · 2/2",
        he: "מקורות התמונות · ויקישיתוף · 2/2",
        credits: [
          "Neil Armstrong / NASA · Aldrin · Public domain", "NASA / Buzz Aldrin · bootprint · Public domain",
          "Michael Hicks · IBM Simon · CC BY 2.0", "Oleg Yunakov · KUKA robot · CC BY-SA 4.0",
          "Sikander · Optimus · CC BY-SA 4.0", "Huñvreüs · ChatGPT GPT-4 · CC BY-SA 4.0",
          "StereoFolic · GPT-5 UI · CC BY-SA 4.0", "Baal Shem Tov · signature · Public domain",
          "Hranom · Besht synagogue · CC BY-SA 4.0", "P. Zholtovsky · Medzhybizh · Public domain",
          "Boris Schatz · Alter Rebbe · Public domain", "Anav et al. · Tanya rabati · Public domain",
          "Danny-w · 770 Eastern Parkway · CC BY-SA 4.0", "Dov YaHudy Grossman · Rebbe 1991 · CC BY-SA 4.0",
          "Steve Jurvetson · Elon Musk 2015 · CC BY 2.0", "Hyins · VisionTek GeForce 256 · Public domain",
          "OpenAI ImageGen · retro racing scene · illustration", "All images: Commons file pages verified 20 Oct 2026"
        ],
        source: "Full file-page links and license notices: CREDITS.md",
        notes: "Referencia visual 2/2.\nIncluye la GeForce 256 y la ilustración generada, rotulada como tal."
      }
    ]
  };

  var C = window.DECK_CONTENT;
  C.locales = {
    en: {
      metaTitle: C.meta.title, kicker: C.meta.kicker, interlude: "INTERLUDE · Inside the machine",
      adultDepth: "Adult lens: connect the claim to its historical or textual context, distinguish evidence from analogy, and invite one critical question.",
      ui: { previous: "Previous slide", next: "Next slide", fullscreen: "Fullscreen", notes: "Presenter notes", notesHint: "N closes notes", videoMissing: "Media slot", videoMissingDetail: "Add the local MP4 to activate playback", videoReady: "Click or press Space to play", pending: "SOURCE PENDING", rebbes: "CHAIN OF REBBEIM", revolutions: "INDUSTRIAL REVOLUTIONS", years: "YEARS", sources: "SOURCE MAP", interaction: "INTERACTION", prediction: "PREDICTION", source: "Source", estimatedDuration: "Estimated duration", audioPlay: "Play Hebrew explanation", audioPause: "Pause Hebrew explanation", audioRepeat: "Repeat Hebrew explanation" },
      visual: { off: "OFF", on: "ON", switches: "SWITCHES", oneLine: "ONE LINE", thousandsAtOnce: "THOUSANDS AT ONCE", scrolls: "SCROLLS", builds: "BUILDS" }
    },
    es: {
      metaTitle: "Impact Lab 3 — Del Baal Shem Tov a la IA", kicker: "IMPACT LAB · CLASE 3 · 5787", interlude: "INTERLUDIO · Dentro de la máquina",
      adultDepth: "Enfoque adulto: vincula la afirmación con su contexto histórico o textual, distingue la evidencia de la analogía y abre una pregunta crítica.",
      ui: { previous: "Lámina anterior", next: "Lámina siguiente", fullscreen: "Pantalla completa", notes: "Notas del presentador", notesHint: "N cierra las notas", videoMissing: "Espacio de video", videoMissingDetail: "Agrega el MP4 local para activar la reproducción", videoReady: "Haz clic o presiona Espacio para reproducir", pending: "FUENTE PENDIENTE", rebbes: "CADENA DE REBEIM", revolutions: "REVOLUCIONES INDUSTRIALES", years: "AÑOS", sources: "MAPA DE FUENTES", interaction: "INTERACCIÓN", prediction: "PREDICCIÓN", source: "Fuente", estimatedDuration: "Duración estimada", audioPlay: "Reproducir explicación en hebreo", audioPause: "Pausar explicación en hebreo", audioRepeat: "Repetir explicación en hebreo" },
      visual: { off: "APAGADO", on: "ENCENDIDO", switches: "INTERRUPTORES", oneLine: "UNA FILA", thousandsAtOnce: "MILES A LA VEZ", scrolls: "DESLIZA", builds: "CONSTRUYE" }
    },
    he: {
      metaTitle: "אימפקט לאב 3 — מהבעל שם טוב ועד הבינה המלאכותית", kicker: "אימפקט לאב · שיעור 3 · תשפ״ז", interlude: "הפסקה · בתוך המכונה",
      adultDepth: "העמקה למבוגרים: חברו את הטענה להקשר ההיסטורי או המקורי שלה, הבחינו בין ראיה לבין משל, ופתחו שאלה ביקורתית אחת.",
      ui: { previous: "השקופית הקודמת", next: "השקופית הבאה", fullscreen: "מסך מלא", notes: "הערות למרצה", notesHint: "N סוגר את ההערות", videoMissing: "מקום לסרטון", videoMissingDetail: "יש להוסיף את קובץ ה־MP4 המקומי", videoReady: "לחצו או הקישו רווח להפעלה", pending: "המקור עדיין חסר", rebbes: "שושלת רבותינו נשיאינו", revolutions: "המהפכות התעשייתיות", years: "שנים", sources: "מפת מקורות", interaction: "פעילות", prediction: "תחזית", source: "מקור", estimatedDuration: "משך משוער", audioPlay: "השמעת הקריינות", audioPause: "השהיית הקריינות", audioRepeat: "השמעה חוזרת" },
      visual: { off: "כבוי", on: "דלוק", switches: "מתגים", oneLine: "שורה אחת", thousandsAtOnce: "אלפים יחד", scrolls: "גולל", builds: "בונה" }
    }
  };

  var ES_COPY = {
    "opening": "Del Baal Shem Tov a la IA",
    "home-below": "Fuimos creados para hacer aquí abajo una morada para Di-s",
    "why-now": "¿Por qué toda esta tecnología está llegando justo ahora?",
    "genesis": "Las fuentes del abismo se abrieron. Las ventanas del cielo se abrieron.",
    "zohar-5500": "El siglo 56 comenzó en 5500: 1740",
    "double-opening": "El cielo se abrió como jasidut. El abismo se abrió como ciencia.",
    "besht": "El Baal Shem Tov abrió la luz interior de la Torá para todos",
    "watt-jenner-volta": "El mismo siglo: Watt 1769 · Jenner 1796 · Volta 1800",
    "wellsprings": "Cuando tus manantiales se difundan hacia afuera, vendrá el Maestro",
    "seven-days": "Siete días. Siete mil años. Estamos al final del viernes.",
    "friday-clock": "El año 5787 se siente como un viernes a las 18:50",
    "shabbat-smell": "El viernes por la tarde, toda la casa ya huele a Shabat",
    "technology-aroma": "La tecnología es el aroma de Shabat",
    "timeline-overview": "Dos líneas de tiempo. Una historia que se acelera.",
    "first-revolution": "El vapor convirtió la fuerza muscular en fuerza mecánica",
    "tanya-mind": "El Tania hizo que cada mente pudiera comprender el jasidut",
    "second-revolution": "La electricidad borró la noche. Las líneas de montaje multiplicaron la fuerza humana.",
    "train-telephone": "«Desde el teléfono: ¡lo que se dice aquí se escucha en otro lugar!»",
    "third-revolution": "Apolo 11 aterrizó con solo treinta segundos de combustible",
    "chanukah-satellite": "Janucá Live conectó comunidades judías de todo el mundo por satélite",
    "fourth-revolution": "La cuarta revolución conectó todo, en todas partes",
    "ai-revolution": "La máquina aprendió lenguaje, visión y una aparente forma de pensar",
    "machine-childhood": "Cuando era niño, comprábamos tarjetas NVIDIA… para jugar carreras.",
    "machine-switch": "Un computador es solo un conjunto de interruptores. ENCENDIDO = 1. APAGADO = 0.",
    "machine-human-video": "Cuando las personas siguen una regla binaria, forman un computador vivo",
    "machine-eniac": "1945: 17.468 tubos llenaban una sala. Hoy: 208 mil millones de interruptores en un chip.",
    "machine-parallel": "Una CPU es un genio que trabaja en fila. Una GPU son miles trabajando a la vez.",
    "machine-parallel-video": "Una GPU permite ver el trabajo en paralelo.",
    "machine-same-math": "Los juegos y la IA necesitan la misma matemática: millones de multiplicaciones a la vez.",
    "machine-old-new": "La IA antigua seguía reglas escritas por personas. La nueva aprende de ejemplos.",
    "machine-alexnet": "2012: AlexNet revolucionó ImageNet con 2 tarjetas gamer",
    "machine-formula": "Datos + chips para videojuegos + redes neuronales = la explosión de la IA.",
    "machine-next-word": "La entrenaron solo para adivinar la palabra siguiente… y aprendió a traducir, programar y razonar.",
    "machine-surprise": "Diseñaron el aprendizaje. Lo que aprendió los sorprendió.",
    "machine-revealed": "No solo inventada: revelada. «Se abrieron las fuentes del abismo».",
    "acceleration": "Los intervalos siguen acortándose",
    "replacement": "Músculo. Distancia. Cálculo. Ahora, pensamiento y trabajo.",
    "nisan-28": "«He hecho todo lo que puedo. Desde ahora, ustedes deben hacer todo lo que puedan».",
    "nisan-28-part-2": "«Ahora hagan todo lo posible para traer al Mashíaj, aquí y ahora, de inmediato».",
    "days-of-moshiach": "«No es solo una sensación que los dolores de parto del Mashíaj terminaron. Es una realidad».",
    "final-hours": "No son los años anteriores. Son las horas finales.",
    "rambam-quote": "El bien fluirá en abundancia. Los manjares serán tan comunes como el polvo.",
    "rambam-icons": "La abundancia libera a la humanidad para conocer a Di-s",
    "ready-made": "La tierra ofrecerá pan y ropa ya preparados",
    "food": "Alimentos: la agricultura de precisión y la automatización pueden multiplicar la abundancia",
    "health": "Salud: la IA ya detecta patrones que ningún médico podría ver por sí solo",
    "torah": "Torá: cada fuente puede entrar en una conversación viva",
    "time": "Tiempo: la automatización puede devolver nuestra atención a lo que importa",
    "leaders-abundance": "Los tecnólogos predicen abundancia. Las fuentes clásicas definen su propósito.",
    "flying-car": "¿Qué ocurre cuando el software se encuentra con el mundo físico?",
    "musk-reveal": "Tesla Roadster: Elon Musk prueba un auto volador con propulsores de cohete",
    "post-labor": "«La economía poslaboral describe una transformación en la que la IA y la automatización vuelven casi insignificante el costo del trabajo humano en todos los sectores».",
    "musk-optional": "«Mi predicción es que el trabajo será opcional».",
    "optimus": "Optimus convierte software en trabajo físico",
    "musk-rambam": "Musk: trabajo opcional. Rambam: conocer a Di-s.",
    "meaning": "«¿Cómo encontramos sentido en la vida si tenemos un genio mágico que puede hacer todo lo que queremos?»",
    "ai-kabbalah": "Incluso quienes construyen IA recurren a la sabiduría judía",
    "middot": "Jésed da. Guevurá limita. Tiféret equilibra.",
    "lowest-place": "La IA llega a los lugares más bajos. Allí debe estar la santidad.",
    "revelation-below": "Cada revelación de abajo abre una revelación de arriba.",
    "besht-ai": "El Baal Shem Tov abrió los secretos de la Torá para cada judío. La IA nos da tiempo y herramientas para estudiarlos.",
    "october-awakening": "Después del 7 de octubre, muchos corazones se abrieron. Ese despertar es un regalo: comienza por ti.",
    "voice-nations": "No solo para nuestro pueblo: para el mundo entero. IA + inglés = una voz hacia las naciones.",
    "access": "«Imagina un mundo donde… todo… costara la mitad cada dos años».",
    "will": "Solo queda una variable: la voluntad",
    "same-phone": "El mismo teléfono. Uno desliza. Otro construye.",
    "impact-mission": "Impact Lab convierte la abundancia en aquello que nadie debería necesitar",
    "taste-shabbat": "Vivir Mashíaj significa saborear Shabat antes de que llegue",
    "challenge": "",
    "sources": "Cada afirmación debe poder rastrearse hasta su fuente",
    "image-sources-1": "Fuentes de imágenes · Wikimedia Commons · 1/2",
    "image-sources-2": "Fuentes de imágenes · Wikimedia Commons · 2/2"
  };
  C.slides.forEach(function (slide) { slide.es = ES_COPY[slide.id]; });
  C.slides.forEach(function (item) {
    item.notesI18n = {
      en: "Explain the central idea in plain language: " + (item.en || C.challenge.en) + (item.source ? "\nKeep the distinction between the claim and its source explicit." : ""),
      es: item.notes,
      he: "הסבירו את הרעיון המרכזי בשפה בהירה: " + (item.he || C.challenge.he) + (item.source ? "\nחשוב להבחין במפורש בין הטענה לבין המקור שלה." : "")
    };
  });

  C.challenge.es = "Construyan una acción con IA que le dé a alguien tiempo, dignidad o Torá";
  C.acts.forEach(function (act, index) {
    var esTitles = ["La pregunta", "La profecía", "Viernes por la tarde", "Aceleración", "Dentro de la máquina", "Ya está aquí", "Abundancia", "Después del trabajo", "Espejos antiguos", "Nuestra tarea"];
    var heTitles = ["השאלה", "הנבואה", "יום שישי אחר הצהריים", "האצה", "בתוך המכונה", "כבר כאן", "שפע", "אחרי העבודה", "מראות עתיקות", "העבודה שלנו"];
    act.labelI18n = { en: act.label, es: act.id === "M" ? "INTERLUDIO" : "ACTO " + act.id, he: act.id === "M" ? "הפסקה" : "מערכה " + act.id };
    act.titleI18n = { en: act.title, es: esTitles[index], he: heTitles[index] };
  });

  C.rambamItems.forEach(function (item) {
    var translations = {
      hunger: ["SIN HAMBRE", "אין רעב"], war: ["SIN GUERRA", "אין מלחמה"], envy: ["SIN ENVIDIA", "אין קנאה"],
      good: ["EL BIEN FLUYE", "הטובה מושפעת"], delicacies: ["MANJARES COMO POLVO", "מעדנים כעפר"], knowledge: ["CONOCER A DI-S", "לדעת את ה׳"]
    }[item.id];
    item.es = translations[0]; item.he = translations[1];
  });

  C.sources.forEach(function (source) {
    source.en = source.text;
    source.es = source.text.replace("CLASSICAL", "CLÁSICA").replace("PREDICTION", "PREDICCIÓN").replace("HISTORY", "HISTORIA").replace("IMAGES", "IMÁGENES");
    source.he = source.text.replace("CLASSICAL", "מקורות קלאסיים").replace("PREDICTION", "תחזית").replace("HISTORY", "היסטוריה").replace("IMAGES", "תמונות");
  });

  function slide(id) { return C.slides.find(function (item) { return item.id === id; }); }
  slide("opening").sub = { en: "Living the days of Moshiach", es: "Vivir los días del Mashíaj", he: "לחיות את ימות המשיח" };
  slide("days-of-moshiach").sub = { en: slide("days-of-moshiach").subEn, es: "Espadas en arados · el desarme como anticipo concreto de Isaías 2:4", he: "וכיתתו חרבותם לאתים · פירוק הנשק כטעימה מוחשית מישעיהו ב׳, ד׳" };
  slide("machine-human-video").interactionEs = "Mano arriba = 1, mano abajo = 0. Tres estudiantes forman una compuerta lógica.";
  slide("machine-human-video").interactionHe = "יד למעלה = 1, יד למטה = 0. שלושה תלמידים יוצרים שער לוגי.";
  slide("machine-parallel-video").notesI18n = {
    en: "A CPU would paint the dots one after another. The GPU launches many similar operations at the same time. The paint demonstration makes parallel work visible; it is not a benchmark and the paintballs are not literal GPU cores.",
    es: "Una CPU pintaría los puntos uno tras otro. La GPU lanza muchas operaciones parecidas al mismo tiempo. La pintura hace visible el paralelismo; no es una prueba de velocidad y las bolas no representan núcleos reales.",
    he: "מעבד רגיל היה צובע נקודות בזו אחר זו. הכרטיס הגרפי מפעיל הרבה פעולות דומות יחד. זו המחשה של מקביליות, לא מבחן ביצועים ולא תיאור מילולי של ליבות."
  };
  slide("machine-same-math").notesI18n = {
    en: "A game transforms many points to draw a 3D image. A neural network also performs huge batches of matrix multiplications. The applications differ, but the shared parallel math made gaming chips useful for AI.",
    es: "Un juego transforma muchos puntos para dibujar una imagen 3D. Una red neuronal también realiza grandes lotes de multiplicaciones de matrices. Las aplicaciones son distintas, pero la matemática paralela hizo útiles para IA los chips de videojuegos.",
    he: "משחקים ורשתות עצביות הם יישומים שונים, אך שניהם משתמשים בהרבה כפל מטריצות במקביל. לכן שבבי משחקים התאימו גם לבינה מלאכותית."
  };
  slide("machine-old-new").notesI18n = {
    en: "Older AI depended mostly on rules and search procedures written by people. Machine learning gives the system many examples and adjusts internal parameters when its answers are wrong.",
    es: "La IA anterior dependía sobre todo de reglas y búsquedas escritas por personas. El aprendizaje automático recibe muchos ejemplos y ajusta parámetros internos cuando se equivoca.",
    he: "בינה ישנה נשענה בעיקר על חוקים וחיפוש שאנשים כתבו. בלמידת מכונה המערכת מקבלת דוגמאות רבות ומתקנת פרמטרים פנימיים לפי הטעויות."
  };
  slide("machine-alexnet").notesI18n = {
    en: "In 2012 AlexNet used two GTX 580 gaming GPUs. Its ImageNet top-five error was 15.3%, far below the next entry at 26.2%. The result proved that deep neural networks, large datasets and GPU parallel computing had matured together to outperform all traditional vision code.",
    es: "En 2012 AlexNet usó dos GPU GTX 580 para videojuegos. Su error top-5 en ImageNet bajó al 15,3%, frente al 26,2% del competidor más cercano. El resultado demostró que redes profundas, grandes conjuntos de datos y cómputo GPU superaban a todos los métodos tradicionales.",
    he: "בשנת 2012 אלכסנט השתמשה בשני כרטיסי מסך למשחקים (GTX 580). שיעור השגיאה שלה ב-ImageNet ירד ל-15.3% לעומת 26.2% למקום השני, והוכיח שרשתות עמוקות וכרטיסי מסך יצרו קפיצת מדרגה היסטורית בבינה מלאכותית."
  };
  slide("machine-formula").notesI18n = {
    en: "No single invention caused the leap. Large datasets supplied examples, gaming chips supplied parallel computing, and neural networks supplied a method that improved from those examples.",
    es: "Ningún invento produjo por sí solo el salto. Los grandes conjuntos de datos aportaron ejemplos, los chips de videojuegos cálculo paralelo y las redes neuronales un método para aprender de esos ejemplos.",
    he: "לא המצאה אחת יצרה את הקפיצה. מאגרי נתונים סיפקו דוגמאות, שבבי משחק סיפקו חישוב מקבילי, ורשתות עצביות סיפקו שיטת למידה."
  };
  slide("machine-next-word").notesI18n = {
    en: "During training, the model guesses the next token, compares its guess with the real token, and adjusts millions of parameters. Repeating this across enormous text collections teaches patterns that later support translation, coding and reasoning tasks.",
    es: "Durante el entrenamiento, el modelo adivina el siguiente token, compara su respuesta con el token real y ajusta millones de parámetros. Al repetirlo sobre enormes colecciones de texto aprende patrones útiles para traducir, programar y razonar.",
    he: "באימון המודל מנחש את הטוקן הבא, משווה לתשובה האמיתית ומתקן מיליוני פרמטרים. חזרה על כך מלמדת דפוסים שמשמשים אחר כך לתרגום, תכנות והסקה."
  };

  slide("double-opening").split[0].es = "CIELO"; slide("double-opening").split[1].es = "EL ABISMO";
  slide("acceleration").intervals.forEach(function (item, i) {
    item.es = ["VAPOR A ELECTRICIDAD", "ELECTRICIDAD A DIGITAL", "DIGITAL A CONECTADA", "CONECTADA A IA"][i];
    item.he = ["מקיטור לחשמל", "מחשמל לדיגיטל", "מדיגיטל לקישוריות", "מקישוריות לבינה מלאכותית"][i];
  });
  slide("replacement").steps = [
    { en: "MUSCLE", es: "MÚSCULO", he: "שריר" }, { en: "DISTANCE", es: "DISTANCIA", he: "מרחק" },
    { en: "CALCULATION", es: "CÁLCULO", he: "חישוב" }, { en: "THOUGHT + WORK", es: "PENSAMIENTO + TRABAJO", he: "חשיבה + עבודה" }
  ];
  slide("machine-formula").steps = [
    { en: "DATA", es: "DATOS", he: "נתונים" }, { en: "GAMING CHIPS", es: "CHIPS PARA JUEGOS", he: "שבבי משחק" },
    { en: "NEURAL NETWORKS", es: "REDES NEURONALES", he: "רשתות עצביות" }
  ];
  slide("train-telephone").symbols = [
    { en: "TRAIN", es: "TREN", he: "רכבת" }, { en: "TELEGRAPH", es: "TELÉGRAFO", he: "טלגרף" }, { en: "TELEPHONE", es: "TELÉFONO", he: "טלפון" }
  ];
  slide("ready-made").products = [{ en: "BREAD", es: "PAN", he: "לחם" }, { en: "CLOTHING", es: "ROPA", he: "בגדים" }];
  [["food", "FOOD", "ALIMENTOS", "מזון"], ["health", "HEALTH", "SALUD", "בריאות"], ["torah", "TORAH", "TORÁ", "תורה"], ["time", "TIME", "TIEMPO", "זמן"]].forEach(function (row) {
    slide(row[0]).abundanceI18n = { en: row[1], es: row[2], he: row[3] };
  });
  slide("post-labor").loop = [{ en: "MACHINES", es: "MÁQUINAS", he: "מכונות" }, { en: "ABUNDANCE", es: "ABUNDANCIA", he: "שפע" }];
  slide("musk-rambam").compare[0].en = "WORK OPTIONAL"; slide("musk-rambam").compare[0].es = "TRABAJO OPCIONAL"; slide("musk-rambam").compare[0].he = "עבודה לבחירה";
  slide("musk-rambam").compare[1].en = "KNOW G-D"; slide("musk-rambam").compare[1].es = "CONOCER A DI-S"; slide("musk-rambam").compare[1].he = "לדעת את ה׳";
  slide("middot").middot[0].es = "DAR"; slide("middot").middot[1].es = "LIMITAR"; slide("middot").middot[2].es = "EQUILIBRAR";

  slide("leaders-abundance").quotes[0].quoteI18n = { en: slide("leaders-abundance").quotes[0].quote, es: "Una característica definitoria de la Era de la Inteligencia será una prosperidad enorme.", he: "מאפיין מכריע של עידן התבונה יהיה שגשוג עצום." };
  slide("leaders-abundance").quotes[1].quoteI18n = { en: slide("leaders-abundance").quotes[1].quote, es: "Esta revolución generará riqueza suficiente para que todos tengan lo que necesitan, si la sociedad la administra con responsabilidad.", he: "המהפכה הזאת תיצור די עושר כדי שלכולם יהיה מה שהם צריכים, אם החברה תנהל אותו באחריות." };
  slide("leaders-abundance").quotes[2].quoteI18n = { en: slide("leaders-abundance").quotes[2].quote, es: "Si lo hacemos bien, deberíamos llegar a una abundancia radical.", he: "אם נעשה זאת נכון, נוכל להגיע לשפע רדיקלי." };
  slide("leaders-abundance").quotes[3].quoteI18n = { en: slide("leaders-abundance").quotes[3].quote, es: "En ese punto, nuestra estructura económica actual dejará de tener sentido y tendremos que conversar sobre cómo organizar la economía.", he: "בשלב הזה המבנה הכלכלי הנוכחי כבר לא יהיה הגיוני, ונצטרך דיון רחב על ארגון הכלכלה." };

  var wisdomTranslations = [
    ["Llamó «Golem» al computador del Instituto Weizmann", "קרא למחשב של מכון ויצמן בשם ״גולם״"],
    ["Dios y Golem, S.A.", "אלוהים וגולם בע״מ"],
    ["La IA debería parecerse más al Talmud… El Talmud es, en realidad, antigólem", "הבינה המלאכותית צריכה להיות דומה יותר לתלמוד… התלמוד הוא למעשה אנטי־גולם"],
    ["Tienen que estudiar el Talmud para seguir avanzando", "כדי להתקדם עוד, הם צריכים ללמוד תלמוד"]
  ];
  slide("ai-kabbalah").wisdom.forEach(function (item, i) { item.quoteI18n = { en: item.quote, es: wisdomTranslations[i][0], he: wisdomTranslations[i][1] }; });

  var tagMap = {
    "TANYA · CHAPTER 36": ["TANIA · CAPÍTULO 36", "תניא · פרק ל״ו"],
    "GENESIS 7:11": ["GÉNESIS 7:11", "בראשית ז׳, י״א"],
    "ZOHAR · VAYERA 117a": ["ZOHAR · VAYERÁ 117a", "זוהר · וירא קי״ז ע״א"],
    "BAAL SHEM TOV · EXPERIENCE 1746 · LETTER c. 1752": ["BAAL SHEM TOV · EXPERIENCIA 1746 · CARTA c. 1752", "הבעל שם טוב · החוויה תק״ו · האיגרת בערך תקי״ב"],
    "ILLUSTRATION": ["ILUSTRACIÓN", "איור"],
    "28 NISAN 5751 · 1991": ["28 DE NISÁN 5751 · 1991", "כ״ח בניסן תנש״א · 1991"],
    "28 NISAN 5751 · PART 2": ["28 DE NISÁN 5751 · PARTE 2", "כ״ח בניסן תנש״א · חלק ב׳"],
    "RAMBAM · MELAJIM 12:5": ["RAMBAM · MELAJIM 12:5", "רמב״ם · הלכות מלכים י״ב, ה׳"],
    "TALMUD · SHABBAT 30b": ["TALMUD · SHABAT 30b", "תלמוד · שבת ל׳ ע״ב"],
    "PREDICTION": ["PREDICCIÓN", "תחזית"], "PREDICTION · CONCEPTUAL": ["PREDICCIÓN · CONCEPTUAL", "תחזית · המחשה רעיונית"],
    "REFLECTION": ["REFLEXIÓN", "למחשבה"], "NEXT CLASS": ["PRÓXIMA CLASE", "לשיעור הבא"], "A CHASSIDIC LENS": ["UNA MIRADA JASÍDICA", "מבט חסידי"],
    "A CHASSIDIC TEACHING": ["ENSEÑANZA JASÍDICA", "תורה חסידית"], "CHASSIDIC SAYING": ["DICHO JASÍDICO", "פתגם חסידי"], "POST-LABOR ECONOMICS": ["ECONOMÍA POSLABORAL", "כלכלה שאחרי העבודה"]
  };
  C.slides.forEach(function (item) { if (item.tag && tagMap[item.tag]) item.tagI18n = { en: item.tag, es: tagMap[item.tag][0], he: tagMap[item.tag][1] }; });

  var rebbeNames = [
    ["Baal Shem Tov", "Baal Shem Tov", "הבעל שם טוב"], ["Maggid", "Maguíd", "המגיד"], ["Alter Rebbe", "Alter Rebe", "אדמו״ר הזקן"],
    ["Tzemach Tzedek", "Tzémaj Tzédek", "הצמח צדק"], ["Maharash", "Maharash", "המהר״ש"], ["Rashab", "Rashab", "הרש״ב"],
    ["Rayatz", "Rayatz", "הריי״צ"], ["The Rebbe", "El Rebe", "הרבי"]
  ];
  C.timeline.rebbes.forEach(function (item, i) { item.nameI18n = { en: rebbeNames[i][0], es: rebbeNames[i][1], he: rebbeNames[i][2] }; });
  var revolutionNames = [
    ["1st · STEAM", "1.ª · VAPOR", "ראשונה · קיטור"], ["2nd · ELECTRIC", "2.ª · ELECTRICIDAD", "שנייה · חשמל"],
    ["3rd · DIGITAL", "3.ª · DIGITAL", "שלישית · דיגיטל"], ["4th · CONNECTED", "4.ª · CONECTADA", "רביעית · קישוריות"], ["AI", "IA", "בינה מלאכותית"]
  ];
  C.timeline.revolutions.forEach(function (item, i) { item.nameI18n = { en: revolutionNames[i][0], es: revolutionNames[i][1], he: revolutionNames[i][2] }; });

  var originalHebrew = {
    "genesis": "נִבְקְעוּ כָּל מַעְיְנֹת תְּהוֹם רַבָּה, וַאֲרֻבֹּת הַשָּׁמַיִם נִפְתָּחוּ",
    "zohar-5500": "וּבְשִׁית מֵאָה שְׁנִין לִשְׁתִיתָאָה יִתְפַּתְּחוּן תַּרְעֵי דְחָכְמְתָא לְעֵילָא וּמַבּוּעֵי דְחָכְמְתָא לְתַתָּא",
    "wellsprings": "לכשיפוצו מעיינותיך חוצה",
    "train-telephone": "מה שמדברים כאן נשמע במקום אחר",
    "nisan-28": "עשיתי כל אשר ביכולתי; מכאן ולהבא עשו כל אשר ביכולתכם",
    "nisan-28-part-2": "עשו כל אשר ביכולתכם להביא בפועל את משיח צדקנו תיכף ומיד ממש",
    "days-of-moshiach": "אין זו רק הרגשה שחבלי משיח כבר עברו, אלא זוהי מציאות",
    "rambam-quote": "הַטּוֹבָה תִּהְיֶה מֻשְׁפַּעַת הַרְבֵּה, וְכָל הַמַּעֲדַנִּים מְצוּיִין כֶּעָפָר",
    "ready-made": "עתידה ארץ ישראל שתוציא גלוסקאות וכלי מילת",
    "will": "כָּל מִלִּין דְּעָלְמָא לָא תַּלְיָין אֶלָּא בִּרְעוּתָא"
  };
  Object.keys(originalHebrew).forEach(function (id) { slide(id).original = { lang: "he", text: originalHebrew[id] }; });
  ["post-labor", "musk-optional", "meaning", "access"].forEach(function (id) {
    slide(id).original = { lang: "en", text: slide(id).en };
  });
})();
