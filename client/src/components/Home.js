import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostsContainer from "./PostsContainer";

const StyledHome = styled.div`

    width: 60%;
    left: 10%;
    height: 100%;
    position: absolute;

`
export default function Home() {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch("/posts")
        .then(res => {
            if (res.ok) {
                res.json().then(setPosts)
            }
        })
    }, [])

    return (
        <StyledHome>
            <PostsContainer posts={posts} />
        </StyledHome>
    )
}