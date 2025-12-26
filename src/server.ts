import express from "express";

const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send('<p style="background: red">hello world</p>');
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
