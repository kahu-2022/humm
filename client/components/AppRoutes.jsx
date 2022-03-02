import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import CounsellorBookingForm from './Mental Health/CounsellorBookingForm'
import ShowCounsellors from './Mental Health/ShowCounsellors'
import Sessions from './Mental Health/Sessions'
import Activities from './Activities/Activities'
import RoomIssue from './RoomIssue'
import EmergencyResources from './Mental Health/EmergencyResources'
import ShowFood from './Food/ShowFood'
import ShowVolunteering from './Volunteering/ShowVolunteering'
import NotFound404 from './NotFound404'
import Resident from './Resident'
import Team from './Team'

function AppRoutes(props) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/booking" element={<CounsellorBookingForm />} />
        <Route exact path="/counsellors" element={<ShowCounsellors />} />
        <Route exact path="/sessions" element={<Sessions />} />
        <Route exact path="/activities" element={<Activities />} />
        <Route exact path="/room" element={<RoomIssue />} />
        <Route
          exact
          path="/emergencyresources"
          element={<EmergencyResources />}
        />

        <Route 
         exact
         path="/resident"
         element = {<Resident />} 
        />

        <Route 
         exact
         path="/team"
         element = {<Team />} 
        />

        <Route path="/booking/:name" element={<CounsellorBookingForm />} />
        <Route exact path="/food" element={<ShowFood />} />
        <Route exact path="/volunteering" element={<ShowVolunteering />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  )
}

export default AppRoutes
