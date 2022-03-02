import React from "react"
import { Row, Col, Container, Button, Image } from "react-bootstrap"
import { withAuthenticationRequired } from "@auth0/auth0-react"
import Loading from "./Loading"
import Team from "./Team"

function Home() {
  return (
    <>
      <Container className="py-5">
      <Row className="d-flex align-items-center">
          <Col className="p-5" md={6}>
            <header className="mt-4 header">
              <h1 className="landing-hero">Welcome to humm!</h1>
              <h5>
                We’re a community dedicated to housing and feeding vulnerable
                members of our whānau, as well as providing them with resources
                and strategies to recover and grow.
              </h5>
              <br></br>
              <Button variant="primary" className="mb-3">
                Login
              </Button>{" "}
              <span></span>
              <Button variant="primary" className="mb-3">
                Register
              </Button>{" "}
              <span></span>
              <Button href="./Team" variant="primary" className="mb-3">
                Meet the team
              </Button>
            </header>
          </Col>
          <Col>
            <Image
              src="./images/vibes/building-cropped-2.jpeg"
              fluid="true"
              rounded="true"
              />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
