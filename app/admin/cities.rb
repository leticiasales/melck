ActiveAdmin.register City do
  config.sort_order = 'name_asc'
  permit_params :name, :uf

  index do
    selectable_column
    id_column
    column :name
    column :uf
    actions
  end

  filter :name
  filter :uf, as: :select, collection: proc { City.unscoped.order(uf: :asc).pluck(:uf).uniq }

  form do |f|
    f.inputs do
      f.input :name
      f.input :uf
    end
    f.actions
  end

end
