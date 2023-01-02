class PostSerializer < ActiveModel::Serializer
  attributes :user, :header, :content

  has_many :post_pictures

  def user
    {
      username: self.object.user.username,
      display_name: self.object.user.display_name
    }
    
  end
end
