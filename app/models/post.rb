class Post < ApplicationRecord

    has_many :post_pictures, dependent: :destroy
    belongs_to :user
end
