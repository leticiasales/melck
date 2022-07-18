class CreateDrivers < ActiveRecord::Migration[7.0]
  def change
    create_table :drivers do |t|
      t.string :name
      t.string :phone
      t.string :vehicle
      t.string :truck_body
      t.string :truck_size
      t.string :tracker
      t.string :origin
      t.string :favorite_destination
      t.string :observations

      t.timestamps
    end
  end
end
