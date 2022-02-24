import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import CounsellorBookingForm from './CounsellorBookingForm'

function AppRoutes(props) {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element = {<Home />}
        />  
         <Route
          exact
          path="/booking"
          element = {<CounsellorBookingForm />}
        />  
      </Routes> 
    </>
  )
}

export default AppRoutes