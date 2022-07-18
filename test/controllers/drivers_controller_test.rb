require "test_helper"

class DriversControllerTest < ActionDispatch::IntegrationTest
  setup do
    @driver = drivers(:one)
  end

  test "should get index" do
    get drivers_url, as: :json
    assert_response :success
  end

  test "should create driver" do
    assert_difference("Driver.count") do
      post drivers_url, params: { driver: { favorite_destination: @driver.favorite_destination, name: @driver.name, observations: @driver.observations, origin: @driver.origin, phone: @driver.phone, tracker: @driver.tracker, truck_body: @driver.truck_body, truck_size: @driver.truck_size, vehicle: @driver.vehicle } }, as: :json
    end

    assert_response :created
  end

  test "should show driver" do
    get driver_url(@driver), as: :json
    assert_response :success
  end

  test "should update driver" do
    patch driver_url(@driver), params: { driver: { favorite_destination: @driver.favorite_destination, name: @driver.name, observations: @driver.observations, origin: @driver.origin, phone: @driver.phone, tracker: @driver.tracker, truck_body: @driver.truck_body, truck_size: @driver.truck_size, vehicle: @driver.vehicle } }, as: :json
    assert_response :success
  end

  test "should destroy driver" do
    assert_difference("Driver.count", -1) do
      delete driver_url(@driver), as: :json
    end

    assert_response :no_content
  end
end
