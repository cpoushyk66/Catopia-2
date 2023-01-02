class User < ApplicationRecord
    has_secure_password
    
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :image, presence: true
    validates :display_name, presence: true

    has_many :posts
    
end
