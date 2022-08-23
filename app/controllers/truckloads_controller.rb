class TruckloadsController < ApplicationController
  before_action :set_truckload, only: %i[ show update destroy ]

  # GET /truckloads
  def index
    @truckloads = Truckload.where(nil)

    filtering_params(params).each do |key, value|
      @truckloads = @truckloads.public_send("filter_by_#{key}", value) if value.present?
    end

    @truckloads = @truckloads.page(params[:page]).order('created_at DESC')

    render json: {
      truckloads: @truckloads,
      page: @truckloads.current_page,
      totalPages: @truckloads.total_pages
    }
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
      params.require(:truckload).permit(:title, :weight, :origin, :destination, :company, :charging_date, :charging_time, :delivery_date, :vehicle, :truck_body, :material, :quantity, :total_weight, :price, :need_to_track)
    end

    # A list of the param names that can be used for filtering the Truckload list
    def filtering_params(params)
      params.slice(:origin, :destination, :vehicle)
  end
end
