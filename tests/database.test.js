const Database = require("../app/database");

class PersistanceMock {
  get() {}

  set() {}
}

function databaseFactory() {
  return new Database(new PersistanceMock());
}

describe("Database", () => {
  describe("#get", () => {
    test("returns undefined when key does not exist", () => {
      const db = databaseFactory();
      expect(db.get("foo")).toBeUndefined();
    });
  });

  describe("#set", () => {
    test("stores a key value pair", () => {
      const db = databaseFactory();
      db.set("name", "John");
      expect(db.get("name")).toBe("John");
    });
  });
});
