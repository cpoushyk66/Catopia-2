import React from "react";
import Post from "./Post";

export default function PostsContainer({posts}) {

    function makePosts() {
        return posts.map(post => <Post post={post} />)
    }

    return (
        <div>
            {posts != null ? makePosts() : null}
        </div>
    )
}