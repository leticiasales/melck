class Driver < ApplicationRecord
  before_save :titleize_attributes

  validates :name,
            :vehicle,
            :truck_body,
            :origin,
            :tracker,
            :phone, :presence => true

  validates :phone, :presence => true, :uniqueness => true

  private
    def titleize_attributes
      self.name = self.name.titleize if self.name
      self.origin = self.origin.titleize if self.origin
      self.vehicle = self.vehicle.titleize if self.vehicle
      self.tracker = self.tracker.titleize if self.tracker && self.tracker.split.size > 1
      self.truck_body = self.truck_body.titleize if self.truck_body
      self.truck_size = self.truck_size.titleize if self.truck_size
    end
end
