import React from "react";
import styled from "styled-components";

const UserSpan = styled.span`



`

export default function UserLinkSpan({username}) {

    return (
        <UserSpan>by {username}</UserSpan>
    )
}