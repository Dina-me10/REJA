console.log("web serverni boshlash");
const express = require("express");
const res = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});

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
  res.render("author", { user: user });
});
app.get("/", function (req, res) {
  res.render("harid");
}); // databasedan malumot olish uchun

const server = http.createServer(app); //CORE MODULE
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`server  is running succcesfully ${PORT}`);
});
