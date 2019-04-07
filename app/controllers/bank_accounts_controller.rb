class BankAccountsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: collection, each_serializer: BankAccountSerializer, status: :ok
  end

  private

  # TODO: only show those for a particular user, perhaps w pundit
  def collection
    @bank_accounts ||= BankAccount.all
  end
end
