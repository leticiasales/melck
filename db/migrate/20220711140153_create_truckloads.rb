class CreateTruckloads < ActiveRecord::Migration[7.0]
  def change
    create_table :truckloads do |t|
      t.string :truckload
      t.float :weight
      t.string :origin
      t.string :destiny
      t.string :company
      t.time :charging_time
      t.date :delivery_date
      t.string :vehicle
      t.string :truck_body
      t.string :material
      t.integer :quantity
      t.float :total_weight
      t.string :price
      t.binary :need_to_track

      t.timestamps
    end
  end
end
