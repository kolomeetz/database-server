const app = require("./app/app");
const port = 4000;

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Database server listening on port ${port}`);
  });
}

module.exports = app;
