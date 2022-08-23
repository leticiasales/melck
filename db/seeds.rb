require 'csv'
require 'rest-client'

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

cities = RestClient.get(ENV["IBGE_CIDADES"])
cities_array = JSON.parse(cities)
cities_array.each do |c|
  City.create!(name: c["municipio-nome"], uf: c["UF-sigla"])
  puts "Created #{c["municipio-nome"]} - #{c["UF-sigla"]}"
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'motoristas.csv'))
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  city = City.where('lower(name) = ?', row["CIDADE DE ORIGEM"]&.downcase).first

  d = Driver.new
  d.name = row["NOME"]
  d.phone = row["TELEFONE"]
  d.vehicle = row["VEICULO"]
  d.truck_body = row["CARROCERIA"]
  d.truck_size = row["TAMANHO"]
  d.tracker = row["RASTREADOR"] || "Não Possui"
  d.origin = city ? "#{city.name} - #{city.uf}" : row["CIDADE DE ORIGEM"]
  d.favorite_destination = row["ROTAS QUE TRABALHA"]
  d.save
  puts "#{d.name} saved"
end

puts "There are now #{Driver.count} rows in the drivers table"

if Rails.env.development?
  csv_text = File.read(Rails.root.join('lib', 'seeds', 'cargas.csv'))
  csv = CSV.parse(csv_text, :headers => true)
  csv.each do |row|
    orig = City.where('lower(name) = ?', row["Origem"]&.downcase).first
    dest = City.where('lower(name) = ?', row["Destino"]&.downcase).first

    d = Truckload.new
    d.title = row[0]
    d.weight = row["Peso"]
    d.origin = orig ? "#{orig.name} - #{orig.uf}" : row["Origem"]
    d.destination = dest ? "#{dest.name} - #{dest.uf}" : row["Destino"]
    d.company = row["Empresa"]
    d.charging_date = row["Data carregamento"]
    d.charging_time = row["Hora carregamento"]
    d.delivery_date = row["Data de entrega"]
    d.vehicle = row["Veículo"]
    d.truck_body = row["Carroceria"]
    d.material = row["Material"]
    d.quantity = row["Quantidade"]
    d.total_weight = row["Peso Total"]
    d.price = row["Valor"]
    d.need_to_track = (row["Rastreador"] != "Não")
    d.save
    puts "#{d.title} saved"
  end

  puts "There are now #{Truckload.count} rows in the drivers table"
end