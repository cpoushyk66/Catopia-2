import React from "react";
import styled from "styled-components";
import { Logo } from "../styles/Logo";

const StyledNavbar = styled.div`

    width: 100%;
    text-align: center;

`

const TitleDiv = styled.div`

    width: 100%;
    height: 50px;

    > h1 {
        align-self: center;
        width: 75%;
        float: right;
        text-align: center;
    }

    > img {
    }
    

`

function Navbar() {

    return (
        <StyledNavbar>
            <TitleDiv>
                <Logo sideLength={50} />
                <h1>Catopia</h1>
            </TitleDiv>

        </StyledNavbar>
    )
}

export default Navbar