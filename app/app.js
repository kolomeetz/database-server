const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

const dataDirectory = "./data";

const Database = require("./database");
const Filesystem = require("./filesystem");
const persistanceStore = new Filesystem(dataDirectory);

const db = new Database(persistanceStore);

app.get("/set", (req, res) => {
  Object.keys(req.query).forEach((key) => {
    db.set(key, req.query[key]);
  });

  res.status(201).send("OK");
});

app.get("/get", (req, res) => {
  const { key } = req.query;
  const value = db.get(key);
  res.send(value);
});

module.exports = app;
