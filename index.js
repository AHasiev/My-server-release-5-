const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(["One", "Two", "Tree"]);
});

app.post("/users", (req, res) => {
  res.send("юзер добавлен");
});

app.delete("/users/:id", (req, res) => {
  res.send("юзер с ID :id удален");
});

app.patch("/users/:id", (req, res) => {
  res.send("юзер с ID :id изменен");
});

app.get("/admin", (req, res) => {
  res.send("не хватает прав доступа");
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}");
});
