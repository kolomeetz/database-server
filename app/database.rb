class Database
  attr_accessor :db

  def initialize
    @db = {}
  end

  def set(key, value)
    db[key] = value
  end

  def get(key)
    db.fetch(key, nil)
  end
end
