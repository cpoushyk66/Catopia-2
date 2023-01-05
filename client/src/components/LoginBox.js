import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "./App";

const StyledBox = styled.div`

    position: relative;
    padding: 10px;
    background-color: green;
    text-align: center;
    left: 100px;
    bottom: 50px;
    z-index: 100;
    float: left;

    > form {
        display: flex;
        flex-direction: row;
        > * {
            justify-content: center;
            align-self: center;
        }
    }

`
export default function LoginBox() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")

    const userContext = useContext(UserContext)

    function submitHandler(e) {
        e.preventDefault()

        if (password == passwordRepeat) {
            fetch("/login", {
                "method": "POST",
                "headers": {'Content-Type': 'application/json'},
                'body': JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(res => {
                if (res.ok) {
                    res.json().then(userContext.setUser)
                }
            })
        }
    }



    return (
        <StyledBox>
                <p>Login to your Catopia Account!</p>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username: </label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} name="username"/>
                <label htmlFor="password">Password: </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" />
                <label htmlFor="passwordRepeat">Confirm Password: </label>
                <input value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} name="passwordRepeat" />
                <button type="submit">Login</button>
            </form>
                {password != passwordRepeat ? <p>Passwords must match!</p> : null}
        </StyledBox>
    )
}