require "sinatra/base"

require "./app/database"

class DatabaseServer < Sinatra::Base
  configure { @@database = Database.new }

  get "/set" do
    pp params.to_a

    params.to_a { |key, value| @@database.set(key, value) }

    pp @@database.db
    [201, @@database.db.to_s]
    # [201, params.keys.first.class.to_s]
  end

  get "/get" do
    pp @@database.db

    value = @@database.get(params["key"])

    [200, value]
  end

  get "*" do
    [404, "Not Found"]
  end
end
