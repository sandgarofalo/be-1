import express, { ErrorRequestHandler } from "express";
// Project
import { createUser, readUser, readUsers } from "./dals/users";
import { InputError } from "./types/errors/input-error";
import { isUser } from "./utils/user-utils";

const app = express()
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

app.get("/users/:userId", (req, res) => {
  const userId = Number.parseInt(req.params.userId);

  if (Number.isNaN(userId)) {
    throw new InputError("non-numeric user id parameter passed");
  }

  res.json(readUser(userId));
});

app.get("/users", (_, res) => {
  res.json(readUsers());
});

app.post("/users", (req, res) => {
  const requestBody: unknown = req.body;

  if (!isUser(requestBody)) {
    res.status(400).send("non-standard request body");
  } else {
    createUser(requestBody.id, requestBody.name, requestBody.dob);
    res.status(204);
    res.send();
  }
});

const errorHandler: ErrorRequestHandler = (err, _, res, next) => {
  console.log(err);

  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof InputError) {
    res.status(400).send(err.message);
    return next();
  }

  res.status(500);
  res.render("error", { error: err });
};

app.use(errorHandler);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
