import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import CounsellorBookingForm from './CounsellorBookingForm'
import ShowCounsellors from "./ShowCounsellors"
import Sessions from './Sessions'
import Activities from './Activities'
import Counsellor from './Counsellor'
import RoomIssue from './RoomIssue'
import EmergencyResources from "./EmergencyResources"

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
        <Route 
         exact
         path="/activities"
         element = {<Activities />} 
        /> 
      <Route 
         exact
         path="/room"
         element = {<RoomIssue />} 
        /> 
      <Route 
         exact
         path="/emergencyresources"
         element = {<EmergencyResources />} 
        />
      <Route 
         path="/booking/:name"
         element = {<CounsellorBookingForm />} 
        />
      </Routes> 
    </>
  )
}

export default AppRoutes