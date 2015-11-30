class WelcomeController < ApplicationController
  require 'gingerice'

  def index
  end

  def grammar
    parser = Gingerice::Parser.new
    result = parser.parse params[:story]
    render :json => result
  end
end
