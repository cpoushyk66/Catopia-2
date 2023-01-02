class PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        render json: Post.all, status: :ok
    end

    def show
        render json: @post, status: :ok
    end

    def create
        post = post.create!(post_params)
        render json: post, status: :created
    end

    def update
        @post.update!(post_params)
        render json: @post, status: :accepted
    end

    def destroy
        @post.destroy
        head :no_content
    end
    
    private

    def set_post
        @post = Post.find(params[:id])
    end

    def post_params
        params.permit(:user_id, :header, :content)
    end

    def render_not_found_response
        render json: {error: "Post not found"}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end
end
