# Проект: Система регистрации, входа и личного кабинета

## Описание проекта

Данный проект представляет собой веб-приложение с функциями регистрации, входа и управления профилем пользователя. Все данные пользователей сохраняются в локальный файл `db.json`, который используется в качестве базы данных. Серверная часть написана на Node.js с использованием фреймворка **Express**.

---

## Функциональность

### 1. Главная страница
- Выбор действия: регистрация или вход.

### 2. Регистрация
- Поля ввода:
  - Логин
  - Пароль
  - Подтверждение пароля
  - Имя
  - Никнейм
  - Телефон
  - Пол (мужской, женский)
  - Аватар
- Реализовано:
  - Генерация случайного пароля (16 символов).
  - Валидация полей (запрет пробелов, сверка паролей).
  - Сохранение данных пользователя в `db.json`.

### 3. Вход
- Поля ввода:
  - Логин
  - Пароль
- Реализовано:
  - Проверка логина и пароля.
  - Сообщение об ошибке, если логин или пароль неверны.

### 4. Личный кабинет
- Отображение информации о пользователе:
  - Логин
  - Имя
  - Никнейм
  - Телефон
  - Пол
  - Дата регистрации
- Возможность выхода из аккаунта.

---

## Установка и настройка

### Требования
- Node.js версии 14 или выше
- NPM

### Установка
1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/ваш-репозиторий
   cd ваш-репозиторий
