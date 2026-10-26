const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const tx=(en,he,es,ru)=>`<span class="lang-copy" data-l="en">${en}</span><span class="lang-copy" data-l="he">${he}</span><span class="lang-copy" data-l="es">${es}</span><span class="lang-copy" data-l="ru">${ru}</span>`;
const T=(en,he,es,ru)=>({en,he,es,ru});
const eye=(en,he,es,ru)=>`<div class="eyebrow">${tx(en,he,es,ru)}</div>`;
const title=(en,he,es,ru)=>`<h2 class="title">${tx(en,he,es,ru)}</h2>`;
const lede=(en,he,es,ru)=>`<p class="lede">${tx(en,he,es,ru)}</p>`;
const card=(emoji,head,copy)=>`<article class="card"><div class="emoji">${emoji}</div><h3>${head}</h3><p>${copy}</p></article>`;
const tfcard=(emoji,head,answer)=>`<button class="card tf-card" type="button" data-reveal-tf><span class="emoji">${emoji}</span><strong>${head}</strong><span class="tf-answer">${answer}</span><small>tap / click to reveal</small></button>`;
const step=(n,copy)=>`<div class="step"><b>${n}</b><span>${copy}</span></div>`;

function tracks(stem){return `<track kind="captions" srclang="en" label="English" src="captions/${stem}.en.vtt"><track kind="captions" srclang="es" label="Español" src="captions/${stem}.es.vtt"><track kind="captions" srclang="ru" label="Русский" src="captions/${stem}.ru.vtt">`}
function video(src,stem,side){return `<div class="video-layout"><div class="video-box"><video controls preload="metadata" playsinline src="videos/${src}">${tracks(stem)}</video></div><aside class="video-side">${side}<div class="caption-hint">CC · English / Español / Русский</div></aside></div>`}
function quiz(id,q,answers,correct,feedback){return `<div class="grid2"><div>${q}</div><div class="quizbox" data-quiz="${id}" data-correct="${correct}">${answers.map((a,i)=>`<button class="answer" data-answer="${i}"><b>${String.fromCharCode(65+i)}</b> · ${a}</button>`).join('')}<div class="quiz-feedback">${feedback}</div></div></div>`}

const slides=[
{id:'cover',theme:'dark',title:T('Olim Impact Lab','מעבדת האימפקט לעולים','Olim Impact Lab','Olim Impact Lab'),audio:'audio/he-cover.mp3',note:'2 min · Welcome. Pick four mixed-language teams; click a team name to make it active.',html:`<div class="inner wide cover-grid"><div class="cover-copy">${eye('Moadon Noar Oleh · Harish','מועדון נוער עולה · חריש','Club juvenil olé · Harish','Молодёжный клуб олим · Хариш')}<h1>IMPACT<br><span>LAB</span></h1><div class="host">🎤 ${tx('Mordechai Ben-Dov · Harish','מרדכי בן־דב · חריש','Mordechai Ben-Dov · Harish','Мордехай Бен-Дов · Хариш')}</div><div class="agenda"><span>⚡ ${tx('AI & Tech','בינה מלאכותית','IA y Tech','ИИ и технологии')}</span><span>🎮 ${tx('team games','משחקי קבוצות','juegos','игры')}</span><span>🍿 ${tx('snack break','הפסקת נשנושים','pausa snack','перерыв')}</span><span>🚀 ${tx('final challenge','אתגר סיום','reto final','финальный вызов')}</span></div></div><div class="cover-graphic-card"><div class="partner-banner"><img src="assets/logo-harish.png" alt="עיריית חריש"><div class="partner-sep"></div><img src="assets/logo-klita.png" alt="משרד העלייה והקליטה"></div><div class="cover-poster-body"><div class="club-tag">${tx('Mehubarim Harish','מועדון מחוברים חריש','Club Mehubarim Harish','Клуб Мехубарим Хариш')}</div><div class="cover-poster-title">OLIM<br><span>IMPACT LAB</span></div><div class="cover-poster-sub">${tx('Youth building real AI prototypes','נוער עולה בונה מיזמי AI אמיתיים','Jóvenes creando prototipos reales de IA','Молодёжь создаёт реальные ИИ-проекты')}</div></div><div class="cover-badges"><span class="cover-badge">🤖 ${tx('AI Tools','כלי בינה','Herramientas IA','ИИ-инструменты')}</span><span class="cover-badge">🚀 ${tx('Startups','סטארטאפים','Startups','Стартапы')}</span><span class="cover-badge">🎮 ${tx('Gaming','גיימינג','Gaming','Гейминг')}</span><span class="cover-badge">🤝 ${tx('Community','קהילה','Comunidad','Сообщество')}</span></div></div></div>`},

{id:'teams',theme:'party',title:T('Build your crew','בונים את הצוות','Arma tu equipo','Соберите команду'),note:'4 min · Make teams mixed by age/language. Let each team rename itself by clicking its name.',html:`<div class="inner">${eye('Warm-up · 4 minutes','חימום · 4 דקות','Calentamiento · 4 minutos','Разминка · 4 минуты')}${title('Build your crew','בונים את הצוות','Arma tu equipo','Соберите команду')}${lede('Four teams. Mix languages and ages. Pick a name and a ridiculous victory pose.','ארבע קבוצות. ערבבו שפות וגילים. בחרו שם ותנוחת ניצחון מצחיקה.','Cuatro equipos. Mezclen idiomas y edades. Elijan nombre y pose de victoria absurda.','Четыре команды. Смешайте языки и возрасты. Выберите название и смешную победную позу.')}<div class="steps">${step('1',tx('Mix','להתערבב','Mezclar','Смешаться'))}${step('2',tx('Name','שם','Nombre','Название'))}${step('3',tx('Pose','תנוחה','Pose','Поза'))}${step('+1',tx('Loudest intro','הצגה הכי חזקה','Presentación más fuerte','Самое громкое представление'))}</div></div>`},

{id:'expectations',title:T('What are you here for?','בשביל מה באתם?','¿A qué vinieron?','Зачем вы пришли?'),note:'4 min · Lightning round: name + one expectation, maximum five seconds each.',html:`<div class="inner">${eye('Lightning round','סבב בזק','Ronda relámpago','Блиц-круг')}${title('Name + one thing you want','שם + דבר אחד שאתם רוצים','Nombre + una cosa que quieres','Имя + одна вещь, которую ты хочешь')}<div class="grid4">${card('🗣️',tx('Mixed Languages','שפות מעורבות','Idiomas mezclados','Смешанные языки'),tx('Speak English, Hebrew, Spanish or Russian.','דברו עברית, אנגלית, ספרדית או רוסית.','Hablen inglés, hebreo, español o ruso.','Говорите на английском, иврите, испанском или русском.'))}${card('🤖',tx('Technology','טכנולוגיה','Tecnología','Технологии'),tx('Use AI, don’t just watch.','להשתמש ב-AI, לא רק לצפות.','Usar IA, no solo mirar.','Использовать ИИ, а не только смотреть.'))}${card('🔥',tx('Attitude','גישה','Actitud','Настрой'),tx('Confidence beats perfection.','ביטחון מנצח שלמות.','La confianza gana a la perfección.','Уверенность важнее идеала.'))}${card('😄',tx('Fun','כיף','Diversión','Веселье'),tx('Games, snacks, building.','משחקים, נשנושים ובנייה.','Juegos, snacks y creación.','Игры, перекус и создание.'))}</div></div>`},

{id:'program-video',theme:'dark',title:T('What is Impact Lab?','מה זה אימפקט לאב?','¿Qué es Impact Lab?','Что такое Impact Lab?'),note:'2 min · Hebrew video. Turn on captions with the CC menu if needed.',html:video('programa-intro-he.mp4','programa-intro',`${eye('Video · 1:37','וידאו · 1:37','Video · 1:37','Видео · 1:37')}<h2>${tx('The mission','המשימה','La misión','Миссия')}</h2><div class="question">${tx('Listen for: team, real problem, languages, Demo Day.','חפשו: צוות, בעיה אמיתית, שפות, דמו דיי.','Busca: equipo, problema real, idiomas, Demo Day.','Слушайте: команда, реальная проблема, языки, Demo Day.')}</div>`)},

{id:'program-rules',title:T('A year in 30 seconds','שנה ב־30 שניות','Un año en 30 segundos','Год за 30 секунд'),note:'2 min · Keep this brisk; it preserves the original program structure.',html:`<div class="inner">${eye('The real format','הפורמט האמיתי','El formato real','Настоящий формат')}${title('This is the game','זה המשחק','Este es el juego','Вот правила игры')}<div class="grid4">${card('👥',tx('Teams of 4','צוותים של 4','Equipos de 4','Команды по 4'),tx('Different strengths, one crew.','כוחות שונים, צוות אחד.','Distintas fortalezas, un equipo.','Разные сильные стороны, одна команда.'))}${card('🎯',tx('Real problem','בעיה אמיתית','Problema real','Реальная проблема'),tx('Someone actually needs the fix.','מישהו באמת צריך את הפתרון.','Alguien realmente necesita la solución.','Кому-то это решение действительно нужно.'))}${card('🗣️',tx('Mixed languages','שפות מעורבות','Idiomas mezclados','Смешанные языки'),tx('Speak English, Hebrew, Spanish or Russian. No barriers.','מדברים עברית, אנגלית, ספרדית או רוסית. בלי מחסומים.','Hablen inglés, hebreo, español o ruso. Sin barreras.','Говорите на английском, иврите, испанском или русском. Без барьеров.'))}${card('🎤','Demo Day',tx('Show what you built to the city.','מציגים לעירייה מה שבניתם.','Muestren a la ciudad lo que crearon.','Покажите городу, что создали.'))}</div></div>`},

{id:'tech-treks',theme:'dark',title:T('Treks & Hangouts','סיורים ומפגשים','Paseos y Encuentros','Экскурсии и встречи'),note:'3 min · Explain the company visits and social hangouts throughout the year.',html:`<div class="inner wide">${eye('Beyond the classroom','מעבר לכיתה','Más allá de la sala','Больше чем класс')}${title('Tech Treks & Hangouts','סיורים בהייטק ומפגשים','Paseos Tech y Encuentros','Тех-туры и встречи')}<div class="treks-grid"><article class="trek-card"><div><div class="trek-header"><span class="em">🏢</span><h3>${tx('Visits to Tech Superpowers','סיורים במעצמות הייטק','Visitas a Gigantes Tech','Визиты в тех-гиганты')}</h3></div><p>${tx('Hands-on visits to innovation hubs in Tel Aviv, Herzliya, Yokneam & Haifa. Meet the engineers and see AI in action.','סיורים מודרכים במרכזי פיתוח בתל אביב, הרצליה, יקנעם וחיפה. פוגשים מהנדסים ורואים AI בפעולה.','Visitas a centros de innovación en Tel Aviv, Herzliya, Yokneam y Haifa. Conoce ingenieros y ve IA real.','Экскурсии в центры разработки в Тель-Авиве, Герцлии, Йокнеаме и Хайфе. Встречи с инженерами.')}</p><div class="company-chips"><span class="company-chip">Google</span><span class="company-chip">Microsoft</span><span class="company-chip">NVIDIA</span><span class="company-chip">MongoDB</span><span class="company-chip">Wonderful</span><span class="company-chip">AI21 Labs</span></div></div><div class="city-tag">📍 ${tx('Tel Aviv · Herzliya · Yokneam · Haifa','תל אביב · הרצליה · יקנעם · חיפה','Tel Aviv · Herzliya · Yokneam · Haifa','Тель-Авив · Герцлия · Йокнеам · Хайфа')}</div></article><article class="trek-card"><div><div class="trek-header"><span class="em">🍕</span><h3>${tx('Team Hangouts & BBQ','אסאדו, פיצה ומפגשים','Asados, Pizza y Hangouts','Пицца, барбекю и тусовки')}</h3></div><p>${tx('Building together means having fun together. Pizza nights, asados (BBQ), game tournaments, and demo celebrations.','בונים ביחד ונהנים ביחד. ערבי פיצה, על האש (אסאדו), טורנירי משחקים וחגיגות סיום.','Crear juntos significa pasarlo bien juntos. Noches de pizza, asados, torneos y celebraciones.','Создавать вместе — значит отдыхать вместе. Вечера пиццы, барбекю, турниры и праздники.')}</p><div class="company-chips"><span class="company-chip">🥩 Asado BBQ</span><span class="company-chip">🍕 Pizza Nights</span><span class="company-chip">🎮 Game Tournaments</span><span class="company-chip">🎉 Demo Celebrations</span></div></div><div class="city-tag">✨ ${tx('Community · Friends for life','קהילה · חברים לחיים','Comunidad · Amigos para siempre','Сообщество · Друзья на всю жизнь')}</div></article></div></div>`},

{id:'promise',theme:'blue',title:T('The promise','ההבטחה','La promesa','Обещание'),audio:'audio/he-promise.mp3',note:'2 min · Reframe seriousness as a shared pact, not discipline.',html:`<div class="inner">${eye('No school speech. A deal.','בלי נאום בית ספר. עסקה.','Sin sermón escolar. Un trato.','Без школьной лекции. Сделка.')}${title('Learn. Build. Impact.','ללמוד. לבנות. להשפיע.','Aprender. Construir. Impactar.','Учиться. Создавать. Влиять.')}<div class="grid3">${card('🧠',tx('You get tools','אתם מקבלים כלים','Reciben herramientas','Вы получаете инструменты'),tx('AI + technology + courage.','AI + טכנולוגיה + אומץ.','IA + tecnología + valentía.','ИИ + технологии + смелость.'))}${card('🤝',tx('You bring your word','אתם מביאים את המילה שלכם','Ustedes cumplen su palabra','Вы держите слово'),tx('Arrive. Try. Finish what you start.','מגיעים. מנסים. מסיימים מה שמתחילים.','Llegar. Probar. Terminar lo empezado.','Приходите. Пробуйте. Заканчивайте начатое.'))}${card('🔗',tx('Next time: a real link','בפעם הבאה: לינק אמיתי','La próxima: un link real','В следующий раз: настоящая ссылка'),tx('Your idea, online.','הרעיון שלכם, באינטרנט.','Su idea, en internet.','Ваша идея — онлайн.'))}</div></div>`},

{id:'world',theme:'dark',title:T('The old map is gone','המפה הישנה נעלמה','El mapa viejo ya no existe','Старой карты больше нет'),note:'90 sec · Hook. Ask: which job will AI change first?',html:`<div class="inner">${eye('Round 1 · Future shock','סיבוב 1 · הלם עתיד','Ronda 1 · Shock del futuro','Раунд 1 · Шок будущего')}<div class="quote">${tx('The world your parents knew is <span class="gold">gone.</span><br>The one you’ll build does not exist yet.','העולם שההורים שלכם הכירו <span class="gold">נעלם.</span><br>העולם שתבנו עדיין לא קיים.','El mundo que conocieron sus padres <span class="gold">ya no existe.</span><br>El que construirán aún no existe.','Мира, который знали ваши родители, <span class="gold">уже нет.</span><br>Тот, который вы построите, ещё не существует.')}</div>${lede('AI may bring super-intelligence and a post-work economy. Nobody knows the exact map.','AI עשויה להביא בינת־על וכלכלה שאחרי העבודה. אף אחד לא מכיר את המפה המדויקת.','La IA puede traer superinteligencia y una economía pos-trabajo. Nadie conoce el mapa exacto.','ИИ может привести к сверхинтеллекту и экономике после труда. Точной карты не знает никто.')}</div>`},

{id:'nas-1',theme:'dark',title:T('Break the box · Part 1','לשבור את הקופסה · חלק 1','Rompe la caja · Parte 1','Сломай рамки · Часть 1'),note:'3 min · First chapter. Video is a local MP4, not YouTube.',html:video('break-the-box-p1.mp4','break-p1',`${eye('Video · part 1','וידאו · חלק 1','Video · parte 1','Видео · часть 1')}<h2>${tx('Watch for the invisible rule','חפשו את הכלל הבלתי נראה','Busca la regla invisible','Найдите невидимое правило')}</h2><div class="question">${tx('What did everyone accept without asking “why”?','מה כולם קיבלו בלי לשאול למה?','¿Qué aceptaron todos sin preguntar “por qué”?','Что все приняли, не спросив «почему»?')}</div>`)},

{id:'fish',title:T('Why cut the fish?','למה חותכים את הדג?','¿Por qué cortar el pescado?','Зачем отрезать рыбу?'),note:'3 min · Tell the fish-head-and-tail story; teams invent one inherited rule worth questioning.',html:`<div class="inner">${eye('Paradigm game','משחק פרדיגמות','Juego de paradigmas','Игра парадигм')}${title('“Because Mom did it.”','״כי ככה אמא עשתה.״','“Porque mamá lo hacía.”','«Потому что мама так делала».')}<div class="story"><div class="bigemoji">🐟</div><p>${tx('A family cuts the head and tail before cooking. Three generations later they discover the original pan was simply too small.','משפחה חותכת ראש וזנב לפני הבישול. שלושה דורות אחר כך מגלים שהסיר המקורי פשוט היה קטן מדי.','Una familia corta cabeza y cola antes de cocinar. Tres generaciones después descubren que la olla original era demasiado pequeña.','Семья отрезает голову и хвост перед готовкой. Через три поколения выясняется: первая кастрюля была просто мала.')}</p></div><div class="prompt">${tx('TEAM · Name one rule people follow only because “that’s how it’s done.” +1 brave answer.','קבוצה · תנו דוגמה לכלל שעושים רק כי ״ככה עושים״. נקודה לתשובה אמיצה.','EQUIPO · Nombren una regla que se sigue solo porque “así se hace”. +1 respuesta valiente.','КОМАНДА · Назовите правило, которому следуют только потому, что «так принято». +1 за смелый ответ.')}</div></div>`},

{id:'vf',theme:'party',title:T('AI: true or bluff?','AI: אמת או בלוף?','IA: ¿verdad o bluff?','ИИ: правда или блеф?'),note:'5 min · Teams show thumbs up/down. Click each card to reveal; add +1 on the visible scoreboard.',html:`<div class="inner">${eye('Stand up game · +1 each','משחק בעמידה · נקודה לכל תשובה','Juego de pie · +1 cada una','Игра стоя · +1 за ответ')}${title('True or false?','נכון או לא נכון?','¿Verdadero o falso?','Правда или ложь?')}<div class="grid3">${tfcard('1️⃣',tx('AI “knows” every answer.','AI ״יודעת״ כל תשובה.','La IA “sabe” cada respuesta.','ИИ «знает» каждый ответ.'),tx('FALSE · It predicts.','לא נכון · היא מנבאת.','FALSO · Predice.','ЛОЖЬ · Он предсказывает.'))}${tfcard('2️⃣',tx('AI can sound certain and be wrong.','AI יכולה להישמע בטוחה ולטעות.','La IA puede sonar segura y equivocarse.','ИИ может звучать уверенно и ошибаться.'),tx('TRUE · Check it.','נכון · בודקים.','VERDADERO · Verifica.','ПРАВДА · Проверяйте.'))}${tfcard('3️⃣',tx('A clearer prompt usually helps.','פרומפט ברור בדרך כלל עוזר.','Un prompt claro suele ayudar.','Чёткий промпт обычно помогает.'),tx('TRUE · Context + limits.','נכון · הקשר + גבולות.','VERDADERO · Contexto + límites.','ПРАВДА · Контекст + ограничения.'))}</div></div>`},

{id:'what-ai',title:T('What is AI, really?','מה זה AI באמת?','¿Qué es realmente la IA?','Что такое ИИ на самом деле?'),audio:'audio/he-ai.mp3',note:'3 min · Preserve original explanation: next token/pixel prediction, hallucinations, human judgment.',html:`<div class="inner">${eye('The honest version','הגרסה הכנה','La versión honesta','Честная версия')}${title('It predicts what comes next.','היא מנבאת מה יבוא אחר כך.','Predice lo que viene después.','Он предсказывает, что будет дальше.')}<div class="grid3">${card('🔤',tx('Next word','המילה הבאה','Próxima palabra','Следующее слово'),tx('It learned patterns from huge amounts of text.','היא למדה דפוסים מכמויות עצומות של טקסט.','Aprendió patrones de enormes cantidades de texto.','Он выучил закономерности из огромных объёмов текста.'))}${card('🖼️',tx('Next pixel','הפיקסל הבא','Próximo píxel','Следующий пиксель'),tx('Images are prediction too.','גם תמונות הן חיזוי.','Las imágenes también son predicción.','Изображения — тоже предсказание.'))}${card('🎭',tx('Confident mistakes','טעויות בביטחון','Errores seguros','Уверенные ошибки'),tx('The powerful tool does not replace your thinking.','הכלי החזק לא מחליף את החשיבה שלכם.','La herramienta potente no reemplaza tu criterio.','Мощный инструмент не заменяет ваше мышление.'))}</div></div>`},

{id:'bamba',theme:'blue',title:T('AI agents run a snack mission','סוכני AI במשימת במבה','Agentes IA en misión Bamba','ИИ-агенты спасают Bamba'),note:'3 min · Explain the Osem/Bamba network example: separate agents collaborate to prevent stockouts.',html:`<div class="inner">${eye('Real-world example','דוגמה מהעולם האמיתי','Ejemplo real','Пример из жизни')}${title('Never run out of Bamba.','שלא תיגמר הבמבה.','Que nunca falte Bamba.','Чтобы Bamba не закончилась.')}<div class="steps">${step('1',tx('Demand agent predicts sales','סוכן ביקוש מנבא מכירות','Agente de demanda predice ventas','Агент спроса прогнозирует продажи'))}${step('2',tx('Stock agent checks oil','סוכן מלאי בודק שמן','Agente de stock revisa aceite','Агент запасов проверяет масло'))}${step('3',tx('Buyer agent orders in time','סוכן רכש מזמין בזמן','Agente comprador pide a tiempo','Агент закупок заказывает вовремя'))}${step('✓',tx('No empty shelf','אין מדף ריק','Sin estante vacío','Полка не пустеет'))}</div><p class="lede">${tx('One AI is useful. A team of specialised AIs can coordinate a whole process.','AI אחת שימושית. צוות של סוכני AI מומחים יכול לתאם תהליך שלם.','Una IA es útil. Un equipo de IAs especializadas coordina todo un proceso.','Один ИИ полезен. Команда специализированных ИИ координирует целый процесс.')}</p></div>`},

{id:'prompt-duel',theme:'party',title:T('The Anatomy of a Great Prompt','מבנה של פרומפט מנצח','La Anatomía de un Gran Prompt','Анатомия отличного промпта'),note:'3 min · Clear mental model before the live voice exercise: Goal + Context + Limits + Format.',html:`<div class="inner wide">${eye('Prompt Engineering 101','הנדסת פרומפטים בסיסית','Ingeniería de Prompts','Инженерия промптов')}${title('4 Keys: How to Talk to AI','4 מפתחות: איך לדבר עם בינה מלאכותית','4 Claves: Cómo hablarle a la IA','4 ключа: как общаться с ИИ')}<div class="grid4">${card('🎯',tx('1. Clear Goal','1. מטרה ברורה','1. Meta clara','1. Чёткая цель'),tx('What exactly do you want to create or solve?','מה בדיוק אתם רוצים ליצור או לפתור?','¿Qué quieres crear o resolver exactamente?','Что именно вы хотите создать или решить?'))}${card('🌍',tx('2. Deep Context','2. הקשר עמוק','2. Mucho contexto','2. Глубокий контекст'),tx('Who is it for? Where? Why? Stop AI from hallucinating.','בשביל מי? איפה? למה? מונע הזיות מה-AI.','¿Para quién? ¿Dónde? ¿Por qué? Evita alucinaciones.','Для кого? Где? Почему? Защищает от выдумок.'))}${card('📏',tx('3. Clear Limits','3. גבולות ברורים','3. Límites claros','3. Чёткие рамки'),tx('Word counts, rules, what NOT to do.','מספר מילים, כללים, מה לא לעשות.','Extensión, reglas y lo que NO debe hacer.','Количество слов, правила, чего НЕ делать.'))}${card('✨',tx('4. Format & Tone','4. מבנה וסגנון','4. Formato y tono','4. Формат и тон'),tx('List, table, emojis, simple language.','רשימה, טבלה, אימוג׳י, שפה פשוטה.','Lista, tabla, emojis, lenguaje directo.','Список, таблица, эмодзи, простой язык.'))}</div>${lede('Next slide: Live Voice Challenge! One builder steps up and speaks a prompt.','בשקף הבא: אתגר קולי חי! מתנדב עולה ומקריא פרומפט בקול.','Siguiente slide: ¡Desafío de voz en vivo! Un voluntario dicta su prompt.','Следующий слайд: Голосовой вызов вживую! Говорим промпт в микрофон.')}</div>`},

{id:'prompt',theme:'dark',title:T('Live Voice Prompt Thermometer','מד־חום הפרומפטים הקולי','Termómetro de Prompts por Voz','Голосовой термометр промптов'),note:'5 min · Live exercise: kids speak into the mic (any language); thermometer rises with good context & constraints!',html:`<div class="inner wide">${eye('Interactive Voice Challenge · +2 Points','אתגר קולי אינטראקטיבי · 2 נקודות','Desafío de Voz en Vivo · +2 Puntos','Интерактивный голосовой вызов · +2 балла')}${title('Prompt Quality Thermometer','מד־חום איכות הפרומפט','Termómetro de Calidad del Prompt','Термометр качества промпта')}<div class="thermo-layout"><div class="thermo-tube-wrap"><div class="thermo-score-pill" id="thermoScore">0%</div><div class="thermo-tube"><div class="thermo-mercury" id="thermoMercury" style="height:12%"></div><div class="thermo-ticks"><span class="thermo-tick"></span><span class="thermo-tick"></span><span class="thermo-tick"></span><span class="thermo-tick"></span><span class="thermo-tick"></span></div></div></div><div class="thermo-main"><div class="mic-control-bar"><button class="mic-btn" id="micBtn" type="button">🎙️ <span>${tx('Start Speaking','התחילו לדבר בקול','Hablar por micrófono','Говорить в микрофон')}</span></button><button class="thermo-sim-btn" data-sim="weak" type="button">⚡ ${tx('Weak prompt','פרומפט חלש','Prompt débil','Слабый')}</button><button class="thermo-sim-btn" data-sim="good" type="button">⚡ ${tx('Good prompt','פרומפט טוב','Prompt bueno','Хороший')}</button><button class="thermo-sim-btn" data-sim="killer" type="button">⚡ ${tx('Killer prompt','פרומפט מנצח','Prompt ganador','Отличный')}</button></div><div class="thermo-transcript empty" id="thermoTranscript">${tx('Click the mic and speak your prompt in any language (Hebrew, English, Spanish, Russian)…','לחצו על המיקרופון ודברו בכל שפה (עברית, אנגלית, ספרדית, רוסית)…','Haz clic en el micrófono y dicta en cualquier idioma (español, hebreo, inglés, ruso)…','Нажмите на микрофон и говорите на любом языке (иврит, английский, испанский, русский)…')}</div><div class="criteria-grid"><div class="criteria-chip" id="critGoal"><b>🎯 ${tx('Goal','מטרה','Meta','Цель')}</b><span>${tx('Clear task','משימה ברורה','Tarea clara','Чёткая задача')}</span></div><div class="criteria-chip" id="critContext"><b>🌍 ${tx('Context','הקשר','Contexto','Контекст')}</b><span>${tx('Audience & place','קהל ומקום','Audiencia y lugar','Аудитория и место')}</span></div><div class="criteria-chip" id="critLimits"><b>📏 ${tx('Limits','גבולות','Límites','Ограничения')}</b><span>${tx('Length & rules','אורך וכללים','Largo y reglas','Длина и правила')}</span></div><div class="criteria-chip" id="critFormat"><b>✨ ${tx('Format','מבנה','Formato','Формат')}</b><span>${tx('Emojis / style','אימוג׳י וסגנון','Emojis / estilo','Эмодзи и стиль')}</span></div></div><div class="thermo-actions"><button class="award-btn" id="awardBtn" type="button">🏆 ${tx('+2 to Active Team & Next Child','2+ נקודות לקבוצה והבא בתור','+2 al Equipo y Siguiente Niño','+2 балла команде и следующий')}</button><button class="reset-btn" id="resetThermoBtn" type="button">🔄 ${tx('Reset','איפוס','Reiniciar','Сброс')}</button></div></div></div></div>`},

{id:'tools',theme:'dark',title:T('Who runs the game?','מי במשחק?','¿Quiénes juegan?','Кто в игре?'),note:'2 min · Explain that models change quickly, so smart builders test more than one.',html:`<div class="inner">${eye('Tools change. Your judgment stays.','הכלים משתנים. שיקול הדעת נשאר.','Las herramientas cambian. Tu criterio queda.','Инструменты меняются. Ваше мышление остаётся.')}${title('Four players today','ארבעה שחקנים היום','Cuatro jugadores hoy','Четыре игрока сегодня')}<div class="grid4">${['openai','anthropic','google','lovable'].map((x,i)=>`<article class="card logo-card"><img src="assets/logos/${x}.svg" alt="${x}"><b>${[tx('daily use','שימוש יומי','uso diario','каждый день'),tx('deep text + code','טקסט עמוק + קוד','texto + código','текст + код'),tx('Google data','מידע של גוגל','datos Google','данные Google'),tx('build a first site','לבנות אתר ראשון','crear un primer sitio','создать первый сайт')][i]}</b></article>`).join('')}</div>${lede('No permanent “best model.” Try, compare, check.','אין ״מודל הכי טוב״ לנצח. מנסים, משווים, בודקים.','No existe “el mejor modelo” para siempre. Prueba, compara, verifica.','Нет вечной «лучшей модели». Пробуйте, сравнивайте, проверяйте.')}</div>`},

{id:'nas-2',theme:'dark',title:T('Break the box · Part 2','לשבור את הקופסה · חלק 2','Rompe la caja · Parte 2','Сломай рамки · Часть 2'),note:'2 min · Short local chapter; ask for one sentence takeaway.',html:video('break-the-box-p2.mp4','break-p2',`${eye('Video · part 2 · 0:56','וידאו · חלק 2 · 0:56','Video · parte 2 · 0:56','Видео · часть 2 · 0:56')}<h2>${tx('When does “normal” become dangerous?','מתי ״רגיל״ הופך למסוכן?','¿Cuándo lo “normal” se vuelve peligroso?','Когда «нормально» становится опасным?')}</h2><div class="question">${tx('The frog, the warming water, and the change nobody notices.','הצפרדע, המים שמתחממים והשינוי שאף אחד לא שם לב אליו.','La rana, el agua que se calienta y el cambio que nadie nota.','Лягушка, нагревающаяся вода и перемена, которую никто не замечает.')}</div>`)},

{id:'popcorn',theme:'break dark',title:T('Popcorn pause','הפסקת פופקורן','Pausa de popcorn','Перерыв на попкорн'),note:'7 min · Keep the countdown visible. Start timer, distribute snacks, mix seats if teams are not multilingual.',html:`<div class="inner" style="grid-template-columns:1fr 1fr;align-items:center"><div><div class="popcorn">🍿</div></div><div>${eye('Half-time','מחצית','Medio tiempo','Перерыв')}${title('Snack. Mix. Reset.','נשנוש. ערבוב. ריסט.','Snack. Mezcla. Reinicia.','Перекус. Смешайтесь. Перезагрузка.')}<div class="timer" data-seconds="420"><span>07:00</span><button data-timer>${tx('START','התחלה','INICIAR','СТАРТ')}</button></div><p>${tx('Bonus +1: teach your team one word in your language.','בונוס נקודה: למדו את הקבוצה מילה אחת בשפה שלכם.','Bonus +1: enseña una palabra de tu idioma.','Бонус +1: научите команду одному слову на вашем языке.')}</p></div></div>`},

{id:'pasuk',theme:'blue',title:T('Build a place for meaning','לבנות מקום למשמעות','Construir un lugar con sentido','Создать место для смысла'),audio:'audio/he-pasuk.mp3',note:'3 min · Jewish core, concise: physical building can become holy through its purpose.',html:`<div class="inner"><div class="pasuk" dir="rtl">״ועשו לי מקדש ושכנתי בתוכם״</div><div class="quote" style="text-align:center;margin:auto">${tx('Build something physical.<br>Fill it with purpose.','בנו משהו פיזי.<br>מלאו אותו במשמעות.','Construye algo físico.<br>Llénalo de propósito.','Создайте что-то реальное.<br>Наполните его смыслом.')}</div>${lede('Technology is not the purpose. The impact we choose is the purpose.','טכנולוגיה היא לא המטרה. ההשפעה שנבחר היא המטרה.','La tecnología no es el propósito. El impacto que elegimos sí.','Технология — не цель. Цель — влияние, которое мы выбираем.')}</div>`},

{id:'entrepreneur',title:T('Entrepreneur = builder','יזם = בונה','Emprendedor = constructor','Предприниматель = создатель'),note:'3 min · Include company, organisation, and family as forms of building.',html:`<div class="inner">${eye('Not only companies','לא רק חברות','No solo empresas','Не только компании')}${title('See a problem. Decide to help.','רואים בעיה. מחליטים לעזור.','Ve un problema. Decide ayudar.','Увидьте проблему. Решите помочь.')}<div class="equation"><div class="term"><div class="emoji">👀</div><strong>${tx('Real problem','בעיה אמיתית','Problema real','Реальная проблема')}</strong></div><div class="op">+</div><div class="term"><div class="emoji">🙋</div><strong>${tx('You build','אתם בונים','Tú construyes','Вы создаёте')}</strong></div><div class="op">=</div><div class="term"><div class="emoji">🚀</div><strong>${tx('Impact','השפעה','Impacto','Влияние')}</strong></div></div>${lede('A business, an organisation, a family, a community project — entrepreneurship means building.','עסק, ארגון, משפחה, פרויקט קהילתי — יזמות היא בנייה.','Empresa, organización, familia o proyecto comunitario: emprender es construir.','Бизнес, организация, семья, общественный проект — предпринимательство означает создавать.')}</div>`},

{id:'routes',title:T('Three routes. One impact.','שלושה מסלולים. השפעה אחת.','Tres rutas. Un impacto.','Три пути. Одно влияние.'),audio:'audio/he-routes.mp3',note:'3 min · Same three routes as original class. Let teams vote with fingers 1/2/3.',html:`<div class="inner wide">${eye('Pick a direction','בחרו כיוון','Elige una dirección','Выберите направление')}${title('What would your team build?','מה הצוות שלכם היה בונה?','¿Qué construiría tu equipo?','Что построила бы ваша команда?')}<div class="grid3">${card('🏙️',tx('Fix Harish','לתקן את חריש','Mejorar Harish','Улучшить Хариш'),tx('Find a city problem. Pitch the municipality.','למצוא בעיה בעיר. להציג לעירייה.','Detectar un problema y presentarlo al municipio.','Найти городскую проблему и представить муниципалитету.'))}${card('💡',tx('Your business','העסק שלכם','Tu negocio','Ваш бизнес'),tx('A small venture that earns and automates.','מיזם קטן שמרוויח ומתייעל.','Un pequeño negocio que gana y automatiza.','Небольшой проект, который зарабатывает и автоматизируется.'))}${card('✡️',tx('The Jewish world','העולם היהודי','El mundo judío','Еврейский мир'),tx('Community, institutions or Israel’s story.','קהילה, מוסדות או הסיפור של ישראל.','Comunidad, instituciones o la historia de Israel.','Община, учреждения или история Израиля.'))}</div></div>`},

{id:'fixharish',theme:'dark',title:T('FixHarish Demo','הדגמת FixHarish','Demo FixHarish','Демо FixHarish'),note:'2 min · Live animated prototype: WhatsApp photo -> AI classification -> Live map pin -> City dashboard.',html:`<div class="inner wide">${eye('Demo · Harish Route','הדגמה · מסלול חריש','Demo · Ruta Harish','Демо · Городской путь')}${title('FixHarish: Photo → Map → Fixed','FixHarish: תמונה ← מפה ← תוקן','FixHarish: Foto → Mapa → Resuelto','FixHarish: Фото → Карта → Исправлено')}<div class="mock-ui"><div class="mock-grid"></div><div class="phone"><div class="phone-head">WhatsApp · FixHarish</div><div class="bubble fix-issue"><div class="photo-placeholder"></div>${tx('Broken light on Kalanit St.','פנס רחוב שבור ברחוב כלנית','Luz rota en calle Kalanit','Сломан фонарь на ул. Каланит')}</div><div class="ai-state fix-ai"><span class="typed">AI · classifying…</span></div><div class="labels fix-labels"><span>lighting</span><span>urgency: med</span><span>Kalanit 8</span></div><div class="resolved fix-resolved">✅ ${tx('Fixed! Thanks for reporting.','תוקן! תודה על הדיווח.','¡Resuelto! Gracias por reportar.','Исправлено! Спасибо за сигнал.')}</div></div><div class="map-panel"><svg viewBox="0 0 500 220" aria-hidden="true"><path class="roads" d="M-30 45C120 110 180-10 300 45S430 140 540 90M80-20C115 85 75 145 145 250M370-30C320 70 410 150 345 250"/><path class="minor" d="M-20 175L520 145M220-20L245 250M20 110L480 20"/></svg><div class="map-pin">📍</div></div><div class="city-panel fix-city"><div class="panel-title">${tx('Harish Municipality · Live Map','עיריית חריש · לוח בקרה חי','Municipio de Harish · Mapa en Vivo','Муниципалитет Хариш · Живая карта')}</div><div class="metrics"><div class="metric"><b>14</b><small>${tx('open','פתוח','abiertos','открыто')}</small></div><div class="metric"><b>37</b><small>${tx('fixed','תוקנו','resueltos','исправлено')}</small></div><div class="metric"><b>2.1</b><small>${tx('avg days','ימים ממוצע','días prom.','дней в ср.')}</small></div></div></div></div></div>`},

{id:'orderup',theme:'dark',title:T('OrderUp Demo','הדגמת OrderUp','Demo OrderUp','Демо OrderUp'),note:'2 min · Live animated prototype: WhatsApp order bot -> kitchen ticket -> automated recurring revenue.',html:`<div class="inner wide">${eye('Demo · Business Route','הדגמה · מסלול עסקי','Demo · Ruta Negocio','Демо · Бизнес-путь')}${title('OrderUp: WhatsApp bot for small shops','OrderUp: בוט וואטסאפ לחנויות בחריש','OrderUp: Bot WhatsApp para negocios','OrderUp: WhatsApp-бот для малого бизнеса')}<div class="mock-ui"><div class="mock-grid"></div><div class="order-chat"><div class="chat-head">OrderUp · WhatsApp</div><div class="customer-message">${tx('2 family pizzas, no olives. Kalanit 8.','2 משפחתיות, בלי זיתים. כלנית 8.','2 familiares, sin aceitunas. Kalanit 8.','2 большие пиццы, без оливок. Каланит 8.')}</div><div class="bot-message"><span class="pill" style="font-size:9px;padding:2px 6px;margin-bottom:4px;display:inline-block">AI BOT</span><span class="typed-order">${tx('Got it 👍 2× family · no olives · ₪118 · 25 min','קיבלנו 👍 2× משפחתית · בלי זיתים · ₪118 · 25 דק׳','Listo 👍 2× familiar · sin aceitunas · ₪118 · 25 min','Принято 👍 2× большие · без оливок · ₪118 · 25 мин')}</span></div></div><div class="flying-order">2× family · no olives · ₪118</div><div class="kitchen"><h4>${tx('Kitchen Queue','הזמנות במטבח','Cola de Cocina','Очередь кухни')}</h4><div class="kitchen-stack"><div class="kitchen-order">#041 · ready</div><div class="kitchen-order">#042 · in oven</div><div class="kitchen-order live">#043 · 2× family</div></div></div><div class="revenue"><div class="revenue-flow"><span>₪149 × 1 shop</span><span>₪149 × 4 shops</span><span>₪149 × 10 shops</span></div><div class="revenue-total">₪1,490 / mo</div><div class="revenue-bar"><span></span></div></div></div></div>`},

{id:'chesed',theme:'dark',title:T('ChesedLink Demo','הדגמת ChesedLink','Demo ChesedLink','Демо ChesedLink'),note:'2 min · Live animated prototype: community meal need -> multi-language AI translation -> volunteer match.',html:`<div class="inner wide">${eye('Demo · Community Route','הדגמה · מסלול קהילתי','Demo · Ruta Comunidad','Демо · Общинный путь')}${title('ChesedLink: Needs meet volunteers','ChesedLink: צורך פוגש מתנדב','ChesedLink: La necesidad encuentra voluntario','ChesedLink: Нужда встречает волонтёра')}<div class="mock-ui"><div class="mock-grid"></div><div class="chesed-request"><span>${tx('New mom this week — needs meals for 5 days.','אמא ילדה השבוע — צריכה ארוחות לחמישה ימים.','Mamá recién dio a luz — necesita comidas por 5 días.','Мама родила — нужны обеды на 5 дней.')}</span></div><div class="translate-chip">${tx('AI · Translating...','AI · מתרגמת...','IA · Traduciendo...','ИИ · Переводит...')}</div><div class="translation-cards"><div class="translation hebrew"><b>עברית</b>אמא ילדה השבוע — צריכה ארוחות למשפחה.</div><div class="translation"><b>English</b>New mom this week — meals needed for family.</div><div class="translation russian"><b>Русский</b>Мама родила — нужны обеды для семьи.</div></div><div class="volunteers"><div class="avatar">AY</div><div class="avatar">RM</div><div class="avatar">SB</div><div class="avatar">DL</div><div class="avatar">NK</div></div><div class="match-stamp">✓ MATCHED</div><div class="chesed-count">37 ${tx('chasadim','חסדים','acciones','добрых дел')}</div></div></div>`},

{id:'mordechai',theme:'dark',title:T('Who is Mordechai?','מי זה מרדכי?','¿Quién es Mordechai?','Кто такой Мордехай?'),note:'2 min · Video is English; captions switch with deck language.',html:video('mordechai-intro-en.mp4','mordechai-intro',`${eye('Video · 1:23','וידאו · 1:23','Video · 1:23','Видео · 1:23')}<h2>${tx('Chile → VW → Omnicom → MIT → Georgia Tech → SmartUp','צ׳ילה ← פולקסווגן ← אומניקום ← MIT ← ג׳ורג׳יה טק ← SmartUp','Chile → VW → Omnicom → MIT → Georgia Tech → SmartUp','Чили → VW → Omnicom → MIT → Georgia Tech → SmartUp')}</h2><div class="question">${tx('What was built at each stop?','מה נבנה בכל תחנה?','¿Qué se construyó en cada etapa?','Что было создано на каждом этапе?')}</div>`)},

{id:'deal',title:T('The exchange','העסקה','El intercambio','Обмен'),note:'2 min · Preserve original asks, with relaxed tone.',html:`<div class="inner">${eye('What I ask back','מה אני מבקש בתמורה','Lo que pido a cambio','Что я прошу взамен')}${title('Three tiny promises','שלוש הבטחות קטנות','Tres promesas pequeñas','Три маленьких обещания')}<div class="grid3">${card('⏰',tx('Show up','להגיע בזמן','Llegar','Приходить'),tx('Time matters because the team needs you.','הזמן חשוב כי הצוות צריך אתכם.','El tiempo importa porque el equipo te necesita.','Время важно: команда нуждается в вас.'))}${card('🤝',tx('Keep your word','לקיים מילה','Cumplir tu palabra','Держать слово'),tx('Trust is a builder’s superpower.','אמון הוא כוח־על של בונים.','La confianza es un superpoder.','Доверие — суперсила создателя.'))}${card('🏁',tx('Finish','לסיים','Terminar','Заканчивать'),tx('Ideas count when they become real.','רעיונות נחשבים כשהם הופכים לאמיתיים.','Las ideas cuentan cuando se vuelven reales.','Идеи важны, когда становятся реальностью.'))}</div></div>`},

{id:'river',theme:'dark',title:T('Drop the weight · River story','להניח את המשקל · סיפור הנהר','Suelta el peso · Historia del río','Отпустите груз · Притча о реке'),note:'3 min · Video of the two monks crossing the river. What fear blocks you from starting?',html:video('break-the-box-p2.mp4','break-p2',`${eye('Video · The Two Monks','וידאו · שני הנזירים','Video · Los dos monjes','Видео · Два монаха')}<h2>${tx('“Why are you still carrying her?”','״למה אתה עדיין סוחב אותה?״','“¿Por qué aún la cargas?”','«Почему ты всё ещё несёшь её?»')}</h2><div class="question">${tx('One monk put her down at the river hours ago. What fear can you drop right now to start building?','הנזיר הניח אותה בנהר לפני שעות. מאיזה פחד אתם יכולים להשתחרר עכשיו כדי להתחיל לבנות?','Un monje la bajó hace horas. ¿Qué miedo puedes soltar hoy para empezar a crear?','Монах отпустил её у реки много часов назад. Какой страх вы можете отпустить прямо сейчас?')}</div>`)},

{id:'ben-gurion',title:T('Good trouble','צרות טובות','Problemas buenos','Хорошая дерзость'),note:'3 min · Tell the Chabadnik-at-Ben-Gurion story. Keep the ethical guardrail explicit.',html:`<div class="inner">${eye('Ben Gurion story','הסיפור בבן גוריון','Historia en Ben Gurion','История в Бен-Гурионе')}${title('Ask forgiveness? Sometimes.','לבקש סליחה? לפעמים.','¿Pedir perdón? A veces.','Просить прощения? Иногда.')}<div class="grid2">${card('⚡',tx('Act','לפעול','Actúa','Действуйте'),tx('A Chabadnik sees a chance to do good and moves before bureaucracy kills the moment.','חב״דניק רואה הזדמנות לעשות טוב ופועל לפני שהבירוקרטיה הורגת את הרגע.','Un jabadnik ve una oportunidad de hacer bien y actúa antes de que la burocracia mate el momento.','Хабадник видит шанс сделать добро и действует, пока бюрократия не убила момент.'))}${card('🧭',tx('Guardrail','גבול','Límite','Граница'),tx('Only for good. Be smart. Never risk safety, dignity or trust.','רק לטובה. בחכמה. בלי לסכן בטיחות, כבוד או אמון.','Solo para bien. Con inteligencia. Nunca arriesgues seguridad, dignidad o confianza.','Только во благо. С умом. Не рискуйте безопасностью, достоинством или доверием.'))}</div></div>`},

{id:'jar',theme:'dark',title:T('The Big Rocks Challenge','אתגר האבנים הגדולות','El reto de las piedras grandes','Задача с большими камнями'),note:'4 min · Video of the jar and rocks. Priorities: what goes in first?',html:video('break-the-box-p3a.mp4','break-p3a',`${eye('Video · The Jar & The Rocks','וידאו · הצנצנת והאבנים','Video · El frasco y las piedras','Видео · Банка и камни')}<h2>${tx('What goes in first?','מה נכנס קודם?','¿Qué entra primero?','Что положить первым?')}</h2><div class="question">${tx('Big rocks = people, health, mission. Pebbles & sand = distractions. Fill the big rocks first!','אבנים גדולות = אנשים, בריאות, שליחות. חצץ וחול = הסחות דעת. מכניסים את העיקר קודם!','Piedras grandes = personas, salud, propósito. Arena = distracciones. ¡Pon lo grande primero!','Большие камни = люди, здоровье, цель. Песок = мелочи. Сначала главное!')}</div>`)},

{id:'armor',theme:'dark',title:T('Strong is not closed','חזק זה לא סגור','Fuerte no significa cerrado','Сильный — не значит закрытый'),note:'4 min · Video of armor and courage. Trying while nervous beats faking perfection.',html:video('break-the-box-p3b.mp4','break-p3b',`${eye('Video · Armor & Courage','וידאו · שריון ואומץ','Video · Armadura y Coraje','Видео · Броня и смелость')}<h2>${tx('Take off the armor','להוריד את השריון','Quítate la armadura','Снимите броню')}</h2><div class="question">${tx('Real strength is asking questions, speaking with an accent, and trying before you feel 100% ready.','עוצמה אמיתית היא לשאול שאלות, לדבר במבטא ולנסות גם כשלא מרגישים מוכנים ב-100%.','La verdadera fuerza es preguntar, hablar con acento y lanzarse antes de estar 100% seguro.','Настоящая сила — задавать вопросы, говорить с акцентом и пробовать, даже если не уверен на все 100%.')}</div>`)},

{id:'nas-4',theme:'dark',title:T('Break the box · Finale','לשבור את הקופסה · סיום','Rompe la caja · Final','Сломай рамки · Финал'),note:'3–5 min · Final video chapter. Transition directly to the mixed-team challenge.',html:video('break-the-box-p4.mp4','break-p4',`${eye('Video · finale','וידאו · סיום','Video · final','Видео · финал')}<h2>${tx('Possible starts now','האפשרי מתחיל עכשיו','Lo posible empieza ahora','Возможное начинается сейчас')}</h2><div class="question">${tx('One sentence after the video: what will you stop accepting?','משפט אחד אחרי הסרטון: מה תפסיקו לקבל כמובן מאליו?','Una frase: ¿qué dejarás de aceptar como normal?','Одно предложение: что вы перестанете считать нормой?')}</div>`)},

{id:'idea-sheet',title:T('Optional side quest','משימת צד לבחירה','Misión opcional','Дополнительная миссия'),note:'2 min · The original homework sheet becomes optional and playful, as requested.',html:`<div class="inner">${eye('No homework vibe','בלי אווירת שיעורי בית','Sin vibra de tarea','Без ощущения домашки')}${title('Sketch an idea in 3 boxes','שרטטו רעיון ב־3 קופסאות','Dibuja una idea en 3 cajas','Нарисуйте идею в 3 блоках')}<div class="steps">${step('1',tx('The problem — one sentence','הבעיה — משפט אחד','El problema — una frase','Проблема — одно предложение'))}${step('2',tx('Who it helps — one real person','למי זה עוזר — אדם אמיתי','A quién ayuda — una persona real','Кому помогает — реальный человек'))}${step('3',tx('The screen — draw it','המסך — ציירו','La pantalla — dibújala','Экран — нарисуйте'))}</div>${lede('Use ChatGPT if the sheet is confusing. This is a side quest, not a test.','אם הדף מבלבל, בקשו עזרה מ-ChatGPT. זו משימת צד, לא מבחן.','Si la hoja confunde, pide ayuda a ChatGPT. Es misión opcional, no examen.','Если лист непонятен, спросите ChatGPT. Это дополнительная миссия, не тест.')}</div>`},

{id:'built-it',theme:'dark',title:T('In your free time: build what you love','בזמנכם הפנוי: בנו מה שאתם אוהבים','En tu tiempo libre: construye lo que amas','В свободное время: создавайте то, что любите'),note:'3 min · Encourage kids to hang out at Mehubarim or at home and turn their personal passions into prototypes.',html:`<div class="inner wide">${eye('Your passions + AI','התחביבים שלכם + AI','Tus pasiones + IA','Ваши увлечения + ИИ')}${title('Turn afternoons into working prototypes','הופכים אחר צהריים לאבות־טיפוס אמיתיים','Convierte tus tardes en prototipos reales','Превращайте свободное время в прототипы')}<div class="grid4">${card('⚽',tx('Sports & Soccer','ספורט וכדורגל','Deportes y Fútbol','Спорт и футбол'),tx('Tournament apps, team stats, live match trackers.','אפליקציות טורנירים, סטטיסטיקות, מעקב משחקים.','Apps de torneos, estadísticas, seguimiento en vivo.','Приложения для турниров, статистика, матч-трекер.'))}${card('🎵',tx('Music & Audio','מוזיקה וסאונד','Música y Sonido','Музыка и звук'),tx('AI beats, playlist generators, smart guitar chords.','ביטים עם AI, גנרטור פלייליסטים, אקורדים חכמים.','Beats con IA, generador de playlists, acordes.','ИИ-биты, генератор плейлистов, аккорды.'))}${card('🎮',tx('Gaming & Mods','גיימינג ומודים','Juegos y Mods','Игры и моды'),tx('Mini web games, Roblox assistants, Minecraft ideas.','משחקי רשת, עזרי רובלוקס, רעיונות למיינקראפט.','Mini juegos web, bots para Roblox, mods Minecraft.','Мини-игры, помощники для Roblox, Minecraft-моды.'))}${card('🗣️',tx('Languages & Memes','שפות וממים','Idiomas y Memes','Языки и мемы'),tx('Slang translators, voice bots, funny video generators.','מתרגמי סלנג, בוטים מדברים, גנרטור ממים.','Traductores de modismos, bots de voz, memes.','Переводчики сленга, голосовые боты, мемы.'))}</div><p class="lede">${tx('Hang out at Mehubarim club or build from home. You have the tools now. Go play and build!','בואו למועדון מחוברים או שבו בבית עם חברים. יש לכם את הכלים. לכו לשחק ולבנות!','Únanse en el club Mehubarim o creen desde casa. Ya tienen las herramientas. ¡A jugar y construir!','Приходите в клуб Мехубарим или творите дома. Инструменты у вас есть. Создавайте!')}</p></div>`},

{id:'challenge',theme:'party',title:T('Final mixed-team challenge','אתגר סיום בקבוצות מעורבות','Reto final en equipos mixtos','Финальный вызов смешанных команд'),audio:'audio/he-challenge.mp3',note:'8 min work + 60 sec pitch each. Ensure every team has at least two home languages.',html:`<div class="inner wide">${eye('8 minutes · +10 points','8 דקות · 10 נקודות','8 minutos · +10 puntos','8 минут · +10 баллов')}${title('Fix one tiny Harish problem','פתרו בעיה קטנה אחת בחריש','Resuelvan un pequeño problema de Harish','Решите одну маленькую проблему Хариша')}<div class="challenge"><div class="challenge-list"><div>${tx('Choose a real person and problem.','בחרו אדם אמיתי ובעיה.','Elijan persona y problema real.','Выберите реального человека и проблему.')}</div><div>${tx('Invent an AI-powered solution.','המציאו פתרון עם AI.','Inventen una solución con IA.','Придумайте решение с ИИ.')}</div><div>${tx('Write one killer prompt.','כתבו פרומפט מנצח אחד.','Escriban un prompt ganador.','Напишите один сильный промпт.')}</div><div>${tx('Prepare a 60-second pitch in 2 languages.','הכינו פיץ׳ של 60 שניות בשתי שפות.','Preparen pitch de 60 segundos en 2 idiomas.','Подготовьте 60-секундный питч на 2 языках.')}</div></div><aside class="rubric"><h3>${tx('10-point rubric','ניקוד מתוך 10','Pauta de 10 puntos','Оценка из 10')}</h3><p>${tx('Real problem','בעיה אמיתית','Problema real','Реальная проблема')} <b>3</b></p><p>${tx('Smart AI use','שימוש חכם ב-AI','Buen uso de IA','Умное применение ИИ')} <b>3</b></p><p>${tx('Two languages','שתי שפות','Dos idiomas','Два языка')} <b>2</b></p><p>${tx('Everyone speaks','כולם מדברים','Todos hablan','Говорят все')} <b>2</b></p></aside></div></div>`},

{id:'pitch-timer',theme:'blue',title:T('Pitch arena','זירת הפיצ׳ים','Arena de pitches','Арена питчей'),note:'4–6 min · One minute per team. Award 0–10 using the rubric; snacks are the prizes.',html:`<div class="inner" style="text-align:center">${eye('One team at a time','קבוצה אחת בכל פעם','Un equipo a la vez','По одной команде')}${title('60 seconds. Make us care.','60 שניות. תגרמו לנו להרגיש.','60 segundos. Haz que nos importe.','60 секунд. Заинтересуйте нас.')}<div class="timer" data-seconds="60" style="justify-content:center"><span>01:00</span><button data-timer>${tx('START','התחלה','INICIAR','СТАРТ')}</button></div><div class="wordline"><span>PROBLEM</span><span>AI</span><span>IMPACT</span></div></div>`},

{id:'podium',title:T('Scoreboard moment','רגע לוח התוצאות','Momento del marcador','Момент счёта'),note:'2 min · Celebrate all teams. Winner chooses snacks first; do not frame other teams as losers.',html:`<div class="inner close">${eye('Snacks are the trophy','הנשנושים הם הגביע','Los snacks son el trofeo','Перекус — это трофей')}${title('Look at the points. Then look at what you built.','תסתכלו על הנקודות. ואז על מה שבניתם.','Miren los puntos. Luego miren lo que crearon.','Посмотрите на баллы. Потом — на то, что вы создали.')}<p class="lede">${tx('The scoreboard picks a snack order. The real win: four new ideas and a louder voice.','לוח התוצאות קובע סדר לנשנושים. הניצחון האמיתי: ארבעה רעיונות חדשים וקול חזק יותר.','El marcador decide el orden de snacks. La victoria real: cuatro ideas nuevas y una voz más fuerte.','Счёт определяет порядок за перекусом. Настоящая победа: четыре новые идеи и более громкий голос.')}</p></div>`},

{id:'close',theme:'dark',title:T('Start before you feel ready','תתחילו לפני שאתם מוכנים','Empieza antes de sentirte listo','Начните до того, как будете готовы'),audio:'audio/he-close.mp3',note:'2 min · Close with logistics: bring laptops next session!',html:`<div class="inner close">${eye('Final line','שורת סיום','Línea final','Финальная строка')}<div class="quote" style="margin:auto">${tx('The only difference between you and a builder:<br><span class="gold">the builder already started.</span>','ההבדל היחיד ביניכם לבין בונה:<br><span class="gold">הבונה כבר התחיל.</span>','La única diferencia entre tú y quien construye:<br><span class="gold">esa persona ya empezó.</span>','Единственная разница между вами и создателем:<br><span class="gold">создатель уже начал.</span>')}</div><div class="wordline"><span>${tx('LEARN','ללמוד','APRENDER','УЧИТЬСЯ')}</span><span>${tx('BUILD','לבנות','CONSTRUIR','СОЗДАВАТЬ')}</span><span>${tx('IMPACT','להשפיע','IMPACTAR','ВЛИЯТЬ')}</span></div><p class="lede" style="font-weight:800;color:var(--gold);font-size:clamp(20px,2.2vw,30px);margin-top:20px">${tx('Bring laptops next session!','הביאו מחשבים ניידים למפגש הבא!','¡Traigan computadores la próxima sesión!','Принесите ноутбуки на следующее занятие!')}</p><div class="host" style="margin:auto">Mordechai Ben-Dov · Harish</div></div>`},

{id:'israel-power',theme:'dark',title:T('Israel: Global AI Superpower','ישראל: מעצמת AI עולמית','Israel: Superpotencia Global de IA','Израиль: Сверхдержава ИИ'),note:'2 min · High energy finale! Show that they are in the best place in the world to build the future.',html:video('israel-tech-power.mp4','israel-power',`${eye('Grand Finale Video · Innovation Nation','סרטון סיום · אומת החדשנות','Video Gran Final · Nación de Innovación','Финальное видео · Нация инноваций')}<h2>${tx('You are in the best place in the world','אתם נמצאים במקום הטוב בעולם','Están en el mejor lugar del mundo','Вы в лучшем месте на планете')}</h2><div class="question">${tx('The highest concentration of tech startups, AI pioneers, and multi-billion-dollar exits on Earth. Time to build!','ריכוז הסטארטאפים, חברות ה-AI וההייטק הגבוה ביותר בעולם. הגיע הזמן לבנות!','La mayor concentración de startups de IA y tecnología del planeta. ¡Es hora de construir!','Самая высокая концентрация ИИ-стартапов и технологий в мире. Время создавать!')}</div>`)}
];

let current=0, lang=localStorage.getItem('olim-lang')||'en', activeTeam=0, audio=null, timerHandle=null;
let teamState=JSON.parse(localStorage.getItem('olim-scores')||'null')||[
  {name:'BLUE',score:0,color:'#39b8e7'},{name:'PINK',score:0,color:'#ef6da8'},{name:'GOLD',score:0,color:'#ffc640'},{name:'GREEN',score:0,color:'#16b685'}
];

function render(){
  const deck=$('#deck');
  deck.innerHTML=slides.map((s,i)=>`<section class="slide ${s.theme||''}" data-index="${i}" data-id="${s.id}" aria-label="${s.title.en}">${s.html}</section>`).join('');
  $('#overview').innerHTML=slides.map((s,i)=>`<button class="thumb" data-go="${i}"><small>${String(i+1).padStart(2,'0')}</small><b>${s.title.en}</b></button>`).join('');
  bindInteractive(); renderTeams(); setLang(lang); show(0);
}
function show(n){
  stopMedia(); current=(n+slides.length)%slides.length;
  $$('.slide').forEach((s,i)=>{
    const on = (i===current);
    s.classList.toggle('active', on);
    s.classList.toggle('run', on);
  });
  $('#count').textContent=`${String(current+1).padStart(2,'0')} / ${slides.length}`;
  $('#progress').style.width=`${(current+1)/slides.length*100}%`;
  $('#noteText').textContent=slides[current].note||'';
  $('#voice').disabled=!slides[current].audio;
  syncCaptions(); location.hash=slides[current].id;
}
function stopMedia(){
  $$('.slide video').forEach(v=>{v.pause()});
  if(audio){audio.pause();audio=null;$('#voice').classList.remove('playing')}
  if(timerHandle){clearInterval(timerHandle);timerHandle=null}
  stopVoiceRecognition();
}
function setLang(next){
  lang=next; localStorage.setItem('olim-lang',lang);
  document.documentElement.lang=lang; document.body.dir=lang==='he'?'rtl':'ltr';
  $$('.lang-copy').forEach(x=>x.classList.toggle('active',x.dataset.l===lang));
  $$('[data-set-lang]').forEach(b=>b.classList.toggle('active',b.dataset.setLang===lang)); syncCaptions();
}
function syncCaptions(){
  $$('.slide video').forEach(v=>[...v.textTracks].forEach(t=>t.mode=(t.language===(lang==='he'?'en':lang)?'showing':'disabled')));
}
function renderTeams(){
  $('#teams').innerHTML=teamState.map((t,i)=>`<div class="team ${i===activeTeam?'active':''}" style="--team:${t.color}"><button class="team-name" data-team="${i}" contenteditable="false">${t.name}</button><span class="score">${t.score}</span><button class="scorebtn minus" data-score="${i}" data-delta="-1">−</button><button class="scorebtn plus" data-score="${i}" data-delta="1">+</button></div>`).join('');
  $$('.team-name').forEach(b=>b.onclick=()=>{activeTeam=+b.dataset.team;renderTeams()});
  $$('[data-score]').forEach(b=>b.onclick=()=>{teamState[+b.dataset.score].score=Math.max(0,teamState[+b.dataset.score].score+(+b.dataset.delta));saveTeams();renderTeams()});
  $$('.team-name').forEach(b=>b.ondblclick=()=>{const n=prompt('Team name',teamState[+b.dataset.team].name);if(n){teamState[+b.dataset.team].name=n.slice(0,12);saveTeams();renderTeams()}});
}
function saveTeams(){localStorage.setItem('olim-scores',JSON.stringify(teamState))}

/* Voice Recognition & Prompt Thermometer Engine */
let speechRec=null, isListening=false;

function stopVoiceRecognition(){
  if(speechRec && isListening){
    try{ speechRec.stop(); }catch(e){}
  }
  isListening=false;
  const micBtn=$('#micBtn');
  if(micBtn) micBtn.classList.remove('listening');
}

function scorePrompt(text){
  if(!text) return { score: 0, criteria: { goal: false, context: false, limits: false, format: false } };
  const lower = text.toLowerCase();
  
  // 1. Goal / Task (25%)
  const goalWords = ['create', 'make', 'build', 'write', 'design', 'plan', 'help', 'app', 'game', 'bot', 'website', 'organize',
    'ליצור', 'לבנות', 'לכתוב', 'לתכנן', 'לעזור', 'אפליקציה', 'משחק', 'בוט', 'אתר', 'ארגון',
    'crear', 'hacer', 'construir', 'escribir', 'diseñar', 'planear', 'juego', 'sitio', 'app',
    'создать', 'сделать', 'написать', 'придумать', 'игра', 'сайт', 'приложение'];
  const hasGoal = goalWords.some(w => lower.includes(w)) || text.split(/\s+/).length >= 4;

  // 2. Context & Audience (35% - heavily weighted!)
  const contextWords = ['for', 'who', 'kid', 'teen', 'resident', 'harish', 'israel', 'school', 'shop', 'family', 'olim', 'city', 'people', 'neighbors',
    'בשביל', 'לילדים', 'נוער', 'תושב', 'חריש', 'ישראל', 'בית ספר', 'חנות', 'משפחה', 'עולים', 'עיר', 'אנשים', 'שכנים',
    'para', 'niños', 'jóvenes', 'vecinos', 'harish', 'israel', 'colegio', 'tienda', 'familia', 'ciudad',
    'для', 'детей', 'подростков', 'жителей', 'хариш', 'израиль', 'школа', 'магазин', 'семья', 'город'];
  const hasContext = contextWords.some(w => lower.includes(w));

  // 3. Limits & Constraints (20%)
  const limitWords = ['only', 'max', 'maximum', 'short', 'without', 'sentence', 'sentences', 'lines', 'words', 'simple', 'no',
    'רק', 'בלי', 'מקסימום', 'קצר', 'משפטים', 'מילים', 'פשוט', 'בלי יותר מדי',
    'solo', 'sin', 'máximo', 'corto', 'frases', 'oraciones', 'palabras', 'sencillo',
    'только', 'без', 'максимум', 'коротко', 'предложений', 'слов', 'просто'];
  const hasLimits = limitWords.some(w => lower.includes(w)) || /\b[0-9]+\b/.test(text);

  // 4. Format & Structure (20%)
  const formatWords = ['list', 'bullet', 'bullets', 'table', 'steps', 'step', 'emoji', 'emojis', 'fun', 'style', 'json', 'hebrew', 'english',
    'רשימה', 'נקודות', 'שלבים', 'שלב', 'טבלה', 'אימוג\'י', 'אימוגים', 'מצחיק', 'סגנון', 'עברית', 'אנגלית',
    'lista', 'viñetas', 'tabla', 'pasos', 'paso', 'emoji', 'emojis', 'divertido', 'estilo',
    'список', 'пункты', 'таблица', 'шаги', 'шаг', 'эмодзи', 'стиль'];
  const hasFormat = formatWords.some(w => lower.includes(w));

  let score = 15; // baseline
  if(hasGoal) score += 25;
  if(hasContext) score += 35;
  if(hasLimits) score += 15;
  if(hasFormat) score += 10;
  
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  if(words > 12) score += 10;
  else if(words > 6) score += 5;

  score = Math.min(100, Math.max(12, score));
  return {
    score,
    criteria: { goal: hasGoal, context: hasContext, limits: hasLimits, format: hasFormat }
  };
}

function updateThermometer(text){
  const transcriptEl = $('#thermoTranscript');
  if(!transcriptEl) return;
  if(!text || !text.trim()){
    transcriptEl.textContent = '…';
    transcriptEl.classList.add('empty');
    $('#thermoMercury').style.height = '12%';
    $('#thermoScore').textContent = '0%';
    ['critGoal','critContext','critLimits','critFormat'].forEach(id=>{
      const el=$('#'+id); if(el) el.classList.remove('met');
    });
    return;
  }
  transcriptEl.textContent = `“${text}”`;
  transcriptEl.classList.remove('empty');

  const { score, criteria } = scorePrompt(text);
  $('#thermoMercury').style.height = `${score}%`;
  $('#thermoScore').textContent = `${score}%`;

  const map = { critGoal: criteria.goal, critContext: criteria.context, critLimits: criteria.limits, critFormat: criteria.format };
  Object.keys(map).forEach(id=>{
    const el=$('#'+id);
    if(el) el.classList.toggle('met', Boolean(map[id]));
  });
}

function initSpeechRecognition(){
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SpeechRec) return null;
  const rec = new SpeechRec();
  rec.continuous = true;
  rec.interimResults = true;
  
  rec.onresult = (e)=>{
    let interim = '', final = '';
    for (let i = e.resultIndex; i < e.results.length; ++i) {
      if (e.results[i].isFinal) final += e.results[i][0].transcript;
      else interim += e.results[i][0].transcript;
    }
    const full = (final + ' ' + interim).trim();
    if(full) updateThermometer(full);
  };
  rec.onerror = (e)=>{
    console.log('Speech error:', e);
    isListening = false;
    const btn = $('#micBtn');
    if(btn) btn.classList.remove('listening');
  };
  rec.onend = ()=>{
    isListening = false;
    const btn = $('#micBtn');
    if(btn) btn.classList.remove('listening');
  };
  return rec;
}

function bindInteractive(){
  $$('[data-reveal-tf]').forEach(b=>b.onclick=()=>b.classList.toggle('revealed'));
  $$('[data-answer]').forEach(b=>b.onclick=()=>{
    const box=b.closest('[data-quiz]'), correct=+box.dataset.correct; box.querySelectorAll('.answer').forEach(x=>{x.disabled=true;x.classList.toggle('correct',+x.dataset.answer===correct)});
    if(+b.dataset.answer===correct){teamState[activeTeam].score++;saveTeams();renderTeams();box.querySelector('.quiz-feedback').textContent='✓ +1'}else{b.classList.add('wrong');box.querySelector('.quiz-feedback').textContent='↻ Think again'}
  });
  $$('[data-timer]').forEach(btn=>btn.onclick=()=>startTimer(btn.closest('.timer')));
  $$('[data-go]').forEach(b=>b.onclick=()=>{$('#overview').classList.remove('on');show(+b.dataset.go)});

  /* Thermometer Mic Button */
  const micBtn = $('#micBtn');
  if(micBtn){
    micBtn.onclick = ()=>{
      if(!speechRec) speechRec = initSpeechRecognition();
      if(!speechRec){
        alert('Voice speech recognition is supported in Chrome. You can also use the sample prompt buttons below!');
        return;
      }
      if(isListening){
        speechRec.stop();
        isListening = false;
        micBtn.classList.remove('listening');
      } else {
        const langMap = { en: 'en-US', he: 'he-IL', es: 'es-419', ru: 'ru-RU' };
        speechRec.lang = langMap[lang] || 'he-IL';
        try {
          speechRec.start();
          isListening = true;
          micBtn.classList.add('listening');
        } catch(e){
          console.warn(e);
        }
      }
    };
  }

  /* Thermometer Simulation Buttons */
  $$('[data-sim]').forEach(b=>b.onclick=()=>{
    const type = b.dataset.sim;
    const simTexts = {
      weak: {
        en: 'Make a game about soccer.',
        he: 'תעשה משחק על כדורגל.',
        es: 'Haz un juego de fútbol.',
        ru: 'Сделай игру про футбол.'
      },
      good: {
        en: 'Create a soccer tournament scheduler for teenagers in Harish with 4 teams.',
        he: 'תבנה לוח משחקים לטורניר כדורגל לנוער בחריש עם 4 קבוצות.',
        es: 'Crea un organizador de torneo de fútbol para jóvenes en Harish con 4 equipos.',
        ru: 'Создай расписание футбольного турнира для подростков в Харише на 4 команды.'
      },
      killer: {
        en: 'Create a soccer tournament bracket for 12-15 year old olim in Harish. Include team names, 5 clear match rules, emojis, in a simple numbered list under 150 words.',
        he: 'תבנה לוח טורניר כדורגל לעולים בני 12-15 בחריש. תכלול שמות קבוצות, 5 כללי משחק קצרים, אימוג׳י, ברשימה ממוספרת פשוטה עד 150 מילים.',
        es: 'Crea un torneo de fútbol para jóvenes olim de 12 a 15 años en Harish. Incluye nombres de equipo, 5 reglas cortas con emojis, en una lista numerada de menos de 150 palabras.',
        ru: 'Создай сетку футбольного турнира для подростков-олим 12-15 лет в Харише. Включи названия команд, 5 коротких правил с эмодзи, списком до 150 слов.'
      }
    };
    const t = simTexts[type] ? (simTexts[type][lang] || simTexts[type].en) : '';
    updateThermometer(t);
  });

  /* Award Team Points Button */
  const awardBtn = $('#awardBtn');
  if(awardBtn){
    awardBtn.onclick = ()=>{
      teamState[activeTeam].score += 2;
      saveTeams();
      renderTeams();
      awardBtn.textContent = '🎉 +2 ADDED!';
      setTimeout(()=>{
        awardBtn.innerHTML = `🏆 <span class="lang-copy active">+2 to Active Team & Next Child</span>`;
        updateThermometer('');
      }, 1200);
    };
  }

  /* Reset Thermometer Button */
  const resetBtn = $('#resetThermoBtn');
  if(resetBtn){
    resetBtn.onclick = ()=>{
      stopVoiceRecognition();
      updateThermometer('');
    };
  }
}

function startTimer(el){
  if(timerHandle)clearInterval(timerHandle);let left=+el.dataset.seconds;const out=el.querySelector('span');
  const draw=()=>out.textContent=`${String(Math.floor(left/60)).padStart(2,'0')}:${String(left%60).padStart(2,'0')}`;draw();
  timerHandle=setInterval(()=>{left--;draw();if(left<=0){clearInterval(timerHandle);timerHandle=null;out.textContent='TIME!'}},1000)
}
$('#prev').onclick=()=>show(current-1); $('#next').onclick=()=>show(current+1);
$$('[data-set-lang]').forEach(b=>b.onclick=()=>setLang(b.dataset.setLang));
$('#overviewBtn').onclick=()=>$('#overview').classList.toggle('on');
$('#voice').onclick=()=>{const src=slides[current].audio;if(!src)return;if(audio){audio.pause();audio=null;$('#voice').classList.remove('playing');return}audio=new Audio(src);audio.play();$('#voice').classList.add('playing');audio.onended=()=>{$('#voice').classList.remove('playing');audio=null}};
document.addEventListener('keydown',e=>{
  if(e.target.isContentEditable||e.target.closest('input,textarea'))return;
  if(e.code==='KeyF'||e.key.toLowerCase()==='f'){e.preventDefault();document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();return}
  if(e.key==='ArrowRight')show(current+(lang==='he'?-1:1));
  if(e.key==='ArrowLeft')show(current+(lang==='he'?1:-1));
  if(e.key==='Escape')$('#overview').classList.remove('on');
  if(e.key.toLowerCase()==='g')$('#overview').classList.toggle('on');
  if(e.key.toLowerCase()==='n')$('#notes').classList.toggle('on');
  if(e.key===' '){e.preventDefault();const v=$('.slide.active video');if(v){v.paused?v.play():v.pause()}else show(current+1)}
});
const initialHash=location.hash.slice(1);
render();
const at=slides.findIndex(s=>s.id===initialHash);if(at>=0)show(at);
