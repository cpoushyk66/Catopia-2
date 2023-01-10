class FollowerLink < ApplicationRecord

    belongs_to :follower, class_name: "User", foreign_key: :follower_id
    belongs_to :followee, class_name: "User", foreign_key: :followed_id
end
