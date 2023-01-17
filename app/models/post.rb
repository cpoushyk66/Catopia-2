class Post < ApplicationRecord

    has_many :post_pictures, dependent: :destroy
    has_many :likes
    belongs_to :user

    def liked? (user)
        !!self.likes.find { |like| like.user_id == user.id}
    end
end
