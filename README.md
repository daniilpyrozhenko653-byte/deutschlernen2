<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>DeutschLernen Pro: Немецкий A0–C1 | 200+ слов и фраз + озвучка</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, 'Roboto', sans-serif;
        }

        body {
            background: linear-gradient(135deg, #0a1620 0%, #0c1420 100%);
            min-height: 100vh;
            padding: 1.5rem;
        }

        .app-wrapper {
            max-width: 1450px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(8px);
            border-radius: 2.5rem;
            padding: 1.8rem;
            box-shadow: 0 25px 50px rgba(0,0,0,0.6);
            border: 1px solid rgba(255,200,100,0.25);
        }

        .main-header {
            text-align: center;
            margin-bottom: 2rem;
        }
        .main-header h1 {
            font-size: 2.5rem;
            background: linear-gradient(120deg, #FFE6B0, #FFB347);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            letter-spacing: -0.5px;
        }
        .main-header p {
            color: #b9cddc;
            margin-top: 0.4rem;
        }

        .level-bar {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.7rem;
            margin-bottom: 2rem;
        }
        .level-btn {
            background: #1e2f3c;
            border: none;
            padding: 0.6rem 1.4rem;
            border-radius: 3rem;
            font-weight: bold;
            font-size: 0.9rem;
            color: #e2e8f0;
            cursor: pointer;
            transition: 0.2s;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
        .level-btn.active {
            background: #F4A261;
            color: #0f1a1f;
            box-shadow: 0 0 12px rgba(244,162,97,0.6);
            border: 1px solid #FFD966;
        }
        .level-btn:hover {
            background: #F4A261;
            color: #0f1a1f;
            transform: translateY(-2px);
        }

        .double-panel {
            display: flex;
            flex-wrap: wrap;
            gap: 1.8rem;
        }
        .flashcard-panel, .quiz-panel {
            flex: 1;
            min-width: 300px;
            background: rgba(8, 22, 30, 0.7);
            backdrop-filter: blur(5px);
            border-radius: 2rem;
            padding: 1.5rem;
            border: 1px solid rgba(244,162,97,0.4);
        }
        .section-title {
            font-size: 1.7rem;
            font-weight: 600;
            color: #FFE3B5;
            border-left: 5px solid #F4A261;
            padding-left: 1rem;
            margin-bottom: 1.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .flashcard {
            background: #FDF8E7;
            border-radius: 2rem;
            cursor: pointer;
            aspect-ratio: 4 / 3;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 1.9rem;
            font-weight: 700;
            padding: 1rem;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 15px 25px -10px black;
            word-break: break-word;
        }
        .flashcard:hover { transform: scale(1.01); }
        .card-german { background: #FFE0B5; color: #8B3C1C; }
        .card-russian { background: #C9E9DC; color: #1C5D3A; }

        .speaker-btn {
            background: rgba(0,0,0,0.25);
            border: none;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 2rem;
            padding: 0.5rem 1.2rem;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: 0.2s;
            font-weight: 600;
        }
        .speaker-btn:hover {
            background: #F4A261;
            color: #1e2c2c;
            transform: scale(1.02);
        }
        .flip-hint {
            text-align: center;
            font-size: 0.75rem;
            color: #b9c7c9;
            margin: 0.6rem 0;
        }
        .card-nav {
            display: flex;
            justify-content: space-between;
            gap: 0.8rem;
            margin-top: 1rem;
        }
        button {
            background: rgba(244, 162, 97, 0.2);
            border: 1px solid #F4A261;
            color: #FFE0B5;
            font-weight: 600;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            cursor: pointer;
            transition: all 0.2s;
        }
        button:hover {
            background: #F4A261;
            color: #1f2c2c;
        }
        .quiz-area {
            background: #0e1f28;
            border-radius: 1.5rem;
            padding: 1rem;
        }
        .question-text {
            background: #0F1C24;
            padding: 1rem;
            border-radius: 1.8rem;
            font-size: 1.3rem;
            font-weight: bold;
            text-align: center;
            color: #FFECCC;
            margin: 0.5rem 0;
        }
        .options {
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
            margin: 1rem 0;
        }
        .option-btn {
            background: #2A3E48;
            border: none;
            text-align: left;
            padding: 0.7rem 1rem;
            border-radius: 1.8rem;
            font-weight: 500;
            color: #F2E8CF;
        }
        .feedback {
            background: #0c1c24;
            padding: 0.5rem;
            border-radius: 2rem;
            text-align: center;
            font-weight: bold;
        }
        .score-panel {
            display: flex;
            justify-content: space-between;
            margin: 0.8rem 0;
            background: #00000033;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
        }
        .next-btn, .reset-quiz-btn {
            width: 100%;
            margin-top: 0.5rem;
        }
        .reset-quiz-btn {
            background: #3A2C2A;
            border-color: #BD7F5A;
        }
        .audio-note {
            font-size: 0.7rem;
            text-align: center;
            margin-top: 0.5rem;
            color: #9aaeb9;
        }
        footer {
            text-align: center;
            margin-top: 2rem;
            font-size: 0.75rem;
            color: #6c8796;
        }
        @media (max-width: 780px) {
            .flashcard { font-size: 1.2rem; }
            .question-text { font-size: 1rem; }
            .section-title { font-size: 1.3rem; }
        }
    </style>
</head>
<body>
<div class="app-wrapper">
    <div class="main-header">
        <h1>🇩🇪 DeutschLernen PRO 🇷🇺</h1>
        <p>200+ слов и фраз | Уровни A0 → C1 | 🔊 Живая озвучка немецкого | Карточки + умная викторина</p>
    </div>

    <div class="level-bar" id="levelBar">
        <button data-level="A0" class="level-btn active">A0 (старт)</button>
        <button data-level="A1" class="level-btn">A1 (база)</button>
        <button data-level="A2" class="level-btn">A2 (быт)</button>
        <button data-level="B1" class="level-btn">B1 (разговор)</button>
        <button data-level="B2" class="level-btn">B2 (продвин.)</button>
        <button data-level="C1" class="level-btn">C1 (эксперт)</button>
    </div>

    <div class="double-panel">
        <!-- Флеш-карточки -->
        <div class="flashcard-panel">
            <div class="section-title">
                📖 Карточки
                <span style="font-size:0.7rem;">🔊 нажми на кнопку</span>
            </div>
            <div id="flashcard" class="flashcard card-german">Загрузка...</div>
            <div style="display: flex; justify-content: center; margin: 0.7rem 0;">
                <button id="speakCardBtn" class="speaker-btn">🔊 Озвучить (немецкий)</button>
            </div>
            <div class="flip-hint">🖱️ Клик по карточке: немецкий ➜ перевод</div>
            <div class="card-nav">
                <button id="prevCardBtn">◀ Назад</button>
                <button id="randomCardBtn">🎲 Случайно</button>
                <button id="nextCardBtn">Вперёд ▶</button>
            </div>
            <div style="margin-top: 0.8rem; text-align:center; background:#00000033; border-radius:2rem; padding:0.3rem;">
                <span id="cardCounter">— / —</span>
            </div>
        </div>

        <!-- Викторина -->
        <div class="quiz-panel">
            <div class="section-title">⚡ Викторина + аудио</div>
            <div class="quiz-area">
                <div id="quizQuestion" class="question-text">Выберите уровень</div>
                <div style="display: flex; justify-content: center; gap:1rem; margin-bottom:0.5rem;">
                    <button id="speakQuizWordBtn" style="background:#E6B17E30;">🔊 Озвучить немецкий ответ</button>
                </div>
                <div id="optionsContainer" class="options"></div>
                <div id="quizFeedback" class="feedback">✨ Выберите ответ ✨</div>
                <div class="score-panel">
                    <span>🏆 Очки: <span id="quizScore">0</span></span>
                    <span>🔥 Серия: <span id="streakCount">0</span></span>
                </div>
                <button id="nextQuizBtn" class="next-btn">➡ Следующий вопрос</button>
                <button id="resetQuizBtn" class="reset-quiz-btn">🔄 Сбросить счёт</button>
                <div class="audio-note">🎧 Кнопка озвучит немецкое слово/фразу из правильного ответа</div>
            </div>
        </div>
    </div>
    <footer>💡 Более 210 слов, фраз и целых предложений. Учите немецкий с произношением! Все уровни — от приветствий до дискуссий.</footer>
</div>

<script>
    // ======================= РАСШИРЕННАЯ БАЗА: СЛОВА + ЦЕЛЫЕ ПРЕДЛОЖЕНИЯ =======================
    const vocabDatabase = {




        A0: [
            { german: "Hallo", russian: "Привет" }, { german: "Tschüss", russian: "Пока" }, { german: "Ja", russian: "Да" },
            { german: "Nein", russian: "Нет" }, { german: "Danke", russian: "Спасибо" }, { german: "Bitte", russian: "Пожалуйста" },
            { german: "der Hund", russian: "собака" }, { german: "die Katze", russian: "кошка" }, { german: "rot", russian: "красный" },
            { german: "blau", russian: "синий" }, { german: "eins", russian: "один" }, { german: "zwei", russian: "два" },
            { german: "ich", russian: "я" }, { german: "du", russian: "ты" }, { german: "das Haus", russian: "дом" },
            { german: "die Mutter", russian: "мама" }, { german: "der Vater", russian: "папа" }, { german: "guten Morgen", russian: "доброе утро" },
            { german: "gute Nacht", russian: "спокойной ночи" }, { german: "die Sonne", russian: "солнце" }, { german: "der Mond", russian: "луна" },
            { german: "das Wasser", russian: "вода" }, { german: "der Kaffee", russian: "кофе" }, { german: "das Brot", russian: "хлеб" },
            { german: "Hallo, wie geht's?", russian: "Привет, как дела?" },
{ german: "Mir geht es gut.", russian: "У меня всё хорошо." },
{ german: "Auf Wiedersehen", russian: "До свидания" },
{ german: "Bis bald", russian: "До скорого" },
{ german: "Bis später", russian: "До встречи" },
{ german: "die Lampe", russian: "лампа" },
{ german: "der Stuhl", russian: "стул" },
{ german: "das Fenster", russian: "окно" },
{ german: "die Tür", russian: "дверь" },
{ german: "das Buch", russian: "книга" },
{ german: "der Tisch", russian: "стол" },
{ german: "weiß", russian: "белый" },
{ german: "schwarz", russian: "чёрный" },
{ german: "grün", russian: "зелёный" },
{ german: "gelb", russian: "жёлтый" },
{ german: "drei", russian: "три" },
{ german: "vier", russian: "четыре" },
{ german: "fünf", russian: "пять" },
{ german: "er", russian: "он" },
{ german: "sie", russian: "она" },
{ german: "es", russian: "оно" },
{ german: "wir", russian: "мы" },
{ german: "ihr", russian: "вы (мн.ч.)" },
{ german: "sie (Plural)", russian: "они" },
{ german: "der Morgen", russian: "утро" },
{ german: "der Tag", russian: "день" },
{ german: "die Nacht", russian: "ночь" },
{ german: "heute", russian: "сегодня" },
{ german: "morgen", russian: "завтра" },
{ german: "gestern", russian: "вчера" },
{ german: "die Ampel", russian: "светофор" },
{ german: "die Straße", russian: "улица" },
{ german: "das Auto", russian: "машина" },
{ german: "der Bus", russian: "автобус" },
{ german: "die Bahn", russian: "поезд/электричка" },
{ german: "das Fahrrad", russian: "велосипед" },
{ german: "fahren", russian: "ехать" },
{ german: "stehen", russian: "стоять" },
{ german: "sitzen", russian: "сидеть" },
{ german: "liegen", russian: "лежать" },
{ german: "die Arbeit", russian: "работа" },
{ german: "die Schule", russian: "школа" },
{ german: "die Universität", russian: "университет" },
{ german: "der Park", russian: "парк" },
{ german: "das Kino", russian: "кинотеатр" },
{ german: "das Restaurant", russian: "ресторан" },
{ german: "das Hotel", russian: "отель" },
{ german: "die Toilette", russian: "туалет" },
{ german: "links", russian: "слева" },
{ german: "rechts", russian: "справа" },
{ german: "geradeaus", russian: "прямо" },
{ german: "oben", russian: "сверху" },
{ german: "unten", russian: "снизу" },
{ german: "die Mutter", russian: "мама" },
{ german: "der Vater", russian: "папа" },
{ german: "die Schwester", russian: "сестра" },
{ german: "der Bruder", russian: "брат" },
{ german: "die Oma", russian: "бабушка" },
{ german: "der Opa", russian: "дедушка" },
{ german: "das Kind", russian: "ребёнок" }
        ],




        A1: [
            { german: "der Apfel", russian: "яблоко" }, { german: "die Arbeit", russian: "работа" }, { german: "sprechen", russian: "говорить" },
            { german: "schön", russian: "красивый" }, { german: "das Wetter", russian: "погода" }, { german: "lecker", russian: "вкусный" },
            { german: "die Familie", russian: "семья" }, { german: "der Bruder", russian: "брат" }, { german: "die Schwester", russian: "сестра" },
            { german: "trinken", russian: "пить" }, { german: "essen", russian: "есть" }, { german: "der Tisch", russian: "стол" },
            { german: "die Schule", russian: "школа" }, { german: "spazieren", russian: "гулять" }, { german: "das Geschenk", russian: "подарок" },
            { german: "aufstehen", russian: "вставать" }, { german: "schlafen", russian: "спать" }, { german: "kochen", russian: "готовить" },
            { german: "einkaufen", russian: "ходить за покупками" }, { german: "das Auto", russian: "машина" }, { german: "schnell", russian: "быстрый" },
            { german: "die Musik", russian: "музыка" },
            { german: "der Beruf", russian: "профессия" },
{ german: "der Arzt", russian: "врач" },
{ german: "die Ärztin", russian: "врач (женщина)" },
{ german: "der Lehrer", russian: "учитель" },
{ german: "die Lehrerin", russian: "учительница" },
{ german: "der Student", russian: "студент" },
{ german: "die Studentin", russian: "студентка" },
{ german: "das Krankenhaus", russian: "больница" },
{ german: "die Apotheke", russian: "аптека" },
{ german: "das Lebensmittel", russian: "продукты питания" },
{ german: "der Supermarkt", russian: "супермаркет" },
{ german: "der Markt", russian: "рынок" },
{ german: "das Obst", russian: "фрукты" },
{ german: "das Gemüse", russian: "овощи" },
{ german: "das Fleisch", russian: "мясо" },
{ german: "der Fisch", russian: "рыба" },
{ german: "die Milch", russian: "молоко" },
{ german: "der Käse", russian: "сыр" },
{ german: "die Butter", russian: "масло" },
{ german: "das Ei", russian: "яйцо" },
{ german: "der Zucker", russian: "сахар" },
{ german: "das Salz", russian: "соль" },
{ german: "der Pfeffer", russian: "перец" },
{ german: "die Tasse", russian: "чашка" },
{ german: "der Löffel", russian: "ложка" },
{ german: "die Gabel", russian: "вилка" },
{ german: "das Messer", russian: "нож" },
{ german: "der Teller", russian: "тарелка" },
{ german: "die Flasche", russian: "бутылка" },
{ german: "das Glas", russian: "стакан" },
{ german: "laufen", russian: "бежать" },
{ german: "gehen", russian: "идти" },
{ german: "kommen", russian: "приходить" },
{ german: "sehen", russian: "видеть" },
{ german: "hören", russian: "слышать" },
{ german: "fühlen", russian: "чувствовать" },
{ german: "nehmen", russian: "брать" },
{ german: "geben", russian: "давать" },
{ german: "finden", russian: "находить" },
{ german: "helfen", russian: "помогать" },
{ german: "die Sonne scheint", russian: "солнце светит" },
{ german: "Es regnet.", russian: "Идёт дождь." },
{ german: "Es schneit.", russian: "Идёт снег." },
{ german: "Es ist warm.", russian: "Тепло." },
{ german: "Es ist kalt.", russian: "Холодно." },
{ german: "der Winter", russian: "зима" },
{ german: "der Sommer", russian: "лето" },
{ german: "der Frühling", russian: "весна" },
{ german: "der Herbst", russian: "осень" },
{ german: "die Uhr", russian: "часы (настенные)" },
{ german: "Wie spät ist es?", russian: "Который час?" },
{ german: "Es ist 10 Uhr.", russian: "Сейчас 10 часов." },
{ german: "halb", russian: "половина" },
{ german: "Viertel", russian: "четверть" },
{ german: "glücklich", russian: "счастливый" },
{ german: "traurig", russian: "грустный" },
{ german: "müde", russian: "уставший" },
{ german: "krank", russian: "больной" },
{ german: "gesund", russian: "здоровый" },
{ german: "Ich liebe dich.", russian: "Я люблю тебя." }
        ],







        A2: [
            { german: "verstehen", russian: "понимать" }, { german: "die Freundschaft", russian: "дружба" }, { german: "das Abenteuer", russian: "приключение" },
            { german: "glücklich", russian: "счастливый" }, { german: "traurig", russian: "грустный" }, { german: "der Urlaub", russian: "отпуск" },
            { german: "das Flugzeug", russian: "самолёт" }, { german: "der Bahnhof", russian: "вокзал" }, { german: "die Bedeutung", russian: "значение" },
            { german: "erzählen", russian: "рассказывать" }, { german: "die Wohnung", russian: "квартира" }, { german: "putzen", russian: "убирать" },
            { german: "nützlich", russian: "полезный" }, { german: "die Geduld", russian: "терпение" }, { german: "sorgen", russian: "заботиться" },
            { german: "Ich bin müde.", russian: "Я устал." }, { german: "Das ist interessant.", russian: "Это интересно." },
            { german: "Kein Problem.", russian: "Без проблем." }, { german: "Ich habe Hunger.", russian: "Я голоден." },
            { german: "Lass uns gehen!", russian: "Пойдём!" }, { german: "Gute Idee!", russian: "Отличная идея!" },
            { german: "der Kopf", russian: "голова" },
{ german: "die Hand", russian: "рука (кисть)" },
{ german: "der Arm", russian: "рука (от плеча)" },
{ german: "das Bein", russian: "нога" },
{ german: "der Fuß", russian: "стопа" },
{ german: "das Auge", russian: "глаз" },
{ german: "die Nase", russian: "нос" },
{ german: "der Mund", russian: "рот" },
{ german: "das Ohr", russian: "ухо" },
{ german: "die Haare", russian: "волосы" },
{ german: "der Flughafen", russian: "аэропорт" },
{ german: "der Zug", russian: "поезд" },
{ german: "das Ticket", russian: "билет" },
{ german: "der Koffer", russian: "чемодан" },
{ german: "der Reisepass", russian: "загранпаспорт" },
{ german: "das Hotelzimmer", russian: "номер в отеле" },
{ german: "die Reise", russian: "путешествие" },
{ german: "buchen", russian: "бронировать" },
{ german: "ankommen", russian: "прибывать" },
{ german: "abfahren", russian: "отправляться" },
{ german: "die Kopfschmerzen", russian: "головная боль" },
{ german: "die Zahnschmerzen", russian: "зубная боль" },
{ german: "das Fieber", russian: "температура" },
{ german: "der Arzttermin", russian: "приём у врача" },
{ german: "das Rezept", russian: "рецепт (на лекарство)" },
{ german: "die Medizin", russian: "лекарство" },
{ german: "sich ausruhen", russian: "отдыхать" },
{ german: "sich erinnern", russian: "вспоминать" },
{ german: "vergessen", russian: "забывать" },
{ german: "schon", russian: "уже" }
        ],





        B1: [
            { german: "umweltfreundlich", russian: "экологичный" }, { german: "die Leidenschaft", russian: "страсть" }, { german: "erfolgreich", russian: "успешный" },
            { german: "sich bewerben", russian: "подавать заявку" }, { german: "die Herausforderung", russian: "вызов" }, { german: "erstaunlich", russian: "удивительный" },
            { german: "verantwortlich", russian: "ответственный" }, { german: "die Kenntnisse", russian: "навыки" }, { german: "die Erfahrung", russian: "опыт" },
            { german: "der Fortschritt", russian: "прогресс" }, { german: "verhandeln", russian: "вести переговоры" },
            { german: "Ich stimme dir zu.", russian: "Я с тобой согласен." }, { german: "Das glaube ich nicht.", russian: "Я так не думаю." },
            { german: "Es kommt darauf an.", russian: "Смотря по обстоятельствам." }, { german: "Keine Sorge!", russian: "Не беспокойся!" },
            { german: "Ich freue mich darauf.", russian: "Я жду этого с нетерпением." }, { german: "Können Sie mir bitte helfen?", russian: "Не могли бы вы помочь?" },
            { german: "Ich habe eine Frage.", russian: "У меня есть вопрос." }, { german: "Wie viel kostet das?", russian: "Сколько это стоит?" },
            { german: "Ich verstehe nicht.", russian: "Я не понимаю." }, { german: "Könnten Sie das bitte wiederholen?", russian: "Повторите, пожалуйста." },
            { german: "Ich möchte gerne einen Tisch reservieren.", russian: "Я хотел бы забронировать столик." },
{ german: "Können Sie mir den Weg zum Bahnhof zeigen?", russian: "Вы можете показать мне дорогу к вокзалу?" },
{ german: "Wie spät ist es?", russian: "Который час?" },
{ german: "Ich habe meinen Schlüssel verloren.", russian: "Я потерял свой ключ." },
{ german: "Das ist eine gute Frage.", russian: "Это хороший вопрос." },
{ german: "Ich bin anderer Meinung.", russian: "Я придерживаюсь другого мнения." },
{ german: "Lass mich kurz überlegen.", russian: "Дай мне подумать минутку." },
{ german: "Das habe ich nicht gewusst.", russian: "Я этого не знал." },
{ german: "Es tut mir leid, das war mein Fehler.", russian: "Извините, это была моя ошибка." },
{ german: "Kannst du mir einen Gefallen tun?", russian: "Можешь сделать мне одолжение?" },
{ german: "Ich warte schon seit 20 Minuten.", russian: "Я жду уже 20 минут." },
{ german: "Das ist mir zu teuer.", russian: "Это для меня слишком дорого." },
{ german: "Hast du das schon mal probiert?", russian: "Ты это уже пробовал когда-нибудь?" },
{ german: "Ich fühle mich heute nicht wohl.", russian: "Я сегодня плохо себя чувствую." },
{ german: "Worüber redest du?", russian: "О чём ты говоришь?" },
{ german: "Das klingt gut!", russian: "Звучит хорошо!" },
{ german: "Ich habe keine Lust dazu.", russian: "У меня нет желания этим заниматься." },
{ german: "Mach dir keine Sorgen!", russian: "Не переживай!" },
{ german: "Ich komme gleich zurück.", russian: "Я сейчас вернусь." },
{ german: "Das ist typisch deutsch.", russian: "Это типично для немцев." },
{ german: "Wo kann ich hier parken?", russian: "Где я могу здесь припарковаться?" },
{ german: "Ich suche eine günstige Wohnung.", russian: "Я ищу недорогую квартиру." },
{ german: "Kann ich mit Karte bezahlen?", russian: "Могу ли я заплатить картой?" },
{ german: "Die Rechnung, bitte!", russian: "Счёт, пожалуйста!" },
{ german: "Ich habe mich verlaufen.", russian: "Я заблудился." },
{ german: "Das macht mir großen Spaß.", russian: "Это доставляет мне большое удовольствие." },
{ german: "Ich bin total kaputt.", russian: "Я совершенно разбит (устал)." },
{ german: "Lass uns einen Film anschauen.", russian: "Давай посмотрим фильм." },
{ german: "Das ist eine gute Gelegenheit.", russian: "Это хорошая возможность." },
{ german: "Ich kann dir leider nicht helfen.", russian: "К сожалению, я не могу тебе помочь." }
        ],








        B2: [
            { german: "die Nachhaltigkeit", russian: "устойчивость" }, { german: "differenziert", russian: "дифференцированный" }, { german: "die Voraussetzung", russian: "предпосылка" },
            { german: "unverzichtbar", russian: "незаменимый" }, { german: "die Auseinandersetzung", russian: "дискуссия" }, { german: "einschätzen", russian: "оценивать" },
            { german: "zukunftsorientiert", russian: "ориентированный на будущее" }, { german: "der Standpunkt", russian: "точка зрения" }, { german: "die Konsequenz", russian: "последствие" },
            { german: "umfangreich", russian: "обширный" }, { german: "durchführen", russian: "проводить" }, { german: "implementieren", russian: "внедрять" },
            { german: "Das ist mir Wurst.", russian: "Мне всё равно" }, { german: "Ich drücke dir die Daumen.", russian: "Я за тебя держу кулачки" },
            { german: "Das ist nicht mein Bier.", russian: "Это не моё дело" }, { german: "Aller Anfang ist schwer.", russian: "Лиха беда начало" },
            { german: "Meiner Meinung nach...", russian: "По моему мнению..." }, { german: "Einerseits... andererseits...", russian: "С одной стороны... с другой..." }
        ],
        C1: [
            { german: "die Ambivalenz", russian: "амбивалентность" }, { german: "inklusiv", russian: "инклюзивный" }, { german: "das Phänomen", russian: "феномен" },
            { german: "elaborieren", russian: "детально разрабатывать" }, { german: "die Diskrepanz", russian: "расхождение" }, { german: "kognitiv", russian: "когнитивный" },
            { german: "die Relevanz", russian: "актуальность" }, { german: "synthetisieren", russian: "синтезировать" }, { german: "im Rahmen", russian: "в рамках" },
            { german: "reflektieren", russian: "рефлексировать" }, { german: "die Multidimensionalität", russian: "многомерность" }, { german: "prädisponiert", russian: "предрасположенный" },
            { german: "Ich bin der Ansicht, dass...", russian: "Я придерживаюсь мнения, что..." }, { german: "Es lässt sich nicht leugnen, dass...", russian: "Нельзя отрицать, что..." },
            { german: "Das ist ein zweischneidiges Schwert.", russian: "Это палка о двух концах" }, { german: "In Anbetracht der Tatsache...", russian: "Принимая во внимание факт..." },
            { german: "ein hohes Maß an", russian: "высокая степень" }, { german: "grundlegende Bedeutung", russian: "фундаментальное значение" }
        ]
    };

    // текущее состояние
    let currentLevel = "A0";
    let currentCardIndex = 0;
    let isFlipped = false;
    let currentVocabList = [...vocabDatabase.A0];

    // DOM карточек
    const flashcardDiv = document.getElementById('flashcard');
    const prevBtn = document.getElementById('prevCardBtn');
    const nextBtn = document.getElementById('nextCardBtn');
    const randomCardBtn = document.getElementById('randomCardBtn');
    const cardCounterSpan = document.getElementById('cardCounter');
    const speakCardBtn = document.getElementById('speakCardBtn');

    // Quiz vars
    let currentQuizQuestion = null;
    let quizScore = 0;
    let streak = 0;
    let quizLocked = false;
    let answered = false;
    let currentCorrectGermanRaw = "";

    const quizQuestionDiv = document.getElementById('quizQuestion');
    const optionsContainer = document.getElementById('optionsContainer');
    const quizFeedbackSpan = document.getElementById('quizFeedback');
    const quizScoreSpan = document.getElementById('quizScore');
    const streakSpan = document.getElementById('streakCount');
    const nextQuizBtn = document.getElementById('nextQuizBtn');
    const resetQuizBtn = document.getElementById('resetQuizBtn');
    const speakQuizWordBtn = document.getElementById('speakQuizWordBtn');

    // ========== ФУНКЦИЯ ОЗВУЧКИ (НЕМЕЦКИЙ TTS) ==========
    function speakGerman(text) {
        if (!text || typeof window.speechSynthesis === 'undefined') {
            console.warn("TTS не поддерживается");
            return;
        }
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE';
        utterance.rate = 0.88;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
    }

    function speakCurrentCardGerman() {
        if (!currentVocabList.length) return;
        const wordObj = currentVocabList[currentCardIndex];
        if (wordObj && wordObj.german) speakGerman(wordObj.german);
    }

    function speakCurrentQuizGerman() {
        if (currentCorrectGermanRaw && currentCorrectGermanRaw.trim() !== "") {
            speakGerman(currentCorrectGermanRaw);
        } else {
            speakGerman("Kein Wort verfügbar");
        }
    }

    // ========== КАРТОЧКИ ==========
    function updateFlashcardUI() {
        if (!currentVocabList.length) return;
        const item = currentVocabList[currentCardIndex];
        if (!isFlipped) {
            flashcardDiv.textContent = item.german;
            flashcardDiv.className = "flashcard card-german";
        } else {
            flashcardDiv.textContent = item.russian;
            flashcardDiv.className = "flashcard card-russian";
        }
        cardCounterSpan.textContent = `${currentCardIndex+1} / ${currentVocabList.length}`;
    }

    function flip() { isFlipped = !isFlipped; updateFlashcardUI(); }
    function setCard(idx) {
        if (!currentVocabList.length) return;
        if (idx < 0) idx = 0;
        if (idx >= currentVocabList.length) idx = currentVocabList.length-1;
        currentCardIndex = idx;
        isFlipped = false;
        updateFlashcardUI();
    }
    function nextCard() { let ni = currentCardIndex+1; if(ni >= currentVocabList.length) ni = 0; setCard(ni); }
    function prevCard() { let pi = currentCardIndex-1; if(pi < 0) pi = currentVocabList.length-1; setCard(pi); }
    function randomCard() { if(currentVocabList.length) setCard(Math.floor(Math.random() * currentVocabList.length)); }

    // смена уровня
    function switchLevel(level) {
        currentLevel = level;
        currentVocabList = [...vocabDatabase[level]];
        if (currentVocabList.length === 0) currentVocabList = [{ german: "Keine Vokabeln", russian: "нет слов" }];
        currentCardIndex = 0;
        isFlipped = false;
        updateFlashcardUI();
        resetQuizOnlyState();
        generateNewQuizQuestion();
        renderQuiz();
        document.querySelectorAll('.level-btn').forEach(btn => {
            if(btn.getAttribute('data-level') === level) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }

    // ========== ВИКТОРИНА ==========
    function generateNewQuizQuestion() {
        if (!currentVocabList.length) return;
        const mode = Math.floor(Math.random() * 2); // 0: de->ru, 1: ru->de
        const randIndex = Math.floor(Math.random() * currentVocabList.length);
        const correctItem = currentVocabList[randIndex];
        let question = "", correctAnswer = "";
        if (mode === 0) {
            question = `🇩🇪 Как перевести "${correctItem.german}" на русский?`;
            correctAnswer = correctItem.russian;
        } else {
            question = `🇷🇺 Что значит по-немецки "${correctItem.russian}"?`;
            correctAnswer = correctItem.german;
        }
        currentCorrectGermanRaw = correctItem.german;

        // Wrong options
        let wrongCandidates = currentVocabList.filter(item => {
            if (mode === 0) return item.russian !== correctAnswer;
            else return item.german !== correctAnswer;
        }).map(item => mode === 0 ? item.russian : item.german);
        wrongCandidates = [...new Set(wrongCandidates)];
        while(wrongCandidates.length < 3) wrongCandidates.push("???", "другой вариант");
        let shuffledWrong = [...wrongCandidates];
        for (let i = shuffledWrong.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledWrong[i], shuffledWrong[j]] = [shuffledWrong[j], shuffledWrong[i]];
        }
        let wrongOptions = shuffledWrong.slice(0,3);
        let options = [correctAnswer, ...wrongOptions];
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
        currentQuizQuestion = { questionText: question, correctAnswer, options };
    }

    function renderQuiz() {
        if (!currentQuizQuestion) return;
        quizQuestionDiv.textContent = currentQuizQuestion.questionText;
        optionsContainer.innerHTML = "";
        currentQuizQuestion.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.classList.add('option-btn');
            btn.addEventListener('click', (e) => handleQuizAnswer(opt, btn));
            optionsContainer.appendChild(btn);
        });
        quizFeedbackSpan.innerHTML = "Выберите вариант ответа!";
        answered = false;
        quizLocked = false;
        document.querySelectorAll('.option-btn').forEach(btn => { btn.disabled = false; btn.style.background = "#2A3E48"; });
    }

    function handleQuizAnswer(selected, btnElem) {
        if (answered || quizLocked) {
            quizFeedbackSpan.innerHTML = "⏳ Уже отвечено, нажми 'Следующий вопрос'";
            return;
        }
        const isCorrect = (selected === currentQuizQuestion.correctAnswer);
        answered = true;
        quizLocked = true;
        const allBtns = document.querySelectorAll('.option-btn');
        allBtns.forEach(btn => btn.disabled = true);
        if(isCorrect) {
            quizScore += 10;
            streak++;
            quizFeedbackSpan.innerHTML = `✅ Верно! +10 очков. Серия: ${streak}`;
            if(btnElem) btnElem.style.background = "#2E7D64";
            allBtns.forEach(btn => { if(btn.textContent === currentQuizQuestion.correctAnswer) btn.style.background = "#2E7D64"; });
        } else {
            streak = 0;
            quizFeedbackSpan.innerHTML = `❌ Ошибка! Правильный ответ: "${currentQuizQuestion.correctAnswer}". Учим дальше!`;
            if(btnElem) btnElem.style.background = "#A1422F";
            allBtns.forEach(btn => { if(btn.textContent === currentQuizQuestion.correctAnswer) btn.style.background = "#2E7D64"; });
        }
        updateQuizUI();
    }

    function updateQuizUI() { quizScoreSpan.textContent = quizScore; streakSpan.textContent = streak; }
    function nextQuizQuestion() {
        if (!answered && !quizLocked) {
            generateNewQuizQuestion(); renderQuiz();
            quizFeedbackSpan.innerHTML = "Вопрос пропущен, попробуйте следующий!";
            return;
        }
        generateNewQuizQuestion(); renderQuiz();
    }
    function resetQuizOnlyState() { quizScore = 0; streak = 0; updateQuizUI(); generateNewQuizQuestion(); renderQuiz(); quizLocked=false; answered=false; }

    // ========== ПОДПИСКИ ==========
    flashcardDiv.addEventListener('click', flip);
    prevBtn.addEventListener('click', prevCard);
    nextBtn.addEventListener('click', nextCard);
    randomCardBtn.addEventListener('click', randomCard);
    speakCardBtn.addEventListener('click', speakCurrentCardGerman);
    nextQuizBtn.addEventListener('click', nextQuizQuestion);
    resetQuizBtn.addEventListener('click', () => resetQuizOnlyState());
    speakQuizWordBtn.addEventListener('click', speakCurrentQuizGerman);
    
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', (e) => { const lvl = btn.getAttribute('data-level'); if(lvl) switchLevel(lvl); });
    });

    // СТАРТ
    switchLevel("A0");
    generateNewQuizQuestion();
    renderQuiz();
</script>
</body>
</html>
