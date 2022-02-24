import React from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import AppRoutes from './AppRoutes'
import Activities from './Activities'


function App () {
  return (
    <>
    <Navigation />
    <AppRoutes />

    {/* <Link to='/activities'>
      <Activities />
      </Link> */}
    {/* <Activities /> */}
    </>
  )
}

export default App
