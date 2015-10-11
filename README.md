# MEAN TODO Application

Что будем использовать в работе:
* Angular.js
* Node.js
* Mongodb
* Express
* Bootstrap
* Sass
* Gulp
* Bower
* Git

Функционал приложения на **начальном этапе:**
* CRUD операции с задачами
* Выполнение задачи с меткой времени

Функционал на будущее:
* Авторизация, регистрация
* Создание листов с задачами
* Установка даты выполнения и напоминания
* Метки для задач
* Степень важности

## Структура папок

```
|-app Express framework
|-public/
    |-app/
        |-assets/ Статичные файлы
            |- css
            |- img
            |- js
            |- views Отдельные страницы приложения
            |- vendor Пакеты из Bower
            app.js Файл приложения
            index.html Главный layout
    |- development Основная директория frontend разработки
        |- controllers
        |- sass
        |- services
        |- veiws
        app.js
        index.html
        routes.js Routes приложения
    bower.json
    gulpfile.js
|-package.json
|-README.md
```

## Структура уроков
* Урок 1: Установка gulp, bower, sass развертывание приложения.
* Урок 2: Настройка gulp, начало верстки приложения
* Урок 3: Завершение верстки на **Boostrap** 3
* ...