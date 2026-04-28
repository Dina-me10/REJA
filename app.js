console.log("web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});
//MONGO-call
const db = require("./server").db();
//const db = require("./server").db();
// 1)KIRISH
// 1. Static fayllarni xizmat qilish
app.use(express.static("public"));
// Google Chrome yoki boshqa brauzer so‘rov yuborganda "public" papkasidagi fayllarni ochib beradi

// 2. JSON formatdagi datani objectga aylantirish
app.use(express.json());

// 3. HTML form requestlarini qabul qilish
app.use(express.urlencoded({ extended: true }));

//2) SESSION

//3 BACKENd ichida FRONTEND yasimz VIEWS
app.set("views", "views");
app.set("view engine", "ejs"); //views folder ichidan o`qiydi

//4ROOTERLAR ./
app.post("/create-item", (req, res) => {
  //malumotni ozi bn olib keladi
});
app.get("/author", (req, res) => {
  // Agar "user" malumoti hali o'qilmagan bo'lsa, xato bermasligi uchun tekshiramiz
  if (!user) {
    return res.status(500).send("Database loading... Please refresh.");
  }
  res.render("author", { user: user });
});
app.get("/", function (req, res) {
  res.render("reja");
}); // databasedan malumot olish uchun

module.exports = app;
