class TweetsController < ApplicationController

    before_action :move_to_index, except: [:index,:show]

  def index
    @tweets = Tweet.order('created_at DESC').page(params[:page]).per(8)
  end

  def show
    @tweet = Tweet.find(params[:id])
  end

  def new
    @tweet = Tweet.new
  end


  def create
    Tweet.create(tweet_params)
    redirect_to :action => "index"
  end

  def edit
    @tweet = Tweet.find(params[:id])
  end

  def update
    tweet = Tweet.find(params[:id])
    tweet.update(tweet_params) if tweet.user_id == current_user.id
    redirect_to :action => "index"
  end

  def destroy
     tweet = Tweet.find(params[:id])
       if tweet.user_id == current_user.id
          tweet.destroy
       end
  end

private
  def tweet_params
    params.require(:tweet).permit(:title,:text,:image,:map).merge(user_id: current_user.id)
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end
end
