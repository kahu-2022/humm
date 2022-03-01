import React, { useEffect } from "react"

import { Image, Container, Form, Button, Alert } from "react-bootstrap"

import Loading from "./Loading"

import { useDispatch } from "react-redux"
import { fetchUser } from "../actions/user"

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"

function Home() {
  
  const dispatch = useDispatch()
  const { user } = useAuth0()
  
  const newUser = {
    email: user.email
  }
  useEffect(() => {
    //set the user to the global state
    dispatch(fetchUser(newUser.email))
  }, [])

  return (
    <Container>
      <header className="mt-4 header">
        <h1>Welcome to humm!</h1>
      </header>

      <Image src="./images/vibes/building.jpg" fluid="true" rounded="true" />

      <Button variant="primary" className="mb-3">
        Resident Login
      </Button>
      <br></br>
      <Button variant="primary" className="mb-3">
        Resident Register
      </Button>
      <br></br>
      <Button href="/about" variant="primary" className="mb-3">
        Browse as a guest
      </Button>
    </Container>
  )
}

export default withAuthenticationRequired(Home, {
  onRedirecting: () => <Loading />,
})
