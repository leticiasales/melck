ActiveAdmin.register Truckload do
  permit_params :truckload, :weight, :origin, :destiny, :company, :charging_time, :delivery_date, :vehicle, :truck_body, :material, :quantity, :total_weight, :price, :need_to_track

  index do
    selectable_column
    id_column
    column :truckload
    column :weight
    column :origin
    column :destiny
    column :company
    column :charging_time
    column :delivery_date
    column :vehicle
    column :truck_body
    column :material
    column :quantity
    column :total_weight
    column :price do |t|
      number_to_currency t.price
    end
    column :need_to_track
    actions
  end

  filter :truckload
  filter :weight
  filter :origin
  filter :destiny
  filter :company
  filter :charging_time
  filter :delivery_date
  filter :vehicle, as: :select, collection: ["Van", "Toco", "Truck", "Bitruck", "Carreta", "Carreta Ls", "Vanderleia", "Bitrem"]
  filter :truck_body, as: :select, collection: ["Furgão", "Baú", "Sider", "Grade Baixa", "Graneleiro", "Camada Fria", "Prancha"]
  filter :material
  filter :quantity
  filter :total_weight
  filter :price
  filter :need_to_track

  form do |f|
    f.inputs do
      f.input :truckload
      f.input :weight
      f.input :origin
      f.input :destiny
      f.input :company
      f.input :charging_time, :as => :time_picker
      f.input :delivery_date, :as => :date_picker
      f.input :vehicle, as: :select, collection: ["Van", "Toco", "Truck", "Bitruck", "Carreta", "Carreta Ls", "Vanderleia", "Bitrem"]
      f.input :truck_body, as: :select, collection: ["Furgão", "Baú", "Sider", "Grade Baixa", "Graneleiro", "Camada Fria", "Prancha"]
      f.input :material
      f.input :quantity
      f.input :total_weight
      f.input :price
      f.input :need_to_track, :as => :boolean
    end
    f.actions
  end

end
