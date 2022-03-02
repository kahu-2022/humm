import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import { useAuth0 } from "@auth0/auth0-react"


function Home() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <Container className="py-3">
        <Row>
          <Col className="p-5" md={6}>
          <header className="mt-4 header">
          <h1 className="landing-hero">Welcome to humm!</h1>
            <h5>
              We’re a community dedicated to housing and feeding vulnerable 
              members of our whānau, as well as providing them with resources 
              and strategies to recover and grow.
            </h5>
          <br></br>
        {
        !isAuthenticated ?
        <>
        <Button variant="primary" className="mb-3" onClick={handleRegister}>
           Login / Register
        </Button> <span></span>
        </> : null } 
        <Button href="/About" variant="primary" className="mb-3">
           About the Project
        </Button> <span></span>
        <Button href="/Team" variant="primary" className="mb-3">
           Meet the team
        </Button>
        </header>
        
          </Col>
          <Col>
            <Image
              src="./images/vibes/building-cropped-2.jpeg"
              fluid="true"
              rounded="true"
              className="mt-2 mb-4"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
