require 'csv'

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

csv_text = File.read(Rails.root.join('lib', 'seeds', 'motoristas.csv'))
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  d = Driver.new
  d.name = row["NOME"]
  d.phone = row["TELEFONE"]
  d.vehicle = row["VEICULO"]
  d.truck_body = row["CARROCERIA"]
  d.truck_size = row["TAMANHO"]
  d.tracker = row["RASTREADOR"]
  d.origin = row["CIDADE DE ORIGEM"]
  d.favorite_destination = row["ROTAS QUE TRABALHA"]
  d.save
  puts "#{d.name} saved"
end

puts "There are now #{Driver.count} rows in the drivers table"

if Rails.env.development?
  csv_text = File.read(Rails.root.join('lib', 'seeds', 'cargas.csv'))
  csv = CSV.parse(csv_text, :headers => true)
  csv.each do |row|
    d = Truckload.new
    d.title = row[0]
    d.weight = row["Peso"]
    d.origin = row["Origem"]
    d.destination = row["Destino"]
    d.company = row["Empresa"]
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