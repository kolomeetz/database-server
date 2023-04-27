const Database = require("../app/database");

describe("Database", () => {
  describe("#get", () => {
    test("returns undefined when key does not exist", () => {
      const db = new Database();
      expect(db.get("foo")).toBeUndefined();
    });
  });

  describe("#set", () => {
    test("stores a key value pair", () => {
      const db = new Database();
      db.set("name", "John");
      expect(db.get("name")).toBe("John");
    });
  });
});
