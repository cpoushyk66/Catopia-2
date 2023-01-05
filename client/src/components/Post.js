import React from "react";
import styled from "styled-components";
import PostImageContainer from "./PostImageContainer";

const StyledPost = styled.div`

    text-align: center;

    margin: auto;

    background-color: purple;
    
    border-radius: 15px;

    > img {
        max-width: 33%;
        float: left;
        text-align: center;
    }

    > h1 {

        > span {
            font-size: 20px;
        }
    }

`

export default function Post({post}) {

    return (
        <StyledPost>
            <h1>{post.header}<span> by {post.user.username}</span>{post.post_pictures.length > 0 ? <span style={{"fontSize": "15px", "backgroundColor": "#9b9b9b", "borderRadius": "15%", "color": "white"}}>{" " + post.post_pictures.length + "📷"}</span> : null}</h1>
            <p>{post.content}</p>
            {post.post_pictures.length > 0 ? <PostImageContainer pictures={post.post_pictures} /> : null}
        </StyledPost>
    )
}