import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import CounsellorBookingForm from './CounsellorBookingForm'
import ShowCounsellors from "./ShowCounsellors"
import Sessions from './Sessions'

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
        <Route 
         exact
         path="/counsellors"
         element = {<ShowCounsellors />} 
        /> 
        <Route 
         exact
         path="/sessions"
         element = {<Sessions />} 
        /> 
      </Routes> 
    </>
  )
}

export default AppRoutes