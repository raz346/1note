class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :password_digest, null: true
      t.string :session_token, null: false, unique: true

      t.timestamps null: false
    end
    add_index :users, :email
    add_index :users, :session_token
  end
end