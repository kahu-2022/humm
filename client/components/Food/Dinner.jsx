import React from 'react'
import { Card, Container, Row, Col, Alert, Form } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

function Dinner() {
  return(
<>
  <Container className= "py-3">
  <Row className="d-flex align-items-center">
    <Col md={6} lg={4}>
      <Card className="py-3" className="shadow p-3 mb-3 bg-white rounded">
        <Card.Img src="./images/tonights-menu.jpg" className="my-3" fluid="true" variant="top"/>
        <Card.Body>
          <Card.Title>
            <p> Dinner </p>
          </Card.Title>
          <p>Tonight's meal is vegan. </p>
        </Card.Body>
      </Card>
    </Col>
    <Col className="p-5" md={6}>
    <header className="header"> 
    <h1 className="landing-hero">
     Humm's weekly dinners </h1> 
    <h3> Please arrive by 5 pm.</h3>
    <p>All are welcome.</p>
    </header>
        </Col>
      </Row>
    </Container>
  </>
  )
}

  export default Dinner