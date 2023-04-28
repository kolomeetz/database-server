class Database {
  memoryStore = {};

  constructor(persistanceStore) {
    this.persistanceStore = persistanceStore;
  }

  set(key, value) {
    this.memoryStore[key] = value;
    this.persistanceStore.set(key, value);
  }

  get(key) {
    if (this.memoryStore[key]) {
      return this.memoryStore[key];
    } else {
      const value = this.persistanceStore.get(key);
      this.memoryStore[key] = value;
      return this.memoryStore[key];
    }
  }
}

module.exports = Database;
