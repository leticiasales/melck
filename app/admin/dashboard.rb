# frozen_string_literal: true
ActiveAdmin.register_page "Dashboard" do
  menu priority: 1, label: proc { I18n.t("active_admin.dashboard") }

  content title: proc { I18n.t("active_admin.dashboard") } do
    columns do
      column do
        panel "Motoristas cadastrados" do
          h2 Driver.count
        end
        panel "Origens mais comuns (motoristas)" do
          origins = Driver.group('origin').order(Arel.sql('count(*) desc')).limit(5).pluck(:origin)
          ul do
            origins.each do |origin|
              li origin
            end
          end
        end
        panel "Carroceria mais solicitada" do
          truck_bodies = Truckload.group('truck_body').order(Arel.sql('count(*) desc')).limit(5).pluck(:truck_body)
          ul do
            truck_bodies.each do |truck_body|
              li truck_body
            end
          end
        end
      end
      column do
        panel "Cargas cadastradas" do
          h2 Truckload.count
        end
        panel "Origens mais comuns (cargas)" do
          origins = Truckload.group('origin').order(Arel.sql('count(*) desc')).limit(5).pluck(:origin)
          ul do
            origins.each do |origin|
              li origin
            end
          end
        end
        panel "Destinos mais comuns (cargas)" do
          destinations = Truckload.group('destination').order(Arel.sql('count(*) desc')).limit(5).pluck(:destination)
          ul do
            destinations.each do |destination|
              li destination
            end
          end
        end
      end
    end

    #   column do
    #     panel "Info" do
    #       para "Welcome to ActiveAdmin."
    #     end
    #   end
    # end
  end # content
end
