window.pgnData = {
  "categories": [
    { "id": "spaces-rule", "title": "⚠️ Пробелы", "isAxeon": false },
    { "id": "vars", "title": "📦 Переменные", "isAxeon": false },
    { "id": "operators", "title": "🧮 Математика", "isAxeon": false },
    { "id": "strings", "title": "🔤 Строки", "isAxeon": false },
    { "id": "axeon", "title": "⚡ Axeon Объекты", "isAxeon": true },
    { "id": "object-events", "title": "👆 Управление и касания", "isAxeon": true },
    { "id": "control-for", "title": "🔄 Циклы, Условия & Функции", "isAxeon": false },
    { "id": "objects", "title": "🎨 Графика sRect & Rect", "isAxeon": false },
    { "id": "texts", "title": "📝 Тексты & Ввод", "isAxeon": false },
    { "id": "fonts", "title": "🔤 Шрифты", "isAxeon": false },
    { "id": "system", "title": "⚙️ Системные $system", "isAxeon": false },
    { "id": "system-commands", "title": "💻 Команды system", "isAxeon": false }
  ],
  "groups": [
    {
      "groupTitle": "Основы языка",
      "items": [
        { "id": "spaces-rule", "title": "Правило пробелов ⚠️" },
        { "id": "vars", "title": "Переменные и Область" },
        { "id": "operators", "title": "Операции и Математика" },
        { "id": "strings", "title": "Строки и Автосклеивание" }
      ]
    },
    {
      "groupTitle": "Axeon Движок",
      "items": [
        { "id": "axeon", "title": "Свойства объектов (Axeon) ⚡", "isHighlight": true },
        { "id": "object-events", "title": "События и методы объектов (object.*)" }
      ]
    },
    {
      "groupTitle": "Управление кодом",
      "items": [
        { "id": "control-for", "title": "Циклы / if / timer / function" }
      ]
    },
    {
      "groupTitle": "Графика и Текст",
      "items": [
        { "id": "objects", "title": "Графические объекты (sRect / rect)" },
        { "id": "texts", "title": "Тексты, TextWH и Поля ввода" },
        { "id": "fonts", "title": "Системные шрифты" }
      ]
    },
    {
      "groupTitle": "Система",
      "items": [
        { "id": "system", "title": "Системные переменные $system" },
        { "id": "system-commands", "title": "Системные команды и Уведомления" }
      ]
    }
  ],
  "sections": [
    {
      "id": "spaces-rule",
      "title": "Критическое правило: Пробелы в коде",
      "blocks": [
        {
          "type": "callout",
          "style": "danger",
          "icon": "⚠️",
          "title": "ВСЕГДА ИСПОЛЬЗУЙТЕ ПРОБЕЛЫ!",
          "text": "В PGN GRAPHICS парсер требует обязательного разделения пробелами для всех токенов, операторов, переменных, кавычек и спец-символов. Слитно писать нельзя!"
        },
        {
          "type": "grid2",
          "items": [
            {
              "cardTitle": "❌ Неправильно (Ошибка парсера)",
              "cardStyle": "border-color: rgba(244, 63, 94, 0.4);",
              "titleColor": "var(--rose)",
              "codeTitle": "Некорректно",
              "code": "<span class=\"var\">name</span>=<span class=\"num\">123</span>\n<span class=\"var\">n</span> <span class=\"op\">$=</span> <span class=\"str\">\"text\"</span>\n<span class=\"var\">val</span> = <span class=\"num\">1</span>+<span class=\"num\">2</span>"
            },
            {
              "cardTitle": "✅ Правильно (Работает)",
              "cardStyle": "border-color: rgba(16, 185, 129, 0.4);",
              "titleColor": "var(--emerald)",
              "codeTitle": "Валидный код",
              "code": "<span class=\"var\">name</span> = <span class=\"num\">123</span>\n<span class=\"var\">n</span> <span class=\"op\">$=</span> <span class=\"str\">\" text \"</span>\n<span class=\"var\">val</span> = <span class=\"num\">1</span> + <span class=\"num\">2</span>"
            }
          ]
        }
      ]
    },
    {
      "id": "vars",
      "title": "Переменные и Область видимости",
      "blocks": [
        {
          "type": "html",
          "html": "<p>В PGN GRAPHICS переменные делятся на глобальные и локальные. Регистр символов учитывается.</p>"
        },
        {
          "type": "grid2",
          "items": [
            {
              "badge": { "text": "Глобальные", "class": "badge-global" },
              "cardTitle": "Глобальный контекст",
              "description": "Доступны во всех файлах и во всех структурах проекта.",
              "codeTitle": "Создание",
              "code": "<span class=\"var\">name</span> = <span class=\"num\">123</span>",
              "footerText": "<strong>Получение:</strong> внутри математических операций — просто <code>name</code>, вне операций — с префиксом <code>_name</code>."
            },
            {
              "badge": { "text": "Локальные", "class": "badge-local" },
              "cardTitle": "Локальный контекст",
              "description": "<strong>Можно создавать где угодно!</strong> Работают в текущем файле или внутри структур (<code>if</code>, <code>for</code>, <code>timer</code>).",
              "codeTitle": "Создание",
              "code": "<span class=\"kwd\">local</span> <span class=\"var\">name</span> = <span class=\"num\">123</span>",
              "footerText": "<strong>Получение:</strong> всегда через префикс <code>*name</code> (и внутри, и вне выражений)."
            }
          ]
        },
        {
          "type": "callout",
          "style": "info",
          "icon": "💡",
          "title": "Множественная инициализация",
          "text": "Можно создавать несколько переменных в одну строку через запятую: <code style=\"margin-top: 6px; display: inline-block;\">name = 10 , n = 2</code><p style=\"margin-top: 6px; font-size: 13px;\"><em>Обратите внимание:</em> ключевое слово <code>local</code> работает только для первой переменной после него.</p>"
        }
      ]
    },
    {
      "id": "operators",
      "title": "Математика и Операции",
      "blocks": [
        {
          "type": "html",
          "html": "<p>Запись арифметики: <code>переменная = значение1 [оператор] значение2</code> (сохраняя пробелы вокруг операторов!).</p>"
        },
        {
          "type": "table",
          "headers": ["Оператор", "Название", "Формула / Поведение"],
          "rows": [
            ["<code>+</code>", "Сложение", "<code>знач1 + знач2</code>"],
            ["<code>-</code>", "Вычитание", "<code>знач1 - знач2</code>"],
            ["<code>*</code>", "Умножение", "<code>знач1 * знач2</code>"],
            ["<code>/</code>", "Деление", "<code>знач1 / знач2</code>"],
            ["<code>//</code>", "Целочисленное деление", "Деление без остатка"],
            ["<code>^</code>", "Возведение в степень", "<code>знач1 ^ знач2</code>"],
            ["<code>%</code>", "Процент", "Вычисление процента"],
            ["<code>%/</code>", "Округление к кратному", "<code>округлить( знач1 / знач2 ) * знач2</code>"],
            ["<code>rand</code>", "Случайное число", "Рандомное значение в диапазоне"],
            ["<code>~</code>", "Линейная интерполяция", "<code>знач1 + ( знач2 - знач1 ) * 0.1</code>"],
            ["<code>wrap</code>", "Заворачивание остатка", "<code>зн1 - ( зн2 + 1 ) * округлить(зн1) / (( зн2 + 1 )) + 1</code>"],
            ["<code>min</code> / <code>max</code>", "Минимум / Максимум", "Возвращает меньшее или большее значение"],
            ["<code>&gt;|</code>", "Обратный минимум", "Работает как <code>max</code>"],
            ["<code>&lt;|</code>", "Обратный максимум", "Работает как <code>min</code>"],
            ["<code>&lt;</code>", "Условие 'меньше'", "Если знач2 &gt; знач1, устанавливает <code>1</code>"]
          ]
        },
        {
          "type": "codeBlock",
          "title": "Особые операторы",
          "code": "n <span class=\"op\">+=</span> <span class=\"num\">10</span>        <span class=\"cmt\">-- Прибавляет 10 к текущему значению (работает с любым оператором)</span>\nname <span class=\"op\">??=</span> <span class=\"num\">100</span>   <span class=\"cmt\">-- Если переменная НЕ СОЗДАНА (или равна nil / 0) — создать и записать значение</span>\nn <span class=\"op\">$=</span> <span class=\"str\">\" тут что угодно \"</span> <span class=\"cmt\">-- Вывод строки/значения в консоль</span>"
        }
      ]
    },
    {
      "id": "strings",
      "title": "Работа со строками",
      "blocks": [
        {
          "type": "html",
          "html": "<p>PGN поддерживает автоматическое склеивание строк и переменных, а также специальные символы конкатенации.</p>"
        },
        {
          "type": "codeBlock",
          "title": "Конкатенация",
          "code": "<span class=\"cmt\">-- Операторы конкатенации:</span>\n..             <span class=\"cmt\">-- Склеить со следующим словом</span>\n/n             <span class=\"cmt\">-- Перевести на новую строку и склеить следующее слово</span>\n\n<span class=\"cmt\">-- Строка перед которой НЕ нужно писать .. склеивается сама:</span>\nName = .. text\nN = name name .. text <span class=\"str\">\" строчка \"</span>\n\n<span class=\"cmt\">-- Итог N: \"texttexttextстрочка\"</span>"
        }
      ]
    },
    {
      "id": "axeon",
      "title": "Axeon Engine: Операции со свойствами объектов",
      "blocks": [
        {
          "type": "callout",
          "style": "purple",
          "icon": "⚡",
          "title": "Автоматические переменные объектов",
          "text": "При создании графического объекта (<code>sRect</code>, <code>text</code> и др.) движок Axeon автоматически генерирует его внутренние свойства (например, <code>object.x</code>, <code>object.y</code>, <code>object.w</code>, <code>object.h</code>). С помощью быстрых операторов Axeon можно напрямую читать, суммировать и объединять их с переменными."
        },
        {
          "type": "grid3",
          "items": [
            {
              "badge": { "text": "Присваивание ==", "class": "badge-axeon" },
              "cardTitle": "Чтение свойства",
              "description": "Записывает значение свойства объекта напрямую в переменную:",
              "codeSample": "name == object.x name"
            },
            {
              "badge": { "text": "Сложение =+=", "class": "badge-axeon" },
              "cardTitle": "Прибавление значения",
              "description": "Прибавляет значение свойства объекта к численной переменной:",
              "codeSample": "name =+= object.x name"
            },
            {
              "badge": { "text": "Склейка =..=", "class": "badge-axeon" },
              "cardTitle": "Добавление строки",
              "description": "Склеивает значение свойства объекта с текстом переменной:",
              "codeSample": "name =..= object.x name"
            }
          ]
        },
        {
          "type": "codeBlock",
          "title": "Работа со свойствами объектов",
          "code": "<span class=\"cmt\">-- 1. Получение координаты X объекта 'myRect' и запись её в переменную 'pos'</span>\npos <span class=\"op\">==</span> object.x myRect\n\n<span class=\"cmt\">-- 2. Прибавление координаты X объекта 'myRect' к имеющейся переменной 'score'</span>\nscore <span class=\"op\">=+=</span> object.x myRect\n\n<span class=\"cmt\">-- 3. Присоединение текстового представления координаты X к строковой переменной 'log'</span>\nlog <span class=\"op\">=..=</span> object.x myRect\n\n<span class=\"cmt\">-- Практический пример:</span>\nnew.sRect playerBox <span class=\"num\">100 200 50 50 10 10 10 10 100 0</span>\nposX <span class=\"op\">==</span> object.x playerBox     <span class=\"cmt\">-- posX = 100</span>\ntotal <span class=\"op\">=+=</span> object.x playerBox    <span class=\"cmt\">-- total = total + 100</span>\ninfo <span class=\"op\">=..=</span> object.x playerBox    <span class=\"cmt\">-- info = info .. \"100\"</span>"
        }
      ]
    },
    {
      "id": "object-events",
      "title": "События и методы управления объектами (object.*)",
      "blocks": [
        {
          "type": "subTitle",
          "title": "Обработка касаний"
        },
        {
          "type": "codeBlock",
          "title": "touch.object",
          "code": "<span class=\"cmt\">-- Вызов функции при прикосновении пальцем к объекту</span>\ntouch.object name func\n\n<span class=\"cmt\">-- Синонимы вызова функции:</span>\ntouch.object name func()\ntouch.object name func( n )"
        },
        {
          "type": "subTitle",
          "title": "Методы модификации объектов (object.)"
        },
        {
          "type": "table",
          "headers": ["Команда", "Описание"],
          "rows": [
            ["<code>object.x name знач</code> / <code>object.y name знач</code>", "Установить координату X / Y"],
            ["<code>object.w name знач</code> / <code>object.h name знач</code>", "Установить ширину / высоту"],
            ["<code>object.sx name знач</code> / <code>object.sy name знач</code>", "Изменить координату X / Y (смещение)"],
            ["<code>object.sw name знач</code> / <code>object.sh name знач</code>", "Изменить ширину / высоту"],
            ["<code>object.size name знач</code> / <code>object.ssize name знач</code>", "Установить / изменить размер"],
            ["<code>object.position name x y</code>", "Установить позицию объекта"],
            ["<code>object.anchor_point name x y</code>", "Установить точку привязки"],
            ["<code>object.opacity name знач</code> / <code>object.sopacity name знач</code>", "Установить / изменить непрозрачность (0-100)"],
            ["<code>object.color.rgb name r g b [a]</code>", "Установить RGB цвет и непрозрачность"],
            ["<code>object.rgb name r g b</code> / <code>object.hex name hex</code>", "Установить цвет (RGB или HEX)"],
            ["<code>object.Mx name знач</code> / <code>object.My name знач</code>", "Масштабирование по X / Y"],
            ["<code>object.turn name град</code>", "Установить поворот"],
            ["<code>object.turn_object name target</code>", "Установить вращение по отношению к объекту"],
            ["<code>object.show name</code> / <code>object.hide name</code>", "Показать / скрыть объект"],
            ["<code>object.delete name</code>", "Удалить объект"],
            ["<code>object.layer_above name</code> / <code>object.layer_down name</code>", "Переместить на слой выше / ниже"],
            ["<code>object.outline.w name знач</code> / <code>object.outline.sw name знач</code>", "Установить / изменить ширину обводки"],
            ["<code>object.outline.rgb name r g b [a]</code>", "Установить цвет и непрозрачность обводки"]
          ]
        }
      ]
    },
    {
      "id": "control-for",
      "title": "Управление кодом: Циклы, Условия и Функции",
      "blocks": [
        {
          "type": "subTitle",
          "title": "Цикл for"
        },
        {
          "type": "codeBlock",
          "title": "Конструкция цикла",
          "code": "<span class=\"kwd\">for</span> name от до шаг запись_в_переменную {\n    <span class=\"cmt\">-- Исполняемый код</span>\n}forend_name\n\n<span class=\"cmt\">-- Пример использования:</span>\n<span class=\"kwd\">for</span> n <span class=\"num\">1 100 1</span> i {\n    <span class=\"kwd\">local</span> n = <span class=\"var\">*i</span> * <span class=\"num\">100</span>\n}forend_n"
        },
        {
          "type": "subTitle",
          "title": "Условие if"
        },
        {
          "type": "codeBlock",
          "title": "Логическое ветвление",
          "code": "<span class=\"kwd\">if</span> name значение1 =/==/≈/≠/>/</≥/≤ значение2 ( передать_локальную_переменную ) {\n    <span class=\"cmt\">-- Исполняемый код</span>\n}ifend_name\n\n<span class=\"cmt\">-- Пример:</span>\n<span class=\"kwd\">if</span> n <span class=\"num\">1</span> = <span class=\"num\">2</span> ( n ) {\n    <span class=\"cmt\">-- Выполнится если 1 равно 2</span>\n}ifend_n"
        },
        {
          "type": "subTitle",
          "title": "Таймер timer"
        },
        {
          "type": "codeBlock",
          "title": "Интервальный таймер",
          "code": "<span class=\"kwd\">timer</span> name каждые(сек) сколько_повторов ( передать_локальную_переменную ) {\n    <span class=\"cmt\">-- Код цикла таймера</span>\n}timerend_name\n\n<span class=\"cmt\">-- Пример:</span>\n<span class=\"kwd\">timer</span> n <span class=\"num\">0 60</span> ( i ) {\n    <span class=\"cmt\">-- Код</span>\n}timerend_n"
        },
        {
          "type": "subTitle",
          "title": "Функции function"
        },
        {
          "type": "codeBlock",
          "title": "Создание и вызов функций",
          "code": "<span class=\"kwd\">function</span> name ( i ) {\n    <span class=\"cmt\">-- Код функции</span>\n}functend_name\n\n<span class=\"cmt\">-- Примечания:</span>\n<span class=\"cmt\">-- Переменная i берётся из текущего файла или структуры. Если передавать не нужно, ставьте пробел: ( )</span>\n\n<span class=\"cmt\">-- Варианты вызова функции:</span>\nname()\nname( i ) <span class=\"cmt\">-- Передает локальную i в функцию (объявлять заново в функции не требуется)</span>"
        }
      ]
    },
    {
      "id": "objects",
      "title": "Графические объекты",
      "blocks": [
        {
          "type": "subTitle",
          "title": "Прямоугольник с pro-углами new.sRect"
        },
        {
          "type": "html",
          "html": "<p>Создает векторный прямоугольник с раздельной настройкой скругления каждого из 4 углов.</p>"
        },
        {
          "type": "codeBlock",
          "title": "new.sRect",
          "code": "new.sRect name x y шир выс скруг1 скруг2 скруг3 скруг4 количество_точек поворот\n\n<span class=\"cmt\">-- Пример (рекомендуемое качество точек 100-200):</span>\nnew.sRect name <span class=\"num\">0 0 100 100 15 15 0 0 100 0</span>"
        },
        {
          "type": "subTitle",
          "title": "Обычный прямоугольник new.rect"
        },
        {
          "type": "codeBlock",
          "title": "new.rect",
          "code": "new.rect name x y шир выс скруг\n\n<span class=\"cmt\">-- Пример:</span>\nnew.rect name <span class=\"num\">0 0 100 100 15</span>"
        },
        {
          "type": "subTitle",
          "title": "Параметры графических объектов"
        },
        {
          "type": "codeBlock",
          "title": "Цвет и Непрозрачность",
          "code": "<span class=\"cmt\">-- Установить RGB цвет и непрозрачность (0-100)</span>\nobject.color.rgb name r g b [непрозрачность]\nobject.color.rgb name <span class=\"num\">255 255 255</span>\nobject.color.rgb name <span class=\"num\">255 255 255 100</span>\n\n<span class=\"cmt\">-- Установить только непрозрачность (0-100)</span>\nobject.opacity name непрозрачность\nobject.opacity name <span class=\"num\">100</span>"
        }
      ]
    },
    {
      "id": "texts",
      "title": "Текстовые элементы и поля ввода",
      "blocks": [
        {
          "type": "subTitle",
          "title": "Создание и управление текстом"
        },
        {
          "type": "codeBlock",
          "title": "Создание текста",
          "code": "<span class=\"cmt\">-- Обычный текст:</span>\nnew.text name text x y размер шрифт непрозрачность(0-100)\nnew.text name myText <span class=\"num\">0 0 36</span> medium <span class=\"num\">100</span>\n\n<span class=\"cmt\">-- Текст с шириной, высотой и выравниванием (left / center / right):</span>\nnew.TextWH name text x y размер шрифт непрозрачность ширина высота выравнивание\nnew.TextWH n MyText <span class=\"num\">0 0 36</span> medium <span class=\"num\">100 1000 100</span> center\n\n<span class=\"cmt\">-- Динамическое изменение текста:</span>\ntext.change name newText\ntext.change name love\n\n<span class=\"cmt\">-- Цвет и Прозрачность текста:</span>\ntext.color.rgb name r g b [непрозрачность]\ntext.opacity name непрозрачность(0-100)"
        },
        {
          "type": "subTitle",
          "title": "Многострочное текстовое поле"
        },
        {
          "type": "codeBlock",
          "title": "textField.multiLine",
          "code": "<span class=\"cmt\">-- Создание текстового поля:</span>\nnew.textField.multiLine name x y w h шрифт размерТекста ЗаднийТекст\nnew.textField.multiLine name <span class=\"num\">0 0 250 100</span> medium <span class=\"num\">36</span> Введи_текст\n\n<span class=\"cmt\">-- Установить текст в текстовое поле:</span>\ntext.textField.multiLine name text\n\n<span class=\"cmt\">-- Установить фокус на текстовое поле:</span>\nfocus.textField.multiLine name\n\n<span class=\"cmt\">-- Отключить клавиатуру:</span>\ndisable.keyboard"
        }
      ]
    },
    {
      "id": "fonts",
      "title": "Системные шрифты HorizonOS",
      "blocks": [
        {
          "type": "grid3",
          "items": [
            {
              "cardTitle": "Google Sans",
              "description": "Основной системный шрифт.",
              "list": ["bold", "medium", "regular"]
            },
            {
              "cardTitle": "Comfortaa",
              "description": "Скругленный стиль. <span style='color:var(--rose); font-size:12px;'>⚠️ Без кириллицы</span>",
              "list": ["Comfotiaa bold", "Comfotiaa medium", "Comfotiaa regular"]
            },
            {
              "cardTitle": "Ubuntu",
              "description": "Фирменный шрифт от сикода.",
              "list": ["ubuntu"]
            }
          ]
        }
      ]
    },
    {
      "id": "system",
      "title": "Системные переменные HorizonOS",
      "blocks": [
        {
          "type": "html",
          "html": "<p>Предопределенные глобальные значения с префиксом <code>$system.</code>:</p>"
        },
        {
          "type": "table",
          "headers": ["Переменная", "Описание"],
          "rows": [
            ["<code>$system.fps</code>", "Текущий кадровейт (FPS)"],
            ["<code>$system.color.r / .g / .b</code>", "Системный цвет акцентов и кнопок"],
            ["<code>$system.colorText.r / .g / .b</code>", "Системный цвет текста"],
            ["<code>$system.colorBg.r / .g / .b</code>", "Системный цвет фона"],
            ["<code>$system.version.os</code>", "Версия HorizonOS"],
            ["<code>$system.version.ape</code>", "Версия ядра APE"],
            ["<code>$system.vesion.pgn</code>", "Версия PGN GRAPHICS"],
            ["<code>$system.version.desing</code>", "Версия темы дизайна"],
            ["<code>$system.version.nameDesing</code>", "Имя системного дизайна"],
            ["<code>$system.width</code> / <code>$system.height</code>", "Ширина и высота экрана"],
            ["<code>$system.topScreen</code> / <code>$system.downScreen</code>", "Верхняя и нижняя границы"],
            ["<code>$system.leftScreen</code> / <code>$system.rightScreen</code>", "Левая и правая границы"],
            ["<code>$system.date1</code>", "Нагрузка системы (0 - 100%)"],
            ["<code>$system.time.sec / min / day / month / yers / wday</code>", "Время и дата (<code>wday</code> — день недели)"]
          ]
        }
      ]
    },
    {
      "id": "system-commands",
      "title": "Системные команды и Уведомления",
      "blocks": [
        {
          "type": "subTitle",
          "title": "Интерфейс и Уведомления"
        },
        {
          "type": "codeBlock",
          "title": "Фон, тосты и уведомления",
          "code": "<span class=\"cmt\">-- Установить цвет фона</span>\nbackground.rgb r g b\n\n<span class=\"cmt\">-- Создать уведомление (t — задержка появления в секундах, от 0 до 5)</span>\nnew.notification ГлавныйТекст Текст ТекстКнопки t\n\n<span class=\"cmt\">-- Показать тост-уведомление (время отображения выбирается системой)</span>\nshow.toast текст"
        },
        {
          "type": "subTitle",
          "title": "Команды system"
        },
        {
          "type": "html",
          "html": "<p>У всех системных команд в начале указывается ключевое слово <code>system</code>.</p>"
        },
        {
          "type": "codeBlock",
          "title": "Команды system",
          "code": "<span class=\"cmt\">-- Открыть код в новом приложении</span>\nsystem open.app.is.code code\n\n<span class=\"cmt\">-- Сохранение и работа с данными (через файлы)</span>\nsystem save name данные\nsystem read.save name переменная\nsystem delete.save name\n\n<span class=\"cmt\">-- Управление выключением экрана</span>\nsystem notoff.screen   <span class=\"cmt\">-- отключает выключение экрана</span>\nsystem off.screen      <span class=\"cmt\">-- включает выключение экрана</span>\n\n<span class=\"cmt\">-- Создание нового приложения</span>\nsystem create.app name app.id.adk icon code"
        }
      ]
    }
  ]
};

