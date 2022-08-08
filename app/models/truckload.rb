class Truckload < ApplicationRecord
  before_save :titleize_attributes
  validates :title,
            :origin,
            :destination,
            :charging_time,
            :delivery_date,
            :vehicle,
            :truck_body, :presence => true

  private
    def titleize_attributes
      self.title = self.title.titleize if self.title
      self.company = self.company.titleize if self.company
      self.material = self.material.titleize if self.material
      self.vehicle = self.vehicle.titleize if self.vehicle
      self.truck_body = self.truck_body.titleize if self.truck_body
    end
end
