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
const mongodb = require("mongodb");

// 1)KIRISH
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

//4ROOTERLAR ./
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    },
  );
});

app.post("/edit-item", async (req, res) => {
  const data = req.body;
  console.log(data);

  try {
    await db
      .collection("plans")
      .findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input } },
      );

    res.json({ state: "success" });
  } catch (err) {
    console.log("Xatolik yuz berdi:", err);
    res.status(500).json({ state: "error", message: "Serverda xatolik" });
  }
});

app.get("/author", (req, res) => {
  if (!user) {
    return res.status(500).send("Database loading... Please refresh.");
  }
  res.render("author", { user: user });
});

// Xatolik to'g'rilangan qism: deleteMany ichiga {} va callback funksiya to'g'ri yozildi
app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany({}, (err, data) => {
      res.json({ state: "hamma rejalar o'chirildi" });
    });
  }
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
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
