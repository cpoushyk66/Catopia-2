import React from "react";
import styled from "styled-components";
import Post from "./Post";

const Container = styled.div`

    max-height: 100%;
    overflow-y: auto;
    margin: auto;

`

export default function PostsContainer({posts, setPosts}) {

    function makePosts() {
        let index = 0;
        return posts.map(post => <Post key={"post" + index++} post={post} updatePost={updatePost}/>)
    }

    function updatePost(newPost) {
        setPosts(posts.map(post => {
            if (post.id != newPost.id) {
                return post
            }
            return newPost
        }))
    }

    return (
        <Container>
            {posts != null ? makePosts() : null}
        </Container>
    )
}