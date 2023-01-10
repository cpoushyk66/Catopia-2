import React from "react";
import styled from "styled-components";
import { Logo } from "../styles/Logo";
import ProfilePicture from "../styles/ProfilePicture";

const StyledNavbar = styled.div`
    height: 100%;
    background: rgb(81,170,93);
    background: linear-gradient(90deg, rgba(81,170,93,1) 90%, rgba(0,173,46,1) 95%, rgba(2,0,36,1) 100%);
    width: 10%;
    position: absolute;
    text-align: center;

`

const TitleDiv = styled.div`

    text-align: center;
    > p {
        justify-content: center;
        font-size: 20px;
        flex: 4
    }

    > img {
        margin-top: 10px;
    }

`

function Navbar() {

    return (
        <StyledNavbar>
            <TitleDiv>
                <Logo sideLength={50}/>
                <p>Catopia</p>
            </TitleDiv>
            <ProfilePicture sideLength={50} />

        </StyledNavbar>
    )
}

export default Navbar