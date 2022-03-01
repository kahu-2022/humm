import React, {useEffect, useState} from 'react'

import Navigation from './Navigation'
import AppRoutes from './AppRoutes'
import Footer from './Footer'

// import { addUser, getUserByEmail, updateUser } from "../apis/api"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"

// import { useDispatch } from 'react-redux'
// import { setUser } from '../actions/user'



function App() {
  // const { user } = useAuth0()
  // const [newUser, setNewUser] = useState(user)
  // const dispatch = useDispatch()
  // const [formData, setFormData] = useState({
  //   id: "", 
  //   name: "",
  //   pronouns: "",
  //   email: user?.email,
  //   roomNumber: "",
  //   contactDetails: "",
  // })


  
  // useEffect(() => {
  //   // setTest(user?.email)
  //   let isMounted = true;  
  //   getUserByEmail(user?.email)
  //   .then((userFromDB) => {
  //     if (isMounted && userFromDB[0]?.email === user?.email) {
  //       console.log("hi")
  //       console.log("user from db",userFromDB[0])
  //       dispatch(setUser(userFromDB[0]))
  //     }
  //   })
  //   return () => { isMounted = false };
  // }, [])

  return (
    <>
      <Navigation />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
