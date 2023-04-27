const express = require("express")
const morgan = require("morgan");

const app = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

const port = 4000;

class Database {
  store = {};

  get(key) {
    return this.store[key];
  }

  set(key, value) {
    this.store[key] = value;
  }
}

const db = new Database();

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

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Database server listening on port ${port}`);
  });
}

module.exports = app;
