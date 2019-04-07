class BankAccountsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_bank_account, only: [:show, :edit, :update, :destroy]

  # GET /bank_accounts
  # GET /bank_accounts.json
  def index
    render json: collection, each_serializer: BankAccountSerializer, status: :ok
  end

  # GET /bank_accounts/1
  # GET /bank_accounts/1.json
  def show
    render json: BankAccountSerializer.new(@bank_account)
  end

  # GET /bank_accounts/new
  def new
    @bank_account = BankAccount.new
  end

  # GET /bank_accounts/1/edit
  def edit
  end

  # POST /bank_accounts
  # POST /bank_accounts.json
  def create
    @bank_account = BankAccount.new(bank_account_params)

    if @bank_account.save
      render json: @bank_account, status: :created
    else
      render json: @bank_account.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bank_accounts/1
  # PATCH/PUT /bank_accounts/1.json
  def update
    if @bank_account.update(bank_account_params)
      render json: @bank_account, status: :ok
    else
      render json: @bank_account.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bank_accounts/1
  # DELETE /bank_accounts/1.json
  def destroy
    @bank_account.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_bank_account
    @bank_account = BankAccount.find_by_id(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def bank_account_params
    params.require(:bank_account).permit(:name, :account_number, :routing_number)
  end

  # TODO: only show those for a particular user, perhaps w pundit
  def collection
    @bank_accounts ||= BankAccount.all
  end
end
