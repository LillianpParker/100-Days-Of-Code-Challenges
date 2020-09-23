class IceCreamsController < ApplicationController
  before_action :set_ice_cream, only: [:show, :update, :destroy]

  # GET /ice_creams
  def index
    @ice_creams = IceCream.all

    render json: @ice_creams
  end

  # GET /ice_creams/1
  def show
    render json: @ice_cream
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ice_cream
      @ice_cream = IceCream.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def ice_cream_params
      params.require(:ice_cream).permit(:name, :description)
    end
end
