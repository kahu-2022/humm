import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from './Home'

function AppRoutes(props) {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element = {<Home />}
        />  
      </Routes> 
    </>
  )
}

export default AppRoutes