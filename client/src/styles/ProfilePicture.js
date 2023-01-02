import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../components/App";

export function ProfilePicture({sideLength}) {

    const userContext = useContext(UserContext)

    return (
        <img width={`${sideLength} px`} height={`${sideLength} px`} src={userContext.user.image} />
    )
}