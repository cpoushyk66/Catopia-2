class User < ApplicationRecord
    has_secure_password
    
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :image, presence: true
    validates :display_name, presence: true

    has_many :posts

    has_many :followers, class_name: "FollowerLink", foreign_key: :follower_id
    has_many :followed, class_name: "FollowerLink", foreign_key: :followed_id
    

    def self.top_users
        User.all.sort_by { |user| -user.followed.count }
    end
    
end
