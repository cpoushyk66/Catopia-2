import React from "react";
import styled from "styled-components";

const Container = styled.div`

    width: 100%;
    overflow-x: auto;
    height: 150px;

    background-color: black;
    background-image: linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;


    > img {
        max-height: 150px;
    }
`

export default function PostImageContainer({pictures}) {

    function populatePictures() {
        let index = 0
        return pictures.map(picture => <img key={'postPics'+index++} src={picture.picture_url} />)
    }

    return(
        <Container>
            {populatePictures()}
        </Container>
    )
}