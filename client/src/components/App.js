import React, { useState, useEffect, createContext } from "react";
import styled from "styled-components";
import { Routes, Route, Router } from "react-router-dom";
import "../App.css"
import Navbar from "./NavBar";
import Home from "./Home";
import SideBar from "./SideBar";

export const UserContext = createContext()

const StyledApp = styled.div`

    height: 100%;

`

function App() {
    
  const [user, setUser] = useState(null)
  const [reset, setReset] = useState(false)

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
  }

    return(
        <UserContext.Provider value={UserContextValue} >
          <StyledApp>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
              <SideBar />
          </StyledApp>
        </UserContext.Provider>
    )
}

export default App