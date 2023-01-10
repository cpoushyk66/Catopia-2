import React from "react";
import styled from "styled-components";

const StyledUser = styled.div`

    border-top: grey 1px ridge;
    border-bottom: grey 1px ridge;
    margin: auto;
    width: 100%;

    &:hover {
        opacity: 50%;
    }

    > img {
        width: 10%;
        float: left;
    }

    > span {
        float: left;
        width: 90%;
    }

    > span {
        text-align: center;
    }

    > p {
        width: 100%;
        overflow-x: scroll;
    }

    

`

export default function User({user}) {

    return (
        <StyledUser>
            <img src={user.image}/>
            <span>{user.display_name} | {user.followed_count} followers | {user.post_total} posts</span>
            <p>{"eih psrgjpsrgh pshgr psjg rps jgpsrjg psjrg psjrg psjrgp rjgpsir jgpsrjgpisrjgpirsjgpirsgrj poijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"}</p>
        </StyledUser>
    )
}