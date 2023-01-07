Rails.application.routes.draw do
  resources :post_pictures
  resources :posts
  resources :users, only: [:index, :create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #Session Routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"

  #Post Routes
  get "/top_posts/:range_1/:range_2", to: "posts#top_posts"
end
