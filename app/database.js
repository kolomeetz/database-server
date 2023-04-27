class Database {
  store = {};

  get(key) {
    return this.store[key];
  }

  set(key, value) {
    this.store[key] = value;
  }
}

module.exports = Database;
