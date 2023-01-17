import React, { useState } from "react";
import styled from "styled-components";
import PostImageContainer from "./PostImageContainer";

const StyledPost = styled.div`

    text-align: center;

    margin: auto;

    background-color: #0b5a34;

    color: white;
    border: 2px black solid;
    

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

export default function Post({post, updatePost}) {

    function updateLike() {
        if (post.is_liked) {
            fetch(`/likes/${post.id}`, {
                method: "DELETE"
            })
            updatePost({...post, is_liked: false, likes: post.likes - 1})
        }
        else {
            fetch('/likes', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    ...post,
                    is_liked: !post.is_liked,
                    likes: post.is_liked ? (post.likes - 1) : (post.likes + 1)
                })
            })
            .then(res => {
                if (res.ok) {
                    res.json().then(updatePost)
                }
            })
        }
    }


    return (
        <StyledPost>
            <h1>{post.header}<span> by {post.user.username}</span>{post.post_pictures.length > 0 ? <span style={{"fontSize": "15px", "backgroundColor": "#9b9b9b", "borderRadius": "15%", "color": "white"}}>{" " + post.post_pictures.length + "📷"}</span> : null}</h1>
            <p>{post.content}</p>
            {post.post_pictures.length > 0 ? <PostImageContainer pictures={post.post_pictures} /> : null}
            <p onClick={updateLike}>{post.likes} {post.is_liked ? "🧡" : "🤍"}</p>
        </StyledPost>
    )
}