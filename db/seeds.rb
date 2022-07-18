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