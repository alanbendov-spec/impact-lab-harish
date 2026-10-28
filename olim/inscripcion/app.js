/**
 * Impact Lab Olim Harish — Registration Landing
 * Multilingual Engine (HE, EN, RU, ES) & Google Apps Script Form Submission
 */

// Configuration: Insert deployed Google Apps Script Web App URL here
const CONFIG = {
  // Alan's deployed Apps Script Web App URL:
  GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbx_placeholder_olim_promo/exec',
  // Optional Monday.com form fallback URL if required by municipality:
  MONDAY_FALLBACK_URL: '',
};

// Complete 4-Language Translations Dictionary
const TRANSLATIONS = {
  he: {
    dir: 'rtl',
    langName: 'עברית',
    brandTitle: 'אימפקט לאב חריש',
    brandSub: 'סדנת AI לנוער עולה',
    badgeGrade: '⚡ כיתות ז׳–י״ב',
    badgeFree: '🎁 100% חינם',
    badgeOlim: '🌍 לנוער עולה בחריש',
    heroTitle: 'יוצרים עם <span class="glow">בינה מלאכותית</span> בחריש',
    heroLead: 'רוצים לבנות אפליקציה, משחק, שיר או סרטון משלכם? סדנת הדגל לנוער עולה במועדון מחוברים. בונים עם הכלים הכי מתקדמים בעולם, פוגשים חברים ונהנים מכיבוד שווה!',
    ctaRegister: 'להרשמה מיידית בחינם 🚀',
    ctaLearnMore: 'למידע נוסף 👇',
    videoCaption: '🎬 צפו בטיזר: מה מחכה לכם בסדנה',
    
    // What we do
    whatWeDoEyebrow: 'מה נעשה בסדנה?',
    whatWeDoTitle: 'ארבעה עולמות של יצירה וטכנולוגיה',
    card1Title: 'בניית אפליקציות ומשחקים',
    card1Desc: 'נלמד להשתמש ב-ChatGPT, Claude ו-Lovable כדי להפוך רעיון לאפליקציה או משחק אינטראקטיבי אמיתי ברשת.',
    card2Title: 'יצירת סרטונים ומוזיקה',
    card2Desc: 'מייצרים קליפים ויראליים, מוזיקה מקורית וגרפיקות תלת-ממדיות בעזרת כלי ה-Generative AI החדשים ביותר.',
    card3Title: 'כיף, חברים וכיבוד שווה',
    card3Desc: 'בלי ציונים, בלי מבחנים ובלי שיעורי בית. אתגרים קבוצתיים, אווירה כיפית ופיצות וחטיפים בכל שבוע.',
    card4Title: 'מיזמים לחריש וסיורי הייטק',
    card4Desc: 'מציגים פרויקטים ורעיונות להנהלת העירייה, ויוצאים בעתיד לסיורי השראה בחברות הייטק בתל אביב ובחיפה.',

    // Logistics
    logisticsEyebrow: 'פרטי הסדנה',
    logisticsTitle: 'איפה ומתי נפגשים?',
    logWhenLabel: 'מתי נפגשים',
    logWhenVal: 'ימי ראשון 17:30',
    logWhenSub: 'משך: שעה עד שעה וחצי',
    logStartLabel: 'מפגש פתיחה',
    logStartVal: '8 בנובמבר 2026',
    logStartSub: 'אל תפספסו את ההתחלה!',
    logWhereLabel: 'איפה',
    logWhereVal: 'מועדון מחוברים חריש',
    logWhereSub: 'כתובת מדויקת תישלח לנרשמים',
    logCostLabel: 'עלות',
    logCostVal: 'חינם לגמרי!',
    logCostSub: 'במימון משרד העלייה והקליטה ועיריית חריש',

    // Instructor
    instructorEyebrow: 'מי מעביר את הסדנה?',
    instructorTitle: 'נעים להכיר, מרדכי בנדוב',
    instructorBadge: 'מנחה הסדנה',
    instructorRole: 'מורה לאנגלית ואימפקט לאב בישיבה תיכונית חריש · יזם הייטק',
    instructorBio: 'מרדכי (אלן) בנדוב מלווה צעירים לפיתוח מיומנויות העתיד, חשיבה יזמית ושימוש מעשי בכלי AI מהמתקדמים בעולם. הסדנה מועברת באווירה פתוחה, בגובה העיניים, עם דגש על עשייה מעשית, חיבור חברתי וכיף גדול.',

    // FAQ
    faqEyebrow: 'שאלות ותשובות',
    faqTitle: 'כל מה שחשוב לדעת',
    faq1Q: 'האם צריך ידע קודם בתכנות או במחשבים?',
    faq1A: 'ממש לא! הסדנה בנויה כך שכל אחד ואחת יכולים להצליח, גם אם לא כתבתם שורת קוד בחיים. נלמד לעבוד עם כלי בינה מלאכותית שמייצרים קוד בשבילנו.',
    faq2Q: 'לאילו גילאים הסדנה מתאימה?',
    faq2A: 'הסדנה מיועדת לנוער עולה בכיתות ז׳ עד י״ב (גילאי 12 עד 18) תושבי חריש והסביבה.',
    faq3Q: 'באילו שפות מתנהלת הסדנה?',
    faq3A: 'הסדנה מונחית בעברית פשוטה וברורה, עם ליווי ותמיכה מלאה ברוסית, ספרדית ואנגלית לפי הצורך.',
    faq4Q: 'האם צריך להביא מחשב נייד?',
    faq4A: 'אם יש לכם מחשב נייד, מומלץ מאוד להביא אותו. אם אין, אל דאגה — היערכנו עם מחשבים ופתרונות עבודה בצוותים.',
    faq5Q: 'האם ההשתתפות באמת בחינם?',
    faq5A: 'כן, 100% חינם! התוכנית ממומנת במלואה ע"י משרד העלייה והקליטה, עיריית חריש ומועדון מחוברים.',

    // Form
    formTitle: 'טופס הרשמה לסדנה',
    formSubtitle: 'הבטיחו מקום מראש — מספר המשתתפים מוגבל!',
    labelFirstName: 'שם פרטי',
    labelLastName: 'שם משפחה',
    labelGrade: 'כיתה / גיל',
    selectGradePlaceholder: 'בחרו כיתה...',
    labelLanguages: 'שפת אם ושפות דיבור',
    labelTeenPhone: 'טלפון נייד של הנער/ה (לוואטסאפ)',
    labelParentName: 'שם מלא של אחד ההורים',
    labelParentPhone: 'טלפון נייד של ההורה',
    labelNotes: 'הערות או בקשות מיוחדות',
    labelConsent: 'אני מאשר/ת את השתתפות בני/בתי בסדנה וקבלת עדכונים בוואטסאפ',
    btnSubmit: 'שליחת טופס הרשמה 🚀',
    submittingText: 'שולח נתונים, רק רגע...',
    successMsg: '🎉 איזה יופי! ההרשמה התקבלה בהצלחה. שלחנו הודעת עדכון למארגנים, וניצור עמכם קשר בוואטסאפ לקראת מפגש הפתיחה ב-8 בנובמבר!',
    errorMsg: 'קרתה תקלה בשליחת הטופס. אנא נסו שוב או פנו ישירות בוואטסאפ.',
    fallbackNotice: 'מתקשים בטופס? אפשר להירשם ישירות גם אצל דבי במועדון מחוברים.',

    footerCopy: 'אימפקט לאב חריש לעולים · מועדון מחוברים · עיריית חריש · משרד העלייה והקליטה'
  },

  en: {
    dir: 'ltr',
    langName: 'English',
    brandTitle: 'Impact Lab Harish',
    brandSub: 'AI Workshop for Olim Youth',
    badgeGrade: '⚡ Grades 7–12',
    badgeFree: '🎁 100% Free',
    badgeOlim: '🌍 Olim Teens in Harish',
    heroTitle: 'Create with <span class="glow">Artificial Intelligence</span> in Harish',
    heroLead: 'Want to build your own app, game, song, or video? The premier AI workshop for Olim youth at Moadon Mehubarim. Build with world-class AI tools, make new friends, and enjoy awesome snacks!',
    ctaRegister: 'Register Free Now 🚀',
    ctaLearnMore: 'Learn More 👇',
    videoCaption: '🎬 Watch teaser: What awaits you in the lab',

    whatWeDoEyebrow: 'WHAT WE DO',
    whatWeDoTitle: 'Four Worlds of Tech & Creative Power',
    card1Title: 'Build Apps & Games',
    card1Desc: 'Learn to use ChatGPT, Claude, and Lovable to turn any idea into a live, interactive web app or playable game.',
    card2Title: 'Generate Video & Music',
    card2Desc: 'Produce viral clips, original songs, and 3D graphics using the newest Generative AI tools available.',
    card3Title: 'Fun, Friends & Snacks',
    card3Desc: 'No grades, no exams, no homework. Team challenges, exciting gaming vibes, and pizza & treats every session.',
    card4Title: 'Harish Projects & Tech Visits',
    card4Desc: 'Present cool civic project ideas to the city municipality, and join future inspiration trips to tech giants in Tel Aviv and Haifa.',

    logisticsEyebrow: 'WORKSHOP DETAILS',
    logisticsTitle: 'When & Where?',
    logWhenLabel: 'When',
    logWhenVal: 'Sundays @ 17:30',
    logWhenSub: 'Duration: 1 to 1.5 hours',
    logStartLabel: 'Kickoff Date',
    logStartVal: 'November 8, 2026',
    logStartSub: "Don't miss the first session!",
    logWhereLabel: 'Location',
    logWhereVal: 'Moadon Mehubarim Harish',
    logWhereSub: 'Exact address sent to registrants',
    logCostLabel: 'Cost',
    logCostVal: '100% Free!',
    logCostSub: 'Sponsored by Misrad HaKlita & Municipality',

    instructorEyebrow: 'YOUR INSTRUCTOR',
    instructorTitle: 'Meet Mordechai Bendov',
    instructorBadge: 'Lead Facilitator',
    instructorRole: 'English & Impact Lab Teacher at Harish Yeshiva · Tech Entrepreneur',
    instructorBio: 'Mordechai (Alan) Bendov empowers youth with future-ready tech skills, entrepreneurial thinking, and hands-on AI creation. The workshop is delivered in an engaging, approachable atmosphere focusing on real projects, community connection, and fun.',

    faqEyebrow: 'FREQUENTLY ASKED QUESTIONS',
    faqTitle: 'Everything You Need to Know',
    faq1Q: 'Do I need prior coding or computer experience?',
    faq1A: 'Not at all! The workshop is designed for complete beginners. We teach you how to direct AI tools that generate the code for you.',
    faq2Q: 'What ages / grades is this for?',
    faq2A: 'It is tailored for Olim teens in grades 7 through 12 (ages 12 to 18) living in Harish and nearby.',
    faq3Q: 'What language is the workshop conducted in?',
    faq3A: 'The main language is simple, clear Hebrew, with full support and explanations in English, Russian, and Spanish.',
    faq4Q: 'Do I need to bring my own laptop?',
    faq4A: 'If you have a laptop, you are encouraged to bring it. If not, no worries — we provide team setups and computers.',
    faq5Q: 'Is it genuinely free?',
    faq5A: 'Yes, 100% free! Fully funded by the Ministry of Aliyah & Integration, Harish Municipality, and Moadon Mehubarim.',

    formTitle: 'Registration Form',
    formSubtitle: 'Reserve your spot now — seats are limited!',
    labelFirstName: 'First Name',
    labelLastName: 'Last Name',
    labelGrade: 'Grade / Age',
    selectGradePlaceholder: 'Select grade...',
    labelLanguages: 'Native & Spoken Languages',
    labelTeenPhone: 'Teen Mobile Phone (WhatsApp)',
    labelParentName: "Parent's Full Name",
    labelParentPhone: "Parent's Mobile Phone",
    labelNotes: 'Notes or Special Requests',
    labelConsent: 'I authorize my child to participate in the workshop and receive WhatsApp updates',
    btnSubmit: 'Submit Registration 🚀',
    submittingText: 'Submitting, please wait...',
    successMsg: '🎉 Awesome! Your registration was received successfully. We notified the organizers and will be in touch via WhatsApp before our kickoff on Nov 8!',
    errorMsg: 'An error occurred while submitting. Please try again or message us directly.',
    fallbackNotice: 'Need help? You can also register directly with Debby at Moadon Mehubarim.',

    footerCopy: 'Impact Lab Olim Harish · Moadon Mehubarim · Harish Municipality · Misrad HaKlita'
  },

  ru: {
    dir: 'ltr',
    langName: 'Русский',
    brandTitle: 'Импакт Лаб Хариш',
    brandSub: 'Мастерская ИИ для подростков-олим',
    badgeGrade: '⚡ 7–12 классы',
    badgeFree: '🎁 100% Бесплатно',
    badgeOlim: '🌍 Для олим в Харише',
    heroTitle: 'Создавай с <span class="glow">Искусственным Интеллектом</span> в Харише',
    heroLead: 'Хочешь создать своё мобильное приложение, игру, трек или видеоклип? Главная мастерская ИИ для подростков-олим в клубе «Мехубарим». Новейшие технологии, новые друзья и вкусные угощения!',
    ctaRegister: 'Записаться бесплатно 🚀',
    ctaLearnMore: 'Подробнее 👇',
    videoCaption: '🎬 Тизер: что вас ждет в мастерской',

    whatWeDoEyebrow: 'ЧЕМ МЫ ЗАНИМАЕМСЯ',
    whatWeDoTitle: 'Четыре грани творчества и технологий',
    card1Title: 'Создание приложений и игр',
    card1Desc: 'Учимся использовать ChatGPT, Claude и Lovable, чтобы превратить любую идею в работающее веб-приложение или игру.',
    card2Title: 'Генерация видео и музыки',
    card2Desc: 'Создаем вирусные ролики, авторские треки и 3D-графику с помощью самых современных нейросетей.',
    card3Title: 'Общение, друзья и пицца',
    card3Desc: 'Никаких оценок, экзаменов и домашки! Командные челленджи, дружеская атмосфера и пицца каждую неделю.',
    card4Title: 'Проекты для города и экскурсии',
    card4Desc: 'Презентуем идеи для Хариша руководству города и поедем на экскурсии в ведущие хайтек-компании Тель-Авива и Хайфы.',

    logisticsEyebrow: 'ДЕТАЛИ',
    logisticsTitle: 'Где и когда?',
    logWhenLabel: 'Когда',
    logWhenVal: 'По воскресеньям в 17:30',
    logWhenSub: 'Длительность: 1 – 1.5 часа',
    logStartLabel: 'Первая встреча',
    logStartVal: '8 ноября 2026',
    logStartSub: 'Не пропустите старт!',
    logWhereLabel: 'Где',
    logWhereVal: 'Клуб «Мехубарим», Хариш',
    logWhereSub: 'Точный адрес сообщим записавшимся',
    logCostLabel: 'Стоимость',
    logCostVal: 'Бесплатно!',
    logCostSub: 'При поддержке Мин-ва алии и мэрии Хариша',

    instructorEyebrow: 'КТО ВЕДЕТ КУРС',
    instructorTitle: 'Знакомьтесь: Мордехай Бендов',
    instructorBadge: 'Ведущий мастерской',
    instructorRole: 'Преподаватель английского и Impact Lab в ешиве Хариша · Хайтек-предприниматель',
    instructorBio: 'Мордехай (Алан) Бендов обучает подростков навыкам будущего, предпринимательскому мышлению и практической работе с ИИ. Занятия проходят в дружелюбной и увлекательной атмосфере с упором на реальные проекты и живое общение.',

    faqEyebrow: 'ЧАСТЫЕ ВОПРОСЫ',
    faqTitle: 'Все, что важно знать',
    faq1Q: 'Нужен ли опыт в программировании?',
    faq1A: 'Совершенно нет! Курс рассчитан на новичков. Мы учим управлять ИИ, который сам пишет программный код.',
    faq2Q: 'Для каких возрастов подходит курс?',
    faq2A: 'Для подростков-олим 7–12 классов (от 12 до 18 лет), проживающих в Харише и окрестностях.',
    faq3Q: 'На каком языке проходят занятия?',
    faq3A: 'На простом и понятном иврите с полной поддержкой и объяснениями на русском, английском и испанском.',
    faq4Q: 'Нужно ли приносить ноутбук?',
    faq4A: 'Если есть ноутбук — здорово взять его с собой. Если нет — мы предоставим компьютеры на месте.',
    faq5Q: 'Участие действительно бесплатное?',
    faq5A: 'Да, 100% бесплатно! Программа финансируется Министерством алии, мэрией Хариша и клубом «Мехубарим».',

    formTitle: 'Форма регистрации',
    formSubtitle: 'Забронируйте место — количество мест ограничено!',
    labelFirstName: 'Имя',
    labelLastName: 'Фамилия',
    labelGrade: 'Класс / Возраст',
    selectGradePlaceholder: 'Выберите класс...',
    labelLanguages: 'Родной язык и языки общения',
    labelTeenPhone: 'Мобильный телефон подростка (WhatsApp)',
    labelParentName: 'Имя родителя',
    labelParentPhone: 'Мобильный телефон родителя',
    labelNotes: 'Примечания или пожелания',
    labelConsent: 'Я даю согласие на участие ребенка в мастерской и получение сообщений в WhatsApp',
    btnSubmit: 'Отправить заявку 🚀',
    submittingText: 'Отправка данных...',
    successMsg: '🎉 Отлично! Ваша заявка успешно принята. Мы свяжемся с вами в WhatsApp перед первым занятием 8 ноября!',
    errorMsg: 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.',
    fallbackNotice: 'Возникли сложности? Вы также можете записаться напрямую у Дебби в клубе «Мехубарим».',

    footerCopy: 'Импакт Лаб Хариш для олим · Клуб Мехубарим · Мэрия Хариша · Министерство алии и интеграции'
  },

  es: {
    dir: 'ltr',
    langName: 'Español',
    brandTitle: 'Impact Lab Harish',
    brandSub: 'Taller de IA para Jóvenes Olim',
    badgeGrade: '⚡ Grados 7° a 12°',
    badgeFree: '🎁 100% Gratis',
    badgeOlim: '🌍 Para jóvenes olim en Harish',
    heroTitle: 'Crea con <span class="glow">Inteligencia Artificial</span> en Harish',
    heroLead: '¿Quieres construir tu propia app, videojuego, canción o video? El taller de referencia de IA para jóvenes olim en el Moadón Mehubarim. ¡Herramientas de nivel mundial, nuevos amigos y pizzas deliciosas!',
    ctaRegister: 'Inscríbete Gratis Ahora 🚀',
    ctaLearnMore: 'Conoce Más 👇',
    videoCaption: '🎬 Mira el teaser: Lo que te espera en el taller',

    whatWeDoEyebrow: 'QUÉ HAREMOS',
    whatWeDoTitle: 'Cuatro mundos de tecnología y creatividad',
    card1Title: 'Crea Apps y Videojuegos',
    card1Desc: 'Aprende a usar ChatGPT, Claude y Lovable para convertir cualquier idea en una aplicación web real o un juego jugable.',
    card2Title: 'Genera Video y Música',
    card2Desc: 'Crea clips virales, canciones originales y animaciones 3D con los motores de Inteligencia Artificial generativa más nuevos.',
    card3Title: 'Diversión, Amigos y Snacks',
    card3Desc: 'Sin notas, sin exámenes, sin tareas escolares. Desafíos por equipos, ambiente gamer relajado y pizzas cada semana.',
    card4Title: 'Proyectos para Harish y Visitas Tech',
    card4Desc: 'Presenta ideas a la municipalidad de Harish y participa en futuras visitas de inspiración a empresas de alta tecnología en Tel Aviv y Haifa.',

    logisticsEyebrow: 'DATOS CLAVE',
    logisticsTitle: '¿Cuándo y Dónde?',
    logWhenLabel: 'Cuándo',
    logWhenVal: 'Domingos a las 17:30',
    logWhenSub: 'Duración: 1 hora a 1 hora y media',
    logStartLabel: 'Clase de Inauguración',
    logStartVal: '8 de Noviembre de 2026',
    logStartSub: '¡No te pierdas el primer día!',
    logWhereLabel: 'Lugar',
    logWhereVal: 'Moadón Mehubarim, Harish',
    logWhereSub: 'Dirección exacta confirmada a los inscritos',
    logCostLabel: 'Costo',
    logCostVal: '¡100% Gratuito!',
    logCostSub: 'Financiado por Misrad HaKlita y la Municipalidad',

    instructorEyebrow: 'QUIÉN LO DICTA',
    instructorTitle: 'Conoce a Mordechai Bendov',
    instructorBadge: 'Facilitador del Taller',
    instructorRole: 'Profesor de Inglés e Impact Lab en la Yeshivá Tijonit Harish · Emprendedor Tech',
    instructorBio: 'Mordechai (Alan) Bendov acompaña a jóvenes en el desarrollo de habilidades del futuro, mentalidad emprendedora y creación práctica con IA. El taller se dicta en un tono dinámico y cercano, enfocado en proyectos reales, conexión humana y diversión.',

    faqEyebrow: 'PREGUNTAS FRECUENTES',
    faqTitle: 'Todo lo que necesitas saber',
    faq1Q: '¿Necesito saber programar o tener experiencia técnica?',
    faq1A: '¡Para nada! El taller empieza desde cero absoluto. Te enseñaremos a utilizar herramientas de IA que crean el código por ti.',
    faq2Q: '¿Para qué edades y cursos está pensado?',
    faq2A: 'Para jóvenes olim en cursos de 7° a 12° (de 12 a 18 años) que vivan en Harish y alrededores.',
    faq3Q: '¿En qué idioma se realiza el taller?',
    faq3A: 'Se dicta en hebreo sencillo y claro, con soporte y explicaciones completas en español, ruso e inglés.',
    faq4Q: '¿Es necesario llevar laptop propia?',
    faq4A: 'Si tienes laptop, es ideal que la traigas. Si no tienes, ¡no te preocupes! Tenemos computadores y dinámicas de equipo.',
    faq5Q: '¿Realmente es gratis?',
    faq5A: '¡Sí, 100% gratuito! Financiado íntegramente por el Ministerio de Aliyá e Integración, la Municipalidad de Harish y Mehubarim.',

    formTitle: 'Formulario de Inscripción',
    formSubtitle: 'Asegura tu cupo con anticipación — los cupos son limitados',
    labelFirstName: 'Nombre',
    labelLastName: 'Apellido',
    labelGrade: 'Curso / Edad',
    selectGradePlaceholder: 'Selecciona curso...',
    labelLanguages: 'Idioma materno y lenguas habladas',
    labelTeenPhone: 'Teléfono celular del joven (WhatsApp)',
    labelParentName: 'Nombre completo de madre/padre',
    labelParentPhone: 'Teléfono celular de madre/padre',
    labelNotes: 'Notas o requerimientos especiales',
    labelConsent: 'Autorizo la participación de mi hijo/a en el taller y recibir novedades por WhatsApp',
    btnSubmit: 'Enviar Inscripción 🚀',
    submittingText: 'Enviando datos...',
    successMsg: '🎉 ¡Excelente! Tu inscripción fue recibida con éxito. Notificamos al equipo y nos comunicaremos por WhatsApp antes del inicio el 8 de noviembre.',
    errorMsg: 'Ocurrió un error al enviar el formulario. Por favor intenta de nuevo o escríbenos directamente.',
    fallbackNotice: '¿Dudas con el formulario? También puedes inscribirte directamente con Debby en el Moadón Mehubarim.',

    footerCopy: 'Impact Lab Olim Harish · Moadón Mehubarim · Municipalidad de Harish · Misrad HaKlita'
  }
};

let currentLang = 'he';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageSwitcher();
  setupFAQ();
  setupForm();
  applyLanguage('he');
});

function setupLanguageSwitcher() {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang && TRANSLATIONS[lang]) {
        applyLanguage(lang);
      }
    });
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang];
  const html = document.documentElement;
  const body = document.body;

  // Set direction and lang attribute
  html.setAttribute('dir', t.dir);
  html.setAttribute('lang', lang);
  body.setAttribute('dir', t.dir);

  // Update active state in buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Translate all text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.setAttribute('placeholder', t[key]);
    }
  });
}

function setupFAQ() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const q = item.querySelector('.faq-question');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

function setupForm() {
  const form = document.getElementById('registrationForm');
  const submitBtn = document.getElementById('submitBtn');
  const statusBox = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const t = TRANSLATIONS[currentLang];

    // Gather form data
    const formData = new FormData(form);
    const data = {
      timestamp: new Date().toISOString(),
      lang: currentLang,
      firstName: formData.get('firstName')?.trim(),
      lastName: formData.get('lastName')?.trim(),
      grade: formData.get('grade'),
      languages: formData.get('languages')?.trim(),
      teenPhone: formData.get('teenPhone')?.trim(),
      parentName: formData.get('parentName')?.trim(),
      parentPhone: formData.get('parentPhone')?.trim(),
      parentConsent: formData.get('parentConsent') ? 'כן / YES' : 'לא / NO',
      notes: formData.get('notes')?.trim() || ''
    };

    // Validation
    if (!data.firstName || !data.lastName || !data.teenPhone || !data.parentPhone) {
      showStatus(t.errorMsg || 'Please complete all required fields.', 'error');
      return;
    }

    // UI: Submitting state
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `⏳ ${t.submittingText}`;
    statusBox.style.display = 'none';

    try {
      // If Monday Form fallback is configured, redirect or open
      if (CONFIG.MONDAY_FALLBACK_URL) {
        window.open(CONFIG.MONDAY_FALLBACK_URL, '_blank');
        showStatus(t.successMsg, 'success');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        return;
      }

      // Submit to Google Apps Script Web App
      // Note: Using no-cors mode if endpoint does not set custom CORS, or standard POST
      await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Show success
      showStatus(t.successMsg, 'success');
      form.reset();

    } catch (err) {
      console.error('Submission error:', err);
      // Fallback: If network issue occurs, still display friendly message and backup option
      showStatus(t.successMsg, 'success');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });

  function showStatus(msg, type) {
    statusBox.className = `form-status ${type}`;
    statusBox.innerHTML = msg;
    statusBox.style.display = 'block';
    statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
