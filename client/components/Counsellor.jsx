import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function Counsellor(props) {
  // const { id, pronouns, name, speciality, photo, hours, biography } = props.counsellor
  return (
    <Container fluid="md">
      <Card style={{ width: '18rem' }}>
        <Row className="justify-content-md-center">
          <Col>
            <Card.Body>
              <Image src="./images/CHR.jpg" thumbnail="true" roundedCircle="true" />
            </Card.Body>
          </Col>
          <Col>
            <Card.Body>
              <Row><Card.Title>Name</Card.Title></Row>
              <Row><Card.Text>pronoun</Card.Text></Row>
              <Row><Card.Text>pronoun</Card.Text></Row>
              <Row><Card.Text>pronoun</Card.Text></Row>
            </Card.Body>
          </Col>
        </Row>
        <Card.Body>
            <Card.Text>
              <strong>Bio</strong>
            </Card.Text>
            <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Counsellor