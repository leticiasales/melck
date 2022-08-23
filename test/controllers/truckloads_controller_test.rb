require "test_helper"

class TruckloadsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @truckload = truckloads(:one)
  end

  test "should get index" do
    get truckloads_url, as: :json
    assert_response :success
  end

  test "should create truckload" do
    assert_difference("Truckload.count") do
      post truckloads_url, params: { truckload: { charging_date: @truckload.charging_date, charging_time: @truckload.charging_time, company: @truckload.company, delivery_date: @truckload.delivery_date, destiny: @truckload.destiny, material: @truckload.material, need_to_track: @truckload.need_to_track, origin: @truckload.origin, price: @truckload.price, quantity: @truckload.quantity, total_weight: @truckload.total_weight, truck_body: @truckload.truck_body, truckload: @truckload.truckload, vehicle: @truckload.vehicle, weight: @truckload.weight } }, as: :json
    end

    assert_response :created
  end

  test "should show truckload" do
    get truckload_url(@truckload), as: :json
    assert_response :success
  end

  test "should update truckload" do
    patch truckload_url(@truckload), params: { truckload: { charging_date: @truckload.charging_date, charging_time: @truckload.charging_time, company: @truckload.company, delivery_date: @truckload.delivery_date, destiny: @truckload.destiny, material: @truckload.material, need_to_track: @truckload.need_to_track, origin: @truckload.origin, price: @truckload.price, quantity: @truckload.quantity, total_weight: @truckload.total_weight, truck_body: @truckload.truck_body, truckload: @truckload.truckload, vehicle: @truckload.vehicle, weight: @truckload.weight } }, as: :json
    assert_response :success
  end

  test "should destroy truckload" do
    assert_difference("Truckload.count", -1) do
      delete truckload_url(@truckload), as: :json
    end

    assert_response :no_content
  end
end
