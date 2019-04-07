class ChangeBankAccountColumnsToBasicNames < ActiveRecord::Migration[5.2]
  def up
    remove_column :bank_accounts, :encrypted_account_number
    remove_column :bank_accounts, :encrypted_account_number_iv
    add_column :bank_accounts, :account_number, :string
    add_column :bank_accounts, :routing_number, :string
  end

  def down
    remove_column :bank_accounts, :account_number
    remove_column :bank_accounts, :routing_number
    add_column :bank_accounts, :encrypted_account_number, :string
    add_column :bank_accounts, :encrypted_account_number_iv, :string
  end
end
