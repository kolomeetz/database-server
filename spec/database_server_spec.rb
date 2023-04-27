require "rspec"
require "rack/test"
require "./app/database_server"

def app
  DatabaseServer
end

describe "server e2e test" do
  include Rack::Test::Methods

  it { expect(true).to eq true }

  describe "GET /set" do
    it "returns HTTP status 201" do
      get "/set", { key: "value" }

      expect(last_response.status).to eq 201
      expect(last_response.body).to eq("OK")
    end
  end

  describe "GET /get" do
    it "returns HTTP status 200" do
      get "/get", { key: "key_name" }

      expect(last_response.status).to eq 200
    end
  end

  it "returns the value of the key" do
    get "/set", { name: "Kostas" }

    get "/get", { key: "name" }
    expect(last_response.body).to eq("Kostas")
  end
end
