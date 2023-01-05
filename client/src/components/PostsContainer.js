import React from "react";
import Post from "./Post";

export default function PostsContainer({posts}) {

    function makePosts() {
        let index = 0;
        return posts.map(post => <Post key={"post" + index++} post={post} />)
    }

    return (
        <div>
            {posts != null ? makePosts() : null}
        </div>
    )
}