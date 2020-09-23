class AddIceCreamIdToPints < ActiveRecord::Migration[6.0]
  def change
    add_column :ice_creams, :pints, :integer
  end
end
