import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'

function Counsellor(props) {
  
  return (
    <Container fluid="md">
      <Card>
        <Row className="justify-content-md-center">
          <Col>
            <Card.Body>
              <Image src={props.photo} thumbnail="true" roundedCircle="true" />
            </Card.Body>
          </Col>
          <Col>
            <Card.Body>
              <Row><Card.Title><em>{props.name}</em></Card.Title></Row>
              <Row><Card.Text>{props.pronouns}</Card.Text></Row>
              <Row>
                <Card.Text>
                <strong>Specialty</strong><br />
                {props.speciality}
                </Card.Text>
              </Row>
              <Row>
                <Card.Text>
                <strong>Office Hours</strong><br />
                {props.hours}
                </Card.Text>
              </Row>
            </Card.Body>
          </Col>
        </Row>
        <Card.Body>
            <Card.Text>
              <strong>Bio</strong>
            </Card.Text>
            <Card.Text>
               {props.biography}
            </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Counsellor