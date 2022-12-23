import React, { useState, useEffect, createContext } from "react";
import styled from "styled-components";
import { Routes, Route, Router } from "react-router-dom";
import { Logo } from "../styles/Logo";
import "../App.css"
import Navbar from "./NavBar";

export const UserContext = createContext()

const StyledApp = styled.div`

    height: 100%;

`

function App() {

    
  const [user, setUser] = useState(null)
  const [reset, setReset] = useState(false)

  function refresh() {
    setReset(!reset)
  }

  useEffect(() => {
    fetch("/me")
    .then (res => {
      if (res.ok) {
        res.json().then(setUser)
      }
    })

  }, [reset])


  const UserContextValue = {
    user: user,
    setUser: setUser,
    refresh: refresh
  }

    return(
        <UserContext.Provider value={UserContextValue} >
            <StyledApp>
                <Navbar />
                <Routes>
                
                </Routes>
            </StyledApp>
        </UserContext.Provider>
    )
}

export default App