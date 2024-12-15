const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const dbPath = path.join(__dirname, "db.json");

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Папка для ваших HTML и JS файлов

// Получение данных всех пользователей
app.get("/users", (req, res) => {
  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Ошибка чтения базы данных");
    }
    const db = JSON.parse(data);
    res.json(db.users || []);
  });
});

// Регистрация нового пользователя
app.post("/register", (req, res) => {
  const newUser = req.body;

  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Ошибка чтения базы данных");
    }

    const db = JSON.parse(data);
    if (db.users.some(user => user.login === newUser.login)) {
      return res.status(400).send("Пользователь с таким логином уже существует");
    }

    db.users.push(newUser);

    fs.writeFile(dbPath, JSON.stringify(db, null, 2), "utf8", (writeErr) => {
      if (writeErr) {
        return res.status(500).send("Ошибка сохранения данных");
      }
      res.status(201).send("Регистрация успешна");
    });
  });
});

// Авторизация пользователя
app.post("/login", (req, res) => {
  const { login, password } = req.body;

  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Ошибка чтения базы данных");
    }

    const db = JSON.parse(data);
    const user = db.users.find(user => user.login === login);

    if (!user || user.password !== password) {
      return res.status(401).send("Неверный логин и/или пароль");
    }

    res.json(user);
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
