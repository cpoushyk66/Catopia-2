class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image, :display_name
end
