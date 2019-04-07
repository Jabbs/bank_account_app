class BankAccountSerializer < ActiveModel::Serializer
  attributes :name, :encrypted_account_number
end
