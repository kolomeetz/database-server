require "./app/database"

describe Database do
  it { expect(true).to eq true }

  it do
    db = Database.new
    expect(db.get("name")).to eq nil

    db.set("name", "Kostas")
    expect(db.db).to eq({ "name" => "Kostas" })
    expect(db.get("name")).to eq "Kostas"
  end
end
