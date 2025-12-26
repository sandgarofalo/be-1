import express from "express";
import data from "../static/users.json";

const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send({ name: "testuser" });
});

app.get("/users", (req, res) => {
  res.send(data);
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
