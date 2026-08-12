window.pgnData = {
  "categories": [
    { "id": "spaces-rule", "title": "⚠️ Пробелы", "isAxeon": false },
    { "id": "vars", "title": "📦 Переменные", "isAxeon": false },
    { "id": "operators", "title": "🧮 Математика и Операции", "isAxeon": false },
    { "id": "strings", "title": "🔤 Строки и Склеивание", "isAxeon": false },
    { "id": "apps", "title": "📱 Приложения и ID", "isAxeon": false },
    { "id": "app-icons", "title": "🎨 Иконки приложений", "isAxeon": false },
    { "id": "axeon", "title": "⚡ Axeon Объекты", "isAxeon": true },
    { "id": "groups-axeon", "title": "📁 Группы group.*", "isAxeon": true },
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
        { "id": "vars", "title": "Переменные (Создание и Чтение)" },
        { "id": "operators", "title": "Математика и Операторы" },
        { "id": "strings", "title": "Строки и Склеивание" }
      ]
    },
    {
      "groupTitle": "HorizonOS Приложения",
      "items": [
        { "id": "apps", "title": "Формат ID приложений" },
        { "id": "app-icons", "title": "Векторные иконки" }
      ]
    },
    {
      "groupTitle": "Axeon Движок",
      "items": [
        { "id": "axeon", "title": "Свойства объектов (Axeon) ⚡", "isHighlight": true },
        { "id": "groups-axeon", "title": "Управление группами (group.*)" },
        { "id": "object-events", "title": "Управление объектами и касания" }
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
              "cardTitle": "❌ Неправильно: cal = 2 + 2",
              "cardStyle": "border-color: rgba(244, 63, 94, 0.4);",
              "titleColor": "var(--rose)",
              "codeTitle": "Некорректно",
              "code": "name=123\nn $= \"text\"\nval = 1+2"
            },
            {
              "cardTitle": "✅ Правильно: cal = 2 + 2",
              "cardStyle": "border-color: rgba(16, 185, 129, 0.4);",
              "titleColor": "var(--emerald)",
              "codeTitle": "Валидный код",
              "code": "name = 123\nn $= \" text \"\nval = 1 + 2"
            }
          ]
        }
      ]
    },
    {
      "id": "vars",
      "title": "Переменные: Полное руководство",
      "blocks": [
        {
          "type": "callout",
          "style": "purple",
          "icon": "📦",
          "title": "1. Создание переменных (Запись)",
          "text": "• <b>Глобальная переменная:</b> создается простым объявлением <code>name = 123</code>. Работает во всех файлах и структурах.<br>• <b>Локальная переменная:</b> создается через <code>local name = 123</code>. Работает только внутри текущего блока (if, for) или одного файла."
        },
        {
          "type": "subTitle",
          "title": "Запись нескольких переменных в одну строку"
        },
        {
          "type": "callout",
          "style": "warning",
          "icon": "⚠️",
          "title": "Ограничение для local",
          "text": "Создавать несколько локальных переменных в одну строку через запятую НЕЛЬЗЯ. Слово <code>local</code> применяется только к первой переменной!"
        },
        {
          "type": "grid2",
          "items": [
            {
              "cardTitle": "Глобальные (Работает)",
              "cardStyle": "border-color: rgba(16, 185, 129, 0.4);",
              "titleColor": "var(--emerald)",
              "codeTitle": "Обе переменные глобальные",
              "code": "name = 10 , n = 2"
            },
            {
              "cardTitle": "Локальные (Внимание!)",
              "cardStyle": "border-color: rgba(244, 63, 94, 0.4);",
              "titleColor": "var(--rose)",
              "codeTitle": "name — локальная, n — ГЛОБАЛЬНАЯ",
              "code": "local name = 10 , n = 2"
            }
          ]
        },
        {
          "type": "subTitle",
          "title": "2. Чтение переменных (Получение значения)"
        },
        {
          "type": "table",
          "headers": ["Где используется", "Глобальная", "Локальная", "Пример кода"],
          "rows": [
            ["В математических выражениях", "Просто имя (без символов)", "Знак астериск *", "<code>a = b + 1</code> или <code>a = *b + 1</code>"],
            ["В командах и аргументах", "Префикс подчеркивания _", "Знак астериск *", "<code>object.x box _a</code> или <code>object.x box *b</code>"]
          ]
        },
        {
          "type": "grid2",
          "items": [
            {
              "cardTitle": "✅ Правильное чтение в выражениях",
              "cardStyle": "border-color: rgba(16, 185, 129, 0.4);",
              "titleColor": "var(--emerald)",
              "codeTitle": "Только имя без _",
              "code": "b = 10\na = b + 1"
            },
            {
              "cardTitle": "❌ Запрещено использовать _ в выражениях",
              "cardStyle": "border-color: rgba(244, 63, 94, 0.4);",
              "titleColor": "var(--rose)",
              "codeTitle": "Так писать НЕЛЬЗЯ",
              "code": "b = 10\na = _b + 1"
            }
          ]
        },
        {
          "type": "subTitle",
          "title": "3. Особенности и Системные поведение"
        },
        {
          "type": "table",
          "headers": ["Действие", "Запись в коде", "Почему именно так?"],
          "rows": [
            ["Запись Числа 0", "<code>n = 0 + 0</code>", "Запись <code>n = 0</code> автоматически сохранит 0 как СТРОКУ. Чтобы записалось ЧИСЛО, добавьте <code>+ 0</code>"],
            ["Отрицательное число", "<code>n = 10 * -1</code>", "Умножение на -1 переводит число в отрицательное"],
            ["Запись если пусто / 0", "<code>name ??= 100</code>", "Записывает значение 100, только если в <code>name</code> записано 0 или nil (ничего)"],
            ["Вывод в консоль", "<code>n $= \" текст \"</code>", "Выводит содержимое переменной или текст в консоль"]
          ]
        },
        {
          "type": "subTitle",
          "title": "4. Динамические команды из переменных"
        },
        {
          "type": "codeBlock",
          "title": "Вызов команд через подстановку",
          "code": "д = .. new.rect\n_д name 0 0 100 100 12"
        },
        {
          "type": "callout",
          "style": "danger",
          "icon": "⛔",
          "title": "Важное ограничение подстановки",
          "text": "Конструкция <code>_д</code> работает только для вызова команд. Использовать её для создания или перезаписи переменных (например <code>_д = .. text</code>) НЕЛЬЗЯ!"
        }
      ]
    },
    {
      "id": "operators",
      "title": "Математика и Операции",
      "blocks": [
        {
          "type": "callout",
          "style": "purple",
          "icon": "🧮",
          "title": "Правило записи операций",
          "text": "Формула: <code>переменная = значение1 оператор значение2</code><br>Пробелы с обеих сторон оператора ОБЯЗАТЕЛЬНЫ!"
        },
        {
          "type": "table",
          "headers": ["Оператор", "Название", "Описание / Формула"],
          "rows": [
            ["<code>+</code>", "Сложение", "<code>значение1 + значение2</code>"],
            ["<code>-</code>", "Вычитание", "<code>значение1 - значение2</code>"],
            ["<code>*</code>", "Умножение", "<code>значение1 * значение2</code>"],
            ["<code>/</code>", "Деление", "<code>значение1 / значение2</code>"],
            ["<code>//</code>", "Деление без остатка", "Целочисленное деление"],
            ["<code>^</code>", "Возведение в степень", "<code>значение1 ^ значение2</code>"],
            ["<code>%</code>", "Процент", "Вычисление процента"],
            ["<code>%/</code>", "Округление к кратному", "<code>(округлить(значение1 / значение2)) * значение2</code>"],
            ["<code>rand</code>", "Рандом", "Генерация случайного числа"],
            ["<code>~</code>", "Линейная интерполяция", "<code>знач1 + (знач2 - знач1) * 0.1</code>"],
            ["<code>wrap</code>", "Остаток от деления wrap", "<code>зн1 - (зн2 + 1) * округлить(зн1) / ((зн2 + 1)) + 1</code>"],
            ["<code>min</code>", "Минимум", "Выбирает наименьшее значение"],
            ["<code>max</code>", "Максимум", "Выбирает наибольшее значение"],
            ["<code>&gt;|</code>", "Минимум наоборот", "Работает как максимум"],
            ["<code>&lt;|</code>", "Максимум наоборот", "Работает как минимум"],
            ["<code>&lt;</code>", "Сравнение меньше", "Если первое значение меньше второго — установит 1"],
            ["<code>+=</code>", "Прибавление к себе", "<code>n += 10</code> (увеличивает n на 10)"],
            ["<code>??=</code>", "Запись если пусто", "Записывает значение, если переменная равна nil или 0"],
            ["<code>$=</code>", "Вывод в консоль", "Печатает значение в консоль"]
          ]
        }
      ]
    },
    {
      "id": "strings",
      "title": "Работа со строками и Склеивание",
      "blocks": [
        {
          "type": "subTitle",
          "title": "Автосклеивание"
        },
        {
          "type": "codeBlock",
          "title": "Пример автосклеивания",
          "code": "Name = .. text\nN = name name .. text \" строчка \""
        },
        {
          "type": "callout",
          "style": "purple",
          "icon": "🔤",
          "title": "Правила склеивания",
          "text": "• Для привязки первого слова используется <code>.. слово</code>.<br>• Текст в кавычках <code>\" строчка \"</code> склеивается автоматически без символов <code>..</code>.<br>• Переменная N из примера выше станет равна <code>texttexttextстрочка</code>.<br>• Для переноса текста на новую строку используйте <code>/n</code>."
        }
      ]
    },
    {
      "id": "apps",
      "title": "Формат ID приложений HorizonOS",
      "blocks": [
        {
          "type": "callout",
          "style": "warning",
          "icon": "❗️",
          "title": "Важно соблюдать структуру ID",
          "text": "ID приложения обязательно указывается в формате <code>app.ТутЛюбойID.adk</code>. В текущих версиях отсутствие префикса/суффикса не критично, но в следующих обновлениях программы со старым форматом перестанут работать!"
        },
        {
          "type": "codeBlock",
          "title": "Пример корректного ID",
          "code": "app.MyAwesomeGame.adk\n\nsystem create.app myApp app.MyAwesomeGame.adk iconCode mainCode"
        }
      ]
    },
    {
      "id": "app-icons",
      "title": "Формат векторных иконок приложений",
      "blocks": [
        {
          "type": "codeBlock",
          "title": "Структура массива иконки",
          "code": "[\n  [\n    [точки_полигона],\n    [смещение_x, смещение_y, масштаб_x, масштаб_y, прозрачность_0_1, ['system'|'custom', r, g, b]]\n  ]\n]\n\n[\n  [\n    [\"Round.Rect\", скругление_углов],\n    [x, y, ширина, высота, прозрачность_0_1, ['system', r, g, b], поворот]\n  ]\n]"
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
          "title": "Получение параметров объекта в переменную",
          "text": "Специальные операторы Axeon позволяют считывать данные объектов (например, <code>object.x</code>, <code>object.w</code>) прямо в переменные."
        },
        {
          "type": "grid3",
          "items": [
            {
              "badge": { "text": "Запись ==", "class": "badge-axeon" },
              "cardTitle": "Записать в переменную",
              "description": "Считывает свойство и сохраняет в переменную:",
              "codeSample": "varName == object.x myRect"
            },
            {
              "badge": { "text": "Прибавить =+=", "class": "badge-axeon" },
              "cardTitle": "Прибавить к переменной",
              "description": "Считывает свойство и прибавляет к переменной:",
              "codeSample": "varName =+= object.w myRect"
            },
            {
              "badge": { "text": "Склеить =..=", "class": "badge-axeon" },
              "cardTitle": "Присоединить текст",
              "description": "Считывает свойство и добавляет в конец строки:",
              "codeSample": "varName =..= object.x myRect"
            }
          ]
        },
        {
          "type": "codeBlock",
          "title": "Примеры получения значений",
          "code": "pos == object.x myRect\nscore =+= object.w myRect\nlog =..= object.x myRect"
        }
      ]
    },
    {
      "id": "groups-axeon",
      "title": "Управление группами и контейнерами (group.*)",
      "blocks": [
        {
          "type": "callout",
          "style": "purple",
          "icon": "📁",
          "title": "Как работают группы",
          "text": "Группы позволяют объединять объекты и управлять ими одновременно с помощью команд <b>group.СВОЙСТВО</b>."
        },
        {
          "type": "codeBlock",
          "title": "1. Создание и добавление объектов",
          "code": "group.container myGroup 200 200\ngroup.add_object myGroup myBox\ngroup.add_text myGroup myText\ngroup.add_group myGroup subGroup\ngroup.add_teg myGroup myTag"
        },
        {
          "type": "codeBlock",
          "title": "2. Установка параметров",
          "code": "group.x myGroup 100\ngroup.y myGroup 150\ngroup.position myGroup 100 150\ngroup.w myGroup 300\ngroup.h myGroup 400\ngroup.size myGroup 300 400\ngroup.opacity myGroup 80\ngroup.turn myGroup 90"
        },
        {
          "type": "codeBlock",
          "title": "3. Изменение параметров (Относительное)",
          "code": "group.sx myGroup 10\ngroup.sy myGroup -5\ngroup.sw myGroup 20\ngroup.sh myGroup -10\ngroup.sopacity myGroup -15"
        },
        {
          "type": "codeBlock",
          "title": "4. Управление, Видимость и Слои",
          "code": "group.hide myGroup\ngroup.show myGroup\ngroup.delete myGroup\ngroup.layer_above myGroup\ngroup.layer_down myGroup"
        }
      ]
    },
    {
      "id": "object-events",
      "title": "Управление объектами и Касания (object.*)",
      "blocks": [
        {
          "type": "callout",
          "style": "purple",
          "icon": "💡",
          "title": "Как работает управление объектами",
          "text": "Вся графика на экране управляется через команду <b>object.СВОЙСТВО</b>."
        },
        {
          "type": "codeBlock",
          "title": "1. Касания (Touch)",
          "code": "touch.object btn myFunc\ntouch.object btn myFunc()\ntouch.object btn myFunc( n )"
        },
        {
          "type": "codeBlock",
          "title": "2. Установка точных параметров",
          "code": "object.x box 100\nobject.y box 200\nobject.position box 100 200\nobject.w box 150\nobject.h box 80\nobject.size box 100\nobject.opacity box 50\nobject.turn box 45\nobject.rgb box 255 0 0\nobject.hex box #FF0000\nobject.Mx box 2\nobject.My box 2\nobject.anchor_point box 0.5 0.5"
        },
        {
          "type": "codeBlock",
          "title": "3. Изменение параметров (Сдвиг)",
          "code": "object.sx box 10\nobject.sy box -5\nobject.sw box 20\nobject.sh box -10\nobject.ssize box 15\nobject.sopacity box -20"
        },
        {
          "type": "codeBlock",
          "title": "4. Поворот к другому объекту",
          "code": "object.turn_object player enemy"
        },
        {
          "type": "codeBlock",
          "title": "5. Видимость и Удаление",
          "code": "object.hide box\nobject.show box\nobject.delete box"
        },
        {
          "type": "codeBlock",
          "title": "6. Слои (Порядок отображения)",
          "code": "object.layer_above box\nobject.layer_down box"
        },
        {
          "type": "codeBlock",
          "title": "7. Обводка и Рамка объекта (Outline)",
          "code": "object.outline.w box 4\nobject.outline.sw box 2\nobject.outline.rgb box 255 255 0 100"
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
          "code": "for name от до шаг счетчик {\n\n}forend_name\n\nfor n 1 100 1 i {\n    local stepPos = *i * 100\n    object.x box *stepPos\n}forend_n"
        },
        {
          "type": "subTitle",
          "title": "Условие if"
        },
        {
          "type": "codeBlock",
          "title": "Логическое ветвление",
          "code": "if name значение1 =/==/≈/≠/>/</≥/≤ значение2 ( передать_локальную_переменную ) {\n\n}ifend_name\n\nif check *n = 2 ( n ) {\n\n}ifend_check"
        },
        {
          "type": "subTitle",
          "title": "Таймер timer"
        },
        {
          "type": "codeBlock",
          "title": "Интервальный таймер",
          "code": "timer name каждые(сек) сколько_повторов ( передать_локальную_переменную ) {\n\n}timerend_name\n\ntimer myTimer 1 60 ( i ) {\n\n}timerend_myTimer"
        },
        {
          "type": "subTitle",
          "title": "Функции function"
        },
        {
          "type": "codeBlock",
          "title": "Создание и вызов функций",
          "code": "function name ( аргумент ) {\n\n}functend_name\n\nname()\nname( *i )"
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
          "type": "codeBlock",
          "title": "new.sRect",
          "code": "new.sRect name x y шир выс скруг1 скруг2 скруг3 скруг4 количество_точек поворот\n\nnew.sRect name 0 0 100 100 15 15 0 0 100 0"
        },
        {
          "type": "subTitle",
          "title": "Обычный прямоугольник new.rect"
        },
        {
          "type": "codeBlock",
          "title": "new.rect",
          "code": "new.rect name x y шир выс скруг\n\nnew.rect name 0 0 100 100 15"
        },
        {
          "type": "subTitle",
          "title": "Параметры графических объектов"
        },
        {
          "type": "codeBlock",
          "title": "Цвет и Непрозрачность",
          "code": "object.color.rgb name r g b [непрозрачность(0-100)]\nobject.opacity name непрозрачность(0-100)"
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
          "code": "new.text name text x y размер шрифт непрозрачность(0-100)\nnew.text name myText 0 0 36 medium 100\n\nnew.TextWH name text x y размер шрифт непрозрачность ширина высота выравнивание\nnew.TextWH n MyText 0 0 36 medium 100 1000 100 center\n\ntext.change name newText\n\ntext.color.rgb name r g b [непрозрачность(0-100)]\ntext.opacity name непрозрачность(0-100)"
        },
        {
          "type": "subTitle",
          "title": "Многострочное текстовое поле"
        },
        {
          "type": "codeBlock",
          "title": "textField.multiLine",
          "code": "new.textField.multiLine name x y w h шрифт размерТекста ЗаднийТекст\nnew.textField.multiLine name 0 0 250 100 medium 36 Введи_текст\n\ntext.textField.multiLine name text\nfocus.textField.multiLine name\ndisable.keyboard"
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
              "description": "Основной системный шрифт. Доступные варианты: bold, medium, regular."
            },
            {
              "cardTitle": "Comfortaa",
              "description": "Скругленный стиль. Доступные варианты: Comfotiaa bold, Comfotiaa medium, Comfotiaa regular."
            },
            {
              "cardTitle": "Ubuntu",
              "description": "Фирменный шрифт. Доступный вариант: ubuntu."
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
          "type": "table",
          "headers": ["Переменная", "Описание"],
          "rows": [
            ["<code>$system.fps</code>", "Текущий кадровейт (FPS)"],
            ["<code>$system.color.r / .g / .b</code>", "Системный цвет акцентов и кнопок"],
            ["<code>$system.colorText.r / .g / .b</code>", "Системный цвет текста"],
            ["<code>$system.colorBg.r / .g / .b</code>", "Системный цвет фона"],
            ["<code>$system.version.os</code>", "Версия HorizonOS"],
            ["<code>$system.version.ape</code>", "Версия ядра APE"],
            ["<code>$system.version.api</code>", "Версия API движка PGN"],
            ["<code>$system.vesion.pgn</code>", "Версия PGN GRAPHICS"],
            ["<code>$system.version.desing</code>", "Версия темы дизайна"],
            ["<code>$system.version.nameDesing</code>", "Имя системного дизайна"],
            ["<code>$system.width</code> / <code>$system.height</code>", "Ширина и высота экрана"],
            ["<code>$system.topScreen</code> / <code>$system.downScreen</code>", "Верхняя и нижняя границы"],
            ["<code>$system.leftScreen</code> / <code>$system.rightScreen</code>", "Левая и правая границы"],
            ["<code>$system.date1</code>", "Нагрузка системы (0 - 100%)"],
            ["<code>$system.time.sec / min / day / month / yers / wday</code>", "Время и дата (wday — день недели)"]
          ]
        }
      ]
    },
    {
      "id": "system-commands",
      "title": "Системные команды и Уведомления",
      "blocks": [
        {
          "type": "codeBlock",
          "title": "Команды system",
          "code": "background.rgb r g b — меняет цвет фона\nnew.notification ГлавныйТекст Текст Кнопка t — создаёт системное уведомление\nshow.toast текст — показывает всплывающее сообщение\n\nsystem open.app.is.code code — открывает приложение по коду\nsystem save name данные — сохраняет данные\nsystem read.save name переменная — загружает сохранённые данные в переменную\nsystem delete.save name — удаляет сохранённые данные\nsystem notoff.screen — запрещает выключение экрана\nsystem off.screen — разрешает выключение экрана\nsystem create.app name app.id.adk icon code — создаёт приложение с указанными данными"
        }
      ]
    }
  ]
};

window.pgnSystemEnv = {
  "$system.fps": 60,
  "$system.color.r": 0,
  "$system.color.g": 122,
  "$system.color.b": 204,
  "$system.colorText.r": 255,
  "$system.colorText.g": 255,
  "$system.colorText.b": 255,
  "$system.colorBg.r": 20,
  "$system.colorBg.g": 20,
  "$system.colorBg.b": 22,
  "$system.version.os": "3.5.0",
  "$system.version.ape": "2.1.0",
  "$system.version.api": "1.0.4",
  "$system.vesion.pgn": "4.2.0",
  "$system.version.desing": "2.0",
  "$system.version.nameDesing": "Horizon Dark Glass",
  "$system.width": 720,
  "$system.height": 1600,
  "$system.topScreen": 800,
  "$system.downScreen": -800,
  "$system.leftScreen": -360,
  "$system.rightScreen": 360,
  "$system.date1": 12,
  "$system.time.sec": 0,
  "$system.time.min": 0,
  "$system.time.day": 12,
  "$system.time.month": 8,
  "$system.time.yers": 2026,
  "$system.time.wday": 3
};

window.initPgnSuggestions = function(monaco) {
  const suggestionsMap = new Map();

  function addSuggestion(label, kind, detail = '') {
    if (!label || suggestionsMap.has(label)) return;
    suggestionsMap.set(label, {
      label: label,
      kind: kind || monaco.languages.CompletionItemKind.Keyword,
      insertText: label,
      detail: detail
    });
  }

  function extractTokensFromText(text) {
    if (!text) return;
    const clean = text.replace(/<[^>]*>/g, ' ');
    clean.split('\n').forEach(line => {
      const l = line.split('—')[0].trim();
      l.split(/\s+/).forEach(token => {
        token = token.replace(/[\(\),;\{}]/g, '').trim();
        if (!token || token.includes('"')) return;

        if (token.startsWith('$system')) {
          addSuggestion(token, monaco.languages.CompletionItemKind.Variable, 'Системная переменная');
        } else if (token.startsWith('new.') || token.startsWith('object.') || token.startsWith('group.') || token.startsWith('text.') || token.startsWith('touch.') || token.startsWith('focus.') || token.startsWith('disable.') || token.startsWith('system')) {
          addSuggestion(token, monaco.languages.CompletionItemKind.Function, 'Команда PGN');
        } else if (token.startsWith('local') || token.startsWith('for') || token.startsWith('if') || token.startsWith('timer') || token.startsWith('function')) {
          addSuggestion(token, monaco.languages.CompletionItemKind.Keyword, 'Ключевое слово');
        } else if (token.match(/^[a-zA-Z0-9_\$\.\*]+$/) && !token.match(/^-?[0-9]+$/)) {
          addSuggestion(token, monaco.languages.CompletionItemKind.Property, 'Токен');
        }
      });
    });
  }

  Object.keys(window.pgnSystemEnv).forEach(sysKey => {
    addSuggestion(sysKey, monaco.languages.CompletionItemKind.Variable, 'Системная переменная HorizonOS');
  });

  if (window.pgnData && window.pgnData.sections) {
    window.pgnData.sections.forEach(sec => {
      sec.blocks.forEach(b => {
        if (b.text) {
          const matches = b.text.match(/<code>(.*?)<\/code>/g);
          if (matches) {
            matches.forEach(m => extractTokensFromText(m.replace(/<\/?code>/g, '')));
          }
        }
        if (b.code) extractTokensFromText(b.code);
        if (b.codeSample) extractTokensFromText(b.codeSample);
        if (b.rows) {
          b.rows.forEach(r => {
            r.forEach(cell => extractTokensFromText(cell));
          });
        }
        if (b.items) {
          b.items.forEach(it => {
            if (it.code) extractTokensFromText(it.code);
            if (it.codeSample) extractTokensFromText(it.codeSample);
            if (it.description) extractTokensFromText(it.description);
          });
        }
      });
    });
  }

  return Array.from(suggestionsMap.values());
};

window.parsePgnTokens = function(line) {
  const tokens = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
      current += char;
    } else if (char === ' ' && !inQuotes) {
      if (current) tokens.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  if (current) tokens.push(current);
  return tokens;
};

window.executePgnEngine = function(code, ctx, canvas, callbacks) {
  const lines = code.split('\n');
  const now = new Date();
  
  const variables = Object.assign({}, window.pgnSystemEnv, {
    "$system.width": canvas.width,
    "$system.height": canvas.height,
    "$system.topScreen": canvas.height / 2,
    "$system.downScreen": -canvas.height / 2,
    "$system.leftScreen": -canvas.width / 2,
    "$system.rightScreen": canvas.width / 2,
    "$system.time.sec": now.getSeconds(),
    "$system.time.min": now.getMinutes(),
    "$system.time.day": now.getDate(),
    "$system.time.month": now.getMonth() + 1,
    "$system.time.yers": now.getFullYear(),
    "$system.time.wday": now.getDay() || 7
  });

  const objects = {};

  ctx.fillStyle = `rgb(${variables["$system.colorBg.r"]}, ${variables["$system.colorBg.g"]}, ${variables["$system.colorBg.b"]})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  function resolveValue(token) {
    if (token === undefined || token === null) return "";
    let valStr = String(token);
    if (valStr.startsWith('"') && valStr.endsWith('"')) {
      return valStr.slice(1, -1);
    }
    if (valStr.startsWith('_')) {
      const varName = valStr.substring(1);
      return variables[varName] !== undefined ? variables[varName] : valStr;
    }
    if (valStr.startsWith('*')) {
      const varName = valStr.substring(1);
      return variables[varName] !== undefined ? variables[varName] : valStr;
    }
    if (variables[valStr] !== undefined) {
      return variables[valStr];
    }
    if (!isNaN(valStr) && valStr.trim() !== '') {
      return parseFloat(valStr);
    }
    return valStr;
  }

  lines.forEach((line, index) => {
    let trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('//')) return;

    const parts = window.parsePgnTokens(trimmed);
    if (parts.length === 0) return;

    try {
      if (parts.length >= 3 && parts[1] === '$=') {
        const varName = parts[0];
        const printVal = resolveValue(parts[2]);
        if (callbacks && callbacks.log) {
          callbacks.log(`[${varName} $=]: ${printVal}`, 'system');
        }
        return;
      }

      if (parts.length >= 3 && parts[1] === '#=') {
        const varName = parts[0];
        const printVal = resolveValue(parts[2]);
        if (callbacks && callbacks.log) {
          callbacks.log(`[${varName} #=]: ${printVal}`, 'system');
        }
        return;
      }

      const cmd = parts[0];

      if (cmd === 'background.rgb') {
        const r = resolveValue(parts[1]) || 0;
        const g = resolveValue(parts[2]) || 0;
        const b = resolveValue(parts[3]) || 0;
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      else if (cmd === 'new.rect' || cmd === 'new.sRect') {
        const name = parts[1];
        objects[name] = {
          type: 'rect',
          x: parseFloat(resolveValue(parts[2])) || 0,
          y: parseFloat(resolveValue(parts[3])) || 0,
          w: parseFloat(resolveValue(parts[4])) || 100,
          h: parseFloat(resolveValue(parts[5])) || 100,
          r: parseFloat(resolveValue(parts[6])) || 0,
          color: `rgb(${variables["$system.color.r"]}, ${variables["$system.color.g"]}, ${variables["$system.color.b"]})`,
          outlineW: 0,
          outlineColor: 'transparent'
        };
      }
      else if (cmd === 'new.text') {
        const name = parts[1];
        let textVal = resolveValue(parts[2]);
        objects[name] = {
          type: 'text',
          text: String(textVal),
          x: parseFloat(resolveValue(parts[3])) || 0,
          y: parseFloat(resolveValue(parts[4])) || 0,
          size: parseFloat(resolveValue(parts[5])) || 14,
          color: `rgb(${variables["$system.colorText.r"]}, ${variables["$system.colorText.g"]}, ${variables["$system.colorText.b"]})`
        };
      }
      else if (cmd === 'object.color.rgb' || cmd === 'text.color.rgb') {
        const name = parts[1];
        if (objects[name]) {
          const r = resolveValue(parts[2]) || 0;
          const g = resolveValue(parts[3]) || 0;
          const b = resolveValue(parts[4]) || 0;
          objects[name].color = `rgb(${r},${g},${b})`;
        }
      }
      else if (cmd === 'object.outline.rgb') {
        const name = parts[1];
        if (objects[name]) {
          const r = resolveValue(parts[2]) || 0;
          const g = resolveValue(parts[3]) || 0;
          const b = resolveValue(parts[4]) || 0;
          objects[name].outlineColor = `rgb(${r},${g},${b})`;
        }
      }
      else if (cmd === 'object.outline.w') {
        const name = parts[1];
        if (objects[name]) {
          objects[name].outlineW = parseFloat(resolveValue(parts[2])) || 0;
        }
      }
      else if (cmd === 'show.toast') {
        const toastMsg = parts.slice(1).map(p => resolveValue(p)).join(' ');
        if (callbacks && callbacks.toast) {
          callbacks.toast(toastMsg);
        }
      }
      else if (cmd === 'new.notification') {
        const title = resolveValue(parts[1]) || 'Notification';
        const msg = resolveValue(parts[2]) || '';
        if (callbacks && callbacks.toast) {
          callbacks.toast(`${title}: ${msg}`);
        }
      }
      else if (parts.length >= 3 && parts[1] === '=') {
        const varName = parts[0];
        if (parts.length === 3) {
          variables[varName] = resolveValue(parts[2]);
        } else if (parts.length === 5) {
          const v1 = parseFloat(resolveValue(parts[2])) || 0;
          const op = parts[3];
          const v2 = parseFloat(resolveValue(parts[4])) || 0;
          if (op === '+') variables[varName] = v1 + v2;
          else if (op === '-') variables[varName] = v1 - v2;
          else if (op === '*') variables[varName] = v1 * v2;
          else if (op === '/') variables[varName] = v2 !== 0 ? v1 / v2 : 0;
        }
      }
    } catch (e) {
      if (callbacks && callbacks.log) {
        callbacks.log(`[Ошибка ${index + 1}]: ${e.message}`, 'error');
      }
    }
  });

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  Object.values(objects).forEach(obj => {
    const posX = cx + obj.x;
    const posY = cy - obj.y;

    if (obj.type === 'rect') {
      const drawX = posX - obj.w / 2;
      const drawY = posY - obj.h / 2;

      ctx.beginPath();
      ctx.fillStyle = obj.color;
      if (obj.r > 0 && ctx.roundRect) {
        ctx.roundRect(drawX, drawY, obj.w, obj.h, obj.r);
      } else {
        ctx.rect(drawX, drawY, obj.w, obj.h);
      }
      ctx.fill();

      if (obj.outlineW > 0) {
        ctx.lineWidth = obj.outlineW;
        ctx.strokeStyle = obj.outlineColor;
        ctx.stroke();
      }
    } 
    else if (obj.type === 'text') {
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `${obj.size}px 'Inter', sans-serif`;
      ctx.fillStyle = obj.color;
      ctx.fillText(obj.text, posX, posY);
    }
  });

  if (callbacks && callbacks.log) {
    callbacks.log('[Рендер обновлен]', 'system');
  }
};
