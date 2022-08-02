Rails.application.routes.draw do
  resources :cities
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  scope :api do
    resources :cities
    resources :drivers
    resources :truckloads
  end
end
