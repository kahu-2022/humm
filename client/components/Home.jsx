import React from 'react'
import { Row, Col, Container, Button, Image } from 'react-bootstrap'
import { withAuthenticationRequired } from "@auth0/auth0-react"
import Loading from './Loading'


function Home() {
  

  return (
    <>
      <Container className="py-3">
        <Row>
          <Col className="p-5" md={6}>
          <header className="mt-4 header">
          <h1 className="landing-hero">Welcome to humm!</h1>
          <h5>We’re a community dedicated to housing and feeding vulnerable members of our whānau, as well as providing them with resources and strategies to recover and grow.</h5>
          <br></br>
        <Button variant="primary" className="mb-3">
           Login
        </Button> <span></span>
        <Button variant="primary" className="mb-3">
           Register
        </Button>
        </header>
        
          </Col>
          <Col>
          <Image src="./images/vibes/building-cropped-2.jpeg" fluid="true" rounded="true" className="mt-2 mb-4" />
          </Col>
        </Row>  
        <br></br>
      </Container>
    </>
  )
}

export default Home