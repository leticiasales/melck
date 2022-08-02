class CreateCities < ActiveRecord::Migration[7.0]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :uf

      t.timestamps
    end

    add_index :cities, [:name, :uf], unique: true
  end
end
