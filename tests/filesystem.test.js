const fs = require("fs");
const path = require("path");

const directory = "./test_data/";

const Filesystem = require("../app/filesystem");

beforeEach(() => {
  fs.mkdirSync(directory);
});

afterEach(() => {
  fs.rmdirSync(directory, { recursive: true });
});

describe("set()", () => {
  test("writes to a file", () => {
    const key = "name";
    const value = "John";

    const filesystem = new Filesystem(directory);
    filesystem.set(key, value);

    const filepath = path.join(directory, key);
    const fileValue = fs.readFileSync(filepath, { encoding: "utf8" });

    expect(fileValue).toBe(value);
  });
});

describe("get()", () => {
  test("reads a file", () => {
    const filesystem = new Filesystem("./tests/fixtures");
    const key = "drummer";
    const valueFromFile = filesystem.get(key);

    expect(valueFromFile).toBe("Ringo\n");
  });
});
