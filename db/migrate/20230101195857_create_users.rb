class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :image
      t.string :display_name

      t.timestamps
    end
  end
end
