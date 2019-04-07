class CreateBankAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :bank_accounts do |t|
      t.string :name
      t.string :encrypted_account_number
      t.string :encrypted_account_number_iv

      t.timestamps
    end
    add_index :bank_accounts, :encrypted_account_number_iv, unique: true
  end
end
