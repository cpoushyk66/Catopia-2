import React from "react";
import styled from "styled-components";

const StyledPost = styled.div`

    text-align: center;

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

    function populatePictures() {
        return post.post_pictures.map(pic => <img src={pic.picture_url}/>)
    }

    return (
        <StyledPost>
            <h1>{post.header}<span> by {post.user.username}</span></h1>
            <p>{post.content}</p>
            {post.post_pictures.length > 0 ? populatePictures() : null}
        </StyledPost>
    )
}