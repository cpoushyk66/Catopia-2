class CreatePostPictures < ActiveRecord::Migration[7.0]
  def change
    create_table :post_pictures do |t|
      t.integer :post_id
      t.string :picture_url

      t.timestamps
    end
  end
end
