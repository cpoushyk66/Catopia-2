import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostsContainer from "./PostsContainer";
import UserContainer from "./UserContainer";

const SideBarDiv = styled.div`

    position: absolute;
    left: 70%;
    width: 30%;
    height: 100%;
    z-index: 1001;
    overflow-y: auto;

    > select {
        width: 100%;
        text-align: center;
    }

    > p {
        text-align: center;
        font-size: 25px;
    }

    > h1 {
        text-align: center;
    }
    
    > h2 {
        text-align: center;
        text-transform: capitalize;
    }

    > a {
        text-align: center;
        font-size: 30px;
    }
`

export default function SideBar() {

    const [topWhat, setTopWhat] = useState("posts")

    const [topPosts, setTopPosts] = useState([])
    const [topUsers, setTopUsers] = useState([])

    function loadTopItems(topItems, setTopItems) {
        fetch(`/top_${topWhat}/${topItems.length}/${topItems.length + 4}`)
        .then(res => {
            if (res.ok) {
                res.json().then(items => setTopItems([...topItems, ...items]))
            }
        })
    }

    useEffect(() => {
        loadTopItems(topPosts, setTopPosts)
    }, [])

    function renderContent() {

        if (topWhat == "posts") {
            return <PostsContainer posts={topPosts} setPosts={setTopPosts}/>
        }
        else if (topWhat == "users") {
            return <UserContainer users={topUsers} />
        }
    }

    return (
        <SideBarDiv>
            <h1 id="top">Top Hits</h1>
            <select onChange={(e) => setTopWhat(e.target.value)}>
                <option value={"posts"}>Posts</option>
                <option value={"users"}>Users</option>
            </select>
            <h2>Top {topWhat}</h2>
            { renderContent() }
            { topWhat == "posts" ? <p onClick={() => loadTopItems(topPosts, setTopPosts)}>+</p> : null }
            { topWhat == "users" ? <p onClick={() => loadTopItems(topUsers, setTopUsers)}>+</p> : null }
            <a href="#top">▲</a>
            
        </SideBarDiv>
    )
}