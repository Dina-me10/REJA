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
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");
//4ROOTERLAR ./
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      res.end("successfully added");
    }
  });
});

app.get("/author", (req, res) => {
  // Agar "user" malumoti hali o'qilmagan bo'lsa, xato bermasligi uchun tekshiramiz
  if (!user) {
    return res.status(500).send("Database loading... Please refresh.");
  }
  res.render("author", { user: user });
});
app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
}); // databasedan malumot olish uchun

module.exports = app;
