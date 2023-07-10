class Driver < ApplicationRecord
  before_save :titleize_attributes

  validates :name,
            :vehicle,
            :truck_body,
            :presence => true

  validates :phone,
            :presence => true,
            :uniqueness => true,
            :format => { :with => /\A(\+1)?[0-9]*\z/ },
            length: { maximum: 11 }

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
