class WelcomeController < ApplicationController
  require 'gingerice'

  def index
  end

  def grammar
    parser = Gingerice::Parser.new
    logger.info 'this is the params'
    logger.info 'this is the params'
    logger.info 'this is the params'
    logger.info 'this is the params:'
    logger.info params[:story]
    result = parser.parse params[:story]
    logger.info 'RESULT'
    logger.info 'RESULT'
    logger.info 'RESULT'
    logger.info 'RESULT'
    logger.info result

    render :json => result
  end
end
