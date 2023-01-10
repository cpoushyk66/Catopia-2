import React from "react";
import styled from "styled-components";
import User from "./User";

const Container = styled.div`
    border-top: 3px grey ridge;
    border-bottom: 3px ridge grey;
`
export default function UserContainer({users}) {

    function populateUsers() {
        return users.map(user => <User user={user} />)
    }


    return (
        <Container>
            {populateUsers()}
        </Container>
    )
}