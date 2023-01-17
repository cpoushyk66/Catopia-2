class LikesController < ApplicationController
    before_action :set_like, only: [:show, :update, :destroy]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        render json: Like.all, status: :ok
    end

    def show
        render json: @like, status: :ok
    end

    def create
        if (Like.where("user_id = ? AND post_id = ?", like_params[:user_id].to_i, like_params[:post_id].to_i).length == 0)
            like = Like.create!(like_params)
            render json: like, status: :created
        else 
            render json: {error: "Like already created"}, status: :unprocessable_entity
        end
    end

    def update
        @like.update!(like_params)
        render json: @like, status: :accepted
    end

    def destroy
        @like.destroy
        head :no_content
    end
    
    private

    def set_like
        @like = Like.find("user_id = ? AND post_id = ?", session[:user_id], params[:id])
    end

    def like_params
        params.permit(:user_id, :post_id)
    end

    def render_not_found_response
        render json: {error: "Like not found"}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end
end
