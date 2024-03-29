ActiveAdmin.register Driver do
    active_admin_import validate: true

  permit_params :name, :phone, :vehicle, :truck_body, :truck_size, :tracker, :origin, :favorite_destination, :observations

  index do
    selectable_column
    id_column
    column :name
    column :phone
    column :vehicle
    column :truck_body
    actions
  end

  show do 
    attributes_table do
      row :name
      row :phone
      row :vehicle
      row :truck_body
      row :truck_size
      row :tracker
      row :origin
      row :favorite_destination
      row :observations
    end
    active_admin_comments
  end

  filter :name
  filter :phone
  filter :vehicle, as: :select, collection: ["Van", "Toco", "Truck", "Bitruck", "Carreta", "Carreta Ls", "Vanderleia", "Bitrem", "3/4"]
  filter :truck_body, as: :select, collection: ["Furgão", "Baú", "Sider", "Grade Baixa", "Graneleiro", "Câmara Fria", "Prancha"]
  filter :truck_size
  filter :tracker, as: :select, collection: ["ONIXSAT", "OMNILINK", "SASCAR", "AUTOTRAC", "JABUR", "SIGHRA", "Não Possui"]
  filter :origin
  filter :favorite_destination
  filter :observations

  form do |f|
    f.inputs do
      f.input :name
      f.input :phone
      f.input :vehicle, as: :select, collection: ["Van", "Toco", "Truck", "Bitruck", "Carreta", "Carreta Ls", "Vanderleia", "Bitrem", "3/4"]
      f.input :truck_body, as: :select, collection: ["Furgão", "Baú", "Sider", "Grade Baixa", "Graneleiro", "Câmara Fria", "Prancha"]
      f.input :truck_size
      f.input :tracker, as: :select, collection: ["ONIXSAT", "OMNILINK", "SASCAR", "AUTOTRAC", "JABUR", "SIGHRA", "Não Possui"]
      f.input :origin
      f.input :favorite_destination
      f.input :observations, :as => :text
    end
    f.actions
  end

end
