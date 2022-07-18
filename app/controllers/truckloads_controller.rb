class TruckloadsController < ApplicationController
  before_action :set_truckload, only: %i[ show update destroy ]

  # GET /truckloads
  def index
    @truckloads = Truckload.all

    render json: @truckloads
  end

  # GET /truckloads/1
  def show
    render json: @truckload
  end

  # POST /truckloads
  def create
    @truckload = Truckload.new(truckload_params)

    if @truckload.save
      render json: @truckload, status: :created, location: @truckload
    else
      render json: @truckload.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /truckloads/1
  def update
    if @truckload.update(truckload_params)
      render json: @truckload
    else
      render json: @truckload.errors, status: :unprocessable_entity
    end
  end

  # DELETE /truckloads/1
  def destroy
    @truckload.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_truckload
      @truckload = Truckload.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def truckload_params
      params.require(:truckload).permit(:truckload, :weight, :origin, :destiny, :company, :charging_time, :delivery_date, :vehicle, :truck_body, :material, :quantity, :total_weight, :price, :need_to_track)
    end
end
