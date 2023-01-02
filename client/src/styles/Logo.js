import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export function Logo({sideLength}) {

    const navigate = useNavigate()

    return (
        <img src="../assets/images/Hotpot2.png" width={`${sideLength} px`} height={`${sideLength} px`} onClick={navigate("/")}/>
    )
}