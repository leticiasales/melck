ActiveAdmin.register Truckload do
  permit_params :title, :weight, :origin, :destination, :company, :charging_time, :delivery_date, :vehicle, :truck_body, :material, :quantity, :total_weight, :price, :need_to_track

  index do
    selectable_column
    id_column
    column :title
    column :origin
    column :destination
    column :material
    column :total_weight
    actions
  end

  show do
    attributes_table do
      row :id
      row :title
      row :weight
      row :origin
      row :destination
      row :company
      row :charging_time
      row :delivery_date
      row :vehicle
      row :truck_body
      row :material
      row :quantity
      row :total_weight
      row :price do |t|
        number_to_currency t.price
      end
      row :need_to_track
    end
  end

  filter :title
  filter :weight
  filter :origin
  filter :destination
  filter :company
  filter :charging_time
  filter :delivery_date
  filter :vehicle, as: :select, collection: ["Van", "Toco", "Truck", "Bitruck", "Carreta", "Carreta Ls", "Vanderleia", "Bitrem", "3/4"]
  filter :truck_body, as: :select, collection: ["Furgão", "Baú", "Sider", "Grade Baixa", "Graneleiro", "Camada Fria", "Prancha"]
  filter :material
  filter :quantity
  filter :total_weight
  filter :price
  filter :need_to_track

  form do |f|
    f.inputs do
      f.input :title
      f.input :weight
      f.input :origin
      f.input :destination
      f.input :company
      f.input :charging_time, :as => :time_picker
      f.input :delivery_date, :as => :date_picker
      f.input :vehicle, as: :select, collection: ["Van", "Toco", "Truck", "Bitruck", "Carreta", "Carreta Ls", "Vanderleia", "Bitrem", "3/4"]
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
