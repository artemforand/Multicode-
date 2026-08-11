window.pgnData = {
  "categories": [
    { "id": "spaces-rule", "title": "⚠️ Пробелы", "isAxeon": false },
    { "id": "vars", "title": "📦 Переменные", "isAxeon": false },
    { "id": "operators", "title": "🧮 Математика и Операции", "isAxeon": false },
    { "id": "strings", "title": "🔤 Строки и Склеивание", "isAxeon": false },
    { "id": "apps", "title": "📱 Приложения и ID", "isAxeon": false },
    { "id": "app-icons", "title": "🎨 Иконки приложений", "isAxeon": false },
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
              "code": "name = <span class=\"num\">10</span> , n = <span class=\"num\">2</span>"
            },
            {
              "cardTitle": "Локальные (Внимание!)",
              "cardStyle": "border-color: rgba(244, 63, 94, 0.4);",
              "titleColor": "var(--rose)",
              "codeTitle": "name — локальная, n — ГЛОБАЛЬНАЯ",
              "code": "<span class=\"kwd\">local</span> name = <span class=\"num\">10</span> , n = <span class=\"num\">2</span>"
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
              "code": "b = <span class=\"num\">10</span>\na = b + <span class=\"num\">1</span>"
            },
            {
              "cardTitle": "❌ Запрещено использовать _ в выражениях",
              "cardStyle": "border-color: rgba(244, 63, 94, 0.4);",
              "titleColor": "var(--rose)",
              "codeTitle": "Так писать НЕЛЬЗЯ",
              "code": "b = <span class=\"num\">10</span>\na = _b + <span class=\"num\">1</span>"
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
          "code": "д = .. new.rect\n_д name <span class=\"num\">0 0 100 100 12</span>"
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
          "code": "Name = .. text\nN = name name .. text <span class=\"str\">\" строчка \"</span>"
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
          "type": "html",
          "html": "<p>Иконки приложений задаются в виде массива векторных полигонов и скругленных прямоугольников.</p>"
        },
        {
          "type": "codeBlock",
          "title": "Структура массива иконки",
          "code": "[\n  [\n    [точки_полигона],\n    [смещение_x, смещение_y, масштаб_x, масштаб_y, прозрачность_0_1, ['system'|'custom', r, g, b]]\n  ]\n]\n\n[\n  [\n    [<span class=\"str\">\"Round.Rect\"</span>, скругление_углов],\n    [x, y, ширина, высота, прозрачность_0_1, [<span class=\"str\">'system'</span>, r, g, b], поворот]\n  ]\n]"
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
          "code": "pos <span class=\"op\">==</span> object.x myRect\nscore <span class=\"op\">=+=</span> object.w myRect\nlog <span class=\"op\">=..=</span> object.x myRect"
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
          "text": "Вся графика на экране управляется через команду <b>object.СВОЙСТВО</b>.<br><br><b>Главные правила:</b><br>• <b>X и Y</b> — позиция на экране (X: влево/вправо, Y: вверх/вниз).<br>• <b>W и H</b> — размеры (W: ширина, H: высота).<br>• <b>Буква S в названии (sx, sy, sw, sh...)</b> — означает <i>Сдвинуть/Изменить</i> текущее значение, а не задать его заново."
        },
        {
          "type": "subTitle",
          "title": "1. Касания (Touch)"
        },
        {
          "type": "codeBlock",
          "title": "Реакция на прикосновение пальца",
          "code": "touch.object btn myFunc\ntouch.object btn myFunc()\ntouch.object btn myFunc( n )"
        },
        {
          "type": "subTitle",
          "title": "2. Установка точных параметров (Задать с нуля)"
        },
        {
          "type": "table",
          "headers": ["Команда", "Что делает (простым языком)", "Пример кода"],
          "rows": [
            ["<code>object.x</code>", "Ставит объект на точную позицию X (по горизонтали)", "<code>object.x box 100</code>"],
            ["<code>object.y</code>", "Ставит объект на точную позицию Y (по вертикали)", "<code>object.y box 200</code>"],
            ["<code>object.position</code>", "Ставит объект сразу по X и Y за одну команду", "<code>object.position box 100 200</code>"],
            ["<code>object.w</code>", "Задает точную ширину объекта", "<code>object.w box 150</code>"],
            ["<code>object.h</code>", "Задает точную высоту объекта", "<code>object.h box 80</code>"],
            ["<code>object.size</code>", "Задает одинаковый размер и ширине, и высоте", "<code>object.size box 100</code>"],
            ["<code>object.opacity</code>", "Прозрачность от 0 (невидимый) до 100 (виден полностью)", "<code>object.opacity box 50</code>"],
            ["<code>object.turn</code>", "Поворачивает объект на указанный угол (в градусах)", "<code>object.turn box 45</code>"],
            ["<code>object.rgb</code>", "Красит объект в цвет (Красный, Зеленый, Синий от 0 до 255)", "<code>object.rgb box 255 0 0</code>"],
            ["<code>object.hex</code>", "Красит объект с помощью HEX-кода цвета", "<code>object.hex box #FF0000</code>"],
            ["<code>object.Mx</code>", "Масштабирует (растягивает) объект по ширине", "<code>object.Mx box 2</code>"],
            ["<code>object.My</code>", "Масштабирует (растягивает) объект по высоте", "<code>object.My box 2</code>"],
            ["<code>object.anchor_point</code>", "Задает точку привязки (центр вращения/растяжения)", "<code>object.anchor_point box 0.5 0.5</code>"]
          ]
        },
        {
          "type": "subTitle",
          "title": "3. Изменение параметров (Буква S = Прибавить / Отнять)"
        },
        {
          "type": "table",
          "headers": ["Команда", "Что делает (простым языком)", "Пример кода"],
          "rows": [
            ["<code>object.sx</code>", "Сдвигает объект по горизонтали на указанное число", "<code>object.sx box 10</code>"],
            ["<code>object.sy</code>", "Сдвигает объект по вертикали на указанное число", "<code>object.sy box -5</code>"],
            ["<code>object.sw</code>", "Изменяет (увеличивает или уменьшает) ширину", "<code>object.sw box 20</code>"],
            ["<code>object.sh</code>", "Изменяет (увеличивает или уменьшает) высоту", "<code>object.sh box -10</code>"],
            ["<code>object.ssize</code>", "Изменяет сразу ширину и высоту на одно число", "<code>object.ssize box 15</code>"],
            ["<code>object.sopacity</code>", "Изменяет текущую прозрачность", "<code>object.sopacity box -20</code>"]
          ]
        },
        {
          "type": "subTitle",
          "title": "4. Поворот к другому объекту"
        },
        {
          "type": "table",
          "headers": ["Команда", "Что делает", "Пример"],
          "rows": [
            ["<code>object.turn_object</code>", "Поворачивает первый объект лицом к второму объекту", "<code>object.turn_object player enemy</code>"]
          ]
        },
        {
          "type": "subTitle",
          "title": "5. Видимость и Удаление"
        },
        {
          "type": "table",
          "headers": ["Команда", "Что делает", "Пример"],
          "rows": [
            ["<code>object.hide</code>", "Прячет объект (становится невидимым)", "<code>object.hide box</code>"],
            ["<code>object.show</code>", "Показывает спрятанный объект обратно", "<code>object.show box</code>"],
            ["<code>object.delete</code>", "Полностью удаляет объект из памяти", "<code>object.delete box</code>"]
          ]
        },
        {
          "type": "subTitle",
          "title": "6. Слои (Кто поверх кого лежит)"
        },
        {
          "type": "table",
          "headers": ["Команда", "Что делает", "Пример"],
          "rows": [
            ["<code>object.layer_above</code>", "Поднимает объект на один слой выше", "<code>object.layer_above box</code>"],
            ["<code>object.layer_down</code>", "Опускает объект на один слой ниже", "<code>object.layer_down box</code>"]
          ]
        },
        {
          "type": "subTitle",
          "title": "7. Обводка и Рамка объекта (Outline)"
        },
        {
          "type": "table",
          "headers": ["Команда", "Что делает", "Пример"],
          "rows": [
            ["<code>object.outline.w</code>", "Задает толщину контура (рамки) вокруг объекта", "<code>object.outline.w box 4</code>"],
            ["<code>object.outline.sw</code>", "Изменяет толщину контура относительно текущей", "<code>object.outline.sw box 2</code>"],
            ["<code>object.outline.rgb</code>", "Задает цвет и прозрачность контура (R, G, B, Alpha)", "<code>object.outline.rgb box 255 255 0 100</code>"]
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
          "code": "<span class=\"kwd\">for</span> name от до шаг счетчик {\n\n}forend_name\n\n<span class=\"kwd\">for</span> n <span class=\"num\">1 100 1</span> i {\n    <span class=\"kwd\">local</span> stepPos = <span class=\"var\">*i</span> * <span class=\"num\">100</span>\n    object.x box <span class=\"var\">*stepPos</span>\n}forend_n"
        },
        {
          "type": "subTitle",
          "title": "Условие if"
        },
        {
          "type": "codeBlock",
          "title": "Логическое ветвление",
          "code": "<span class=\"kwd\">if</span> name значение1 =/==/≈/≠/>/</≥/≤ значение2 ( передать_локальную_переменную ) {\n\n}ifend_name\n\n<span class=\"kwd\">if</span> check <span class=\"var\">*n</span> = <span class=\"num\">2</span> ( n ) {\n\n}ifend_check"
        },
        {
          "type": "subTitle",
          "title": "Таймер timer"
        },
        {
          "type": "codeBlock",
          "title": "Интервальный таймер",
          "code": "<span class=\"kwd\">timer</span> name каждые(сек) сколько_повторов ( передать_локальную_переменную ) {\n\n}timerend_name\n\n<span class=\"kwd\">timer</span> myTimer <span class=\"num\">1 60</span> ( i ) {\n\n}timerend_myTimer"
        },
        {
          "type": "subTitle",
          "title": "Функции function"
        },
        {
          "type": "codeBlock",
          "title": "Создание и вызов функций",
          "code": "<span class=\"kwd\">function</span> name ( аргумент ) {\n\n}functend_name\n\nname()\nname( <span class=\"var\">*i</span> )"
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
          "code": "new.sRect name x y шир выс скруг1 скруг2 скруг3 скруг4 количество_точек поворот\n\nnew.sRect name <span class=\"num\">0 0 100 100 15 15 0 0 100 0</span>"
        },
        {
          "type": "subTitle",
          "title": "Обычный прямоугольник new.rect"
        },
        {
          "type": "codeBlock",
          "title": "new.rect",
          "code": "new.rect name x y шир выс скруг\n\nnew.rect name <span class=\"num\">0 0 100 100 15</span>"
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
          "code": "new.text name text x y размер шрифт непрозрачность(0-100)\nnew.text name myText <span class=\"num\">0 0 36</span> medium <span class=\"num\">100</span>\n\nnew.TextWH name text x y размер шрифт непрозрачность ширина высота выравнивание\nnew.TextWH n MyText <span class=\"num\">0 0 36</span> medium <span class=\"num\">100 1000 100</span> center\n\ntext.change name newText\n\ntext.color.rgb name r g b [непрозрачность(0-100)]\ntext.opacity name непрозрачность(0-100)"
        },
        {
          "type": "subTitle",
          "title": "Многострочное текстовое поле"
        },
        {
          "type": "codeBlock",
          "title": "textField.multiLine",
          "code": "new.textField.multiLine name x y w h шрифт размерТекста ЗаднийТекст\nnew.textField.multiLine name <span class=\"num\">0 0 250 100</span> medium <span class=\"num\">36</span> Введи_текст\n\ntext.textField.multiLine name text\nfocus.textField.multiLine name\ndisable.keyboard"
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
