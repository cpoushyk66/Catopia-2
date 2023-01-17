class PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        render json: Post.all, user_id: session[:user_id], status: :ok
    end

    def show
        render json: @post, user_id: session[:user_id], status: :ok
    end

    def create
        post = Post.create!(post_params)
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

    def top_posts
        posts = Post.order(likes: :desc)[(params[:range_1].to_i)..(params[:range_2]).to_i]

        if posts != nil
            render json: posts, status: :ok
        else
            render json: {error: "No more posts available."}, status: :not_found
        end
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
