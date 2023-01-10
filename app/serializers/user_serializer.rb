class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image, :display_name, :followed_count, :post_total

  def followed_count
    self.object.followed.count
  end

  def post_total
    self.object.posts.count
  end
end
