class AddUserIdToBankAccounts < ActiveRecord::Migration[5.2]
  def up
    add_column :bank_accounts, :user_id, :integer
    add_index :bank_accounts, :user_id
  end
end
