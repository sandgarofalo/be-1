import express from "express";

interface User {
  id: number;
  name: string;
  dob: Date;
}

const inMemoryListOfUsers: User[] = [];

const app = express();

app.get("/users", (_, res) => {
  res.json(inMemoryListOfUsers);
});

app.post("/users", (req, res) => {
  if (
    !req.body ||
    !("id" in req.body) ||
    typeof req.body.id !== "number" ||
    !("name" in req.body) ||
    typeof req.body.name !== "string" ||
    !("dob" in req.body) ||
    new Date(req.body.dob) === null
  ) {
    res.status(400);
    res.send("non-standard request body");
  } else {
    const requestBody: User = req.body;
    inMemoryListOfUsers.push(requestBody);
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
