import React from "react";
import styled from "styled-components";
import { Logo } from "../styles/Logo";

const StyledNavbar = styled.div`
    height: 100%;
    background-color: grey;
    width: 10%;
    position: absolute;

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
                <Logo sideLength={50} />
                <p>Catopia</p>
            </TitleDiv>

        </StyledNavbar>
    )
}

export default Navbar