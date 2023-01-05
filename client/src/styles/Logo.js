import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoImg = styled.img`

    &:hover {
        opacity: 50%;
    }

`

export function Logo({sideLength}) {

    const navigation = useNavigate()

    return (
        <LogoImg src="../assets/images/Hotpot2.png" width={`${sideLength} px`} height={`${sideLength} px`} onClick={() => navigation("/")}/>
    )
}