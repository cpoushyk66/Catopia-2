import React from "react";
import styled from "styled-components";
import Post from "./Post";

const Container = styled.div`

    height: 100%;
    margin: auto;

`

export default function PostsContainer({posts}) {

    function makePosts() {
        let index = 0;
        return posts.map(post => <Post key={"post" + index++} post={post} />)
    }

    return (
        <Container>
            {posts != null ? makePosts() : null}
        </Container>
    )
}