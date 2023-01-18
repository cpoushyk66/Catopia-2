class PostSerializer < ActiveModel::Serializer
  attributes :id, :user, :header, :content, :likes, :is_liked

  has_many :post_pictures

  def user
    {
      username: self.object.user.username,
      display_name: self.object.user.display_name
    }
  end

  def likes
    self.object.likes.count
  end

  def is_liked
    Like.where("user_id = ? AND post_id = ?", instance_options[:user_id], self.object.id).length > 0
  end
end
