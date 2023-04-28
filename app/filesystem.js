const fs = require("fs");
const path = require("path");

class Filesystem {
  constructor(directory) {
    this.directory = directory;
    fs.mkdir(directory, () => {});
  }

  set(key, value) {
    const fullPath = path.join(this.directory, key);
    fs.writeFileSync(fullPath, value, { encoding: "utf8" });
  }

  get(key) {
    const filepath = path.join(this.directory, key);
    const fileValue = fs.readFileSync(filepath, { encoding: "utf8" });

    return fileValue;
  }
}

module.exports = Filesystem;
