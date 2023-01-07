import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostsContainer from "./PostsContainer";

const SideBarDiv = styled.div`

    position: absolute;
    left: 70%;
    height: 100%;
    z-index: 1001;

`

export default function SideBar() {

    const [topPosts, setTopPosts] = useState([])

    function loadTopPosts() {
        console.log("Poof")
        fetch(`/top_posts/${topPosts.length}/${topPosts.length + 4}`)
        .then(res => {
            if (res.ok) {
                res.json().then(posts => setTopPosts([...topPosts, ...posts]))
            }
            else {
                console.log(res)
            }
        })
    }

    useEffect(() => {
        // loadTopPosts()
    }, [])

    return (
        <SideBarDiv>
            <div style={{"width": "50%"}} onClick={loadTopPosts}>Push this button herrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrre</div>
            <PostsContainer posts={topPosts} />
        </SideBarDiv>
    )
}