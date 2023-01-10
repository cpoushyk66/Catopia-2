import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../components/App";
import LoginBox from "../components/LoginBox";

const StyledImg = styled.img`

    border-radius: 37.5%;

    &:hover {
        opacity: 50%;
    }

`

export default function ProfilePicture({sideLength}) {

    const userContext = useContext(UserContext)
    const [loginForm, setLoginForm] = useState(false)

    function updateLoginForm() {
        setLoginForm(!loginForm)
    }

    return (
        userContext.user != null ?
        <StyledImg width={`${sideLength} px`} height={`${sideLength} px`} src={userContext.user.image} />
        :
        <div>
            <StyledImg width={`${sideLength} px`} height={`${sideLength} px`} src="https://uploads-ssl.webflow.com/62d99027d024401a75e5a091/6307b14a6dbfb3ffc2163ebf_Purrr.gif" onClick={updateLoginForm}/>
            
            {loginForm ? <LoginBox/> : null}

        </div>
    )
}