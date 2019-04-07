class BankAccountSerializer < ActiveModel::Serializer
  attributes :name, :account_number, :routing_number
end
