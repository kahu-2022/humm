import React from 'react'
import { Row, Col, Card, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Counsellor(props) {
  
  return (
      <Card className="py-3">
        <Card.Body>
          <Row className="justify-content-md-center">
            <Col>
                <Image src={props.photo} thumbnail="true" roundedCircle="true" fluid="true" />
            </Col>
            <Col>
                <Row><Card.Title><em>{props.name}</em></Card.Title></Row>
                <Row><Card.Text>{props.pronouns}</Card.Text></Row>
                <Row>
                  <Card.Text className="mt-3">
                  <strong>Specialty</strong><br />
                  {props.speciality}
                  </Card.Text>
                </Row>
                <Row>
                  <Card.Text className="mt-3">
                  <strong>Office Hours</strong><br />
                  {props.hours}
                  </Card.Text>
                </Row>

                <Row className="mt-3">
                  <Card.Text>
                  <Button href={`/booking/${props.name}`}variant="outline-primary" size="sm">
                    Book appointment
                  </Button>
                  </Card.Text>
                </Row>

            </Col>
          </Row>
        </Card.Body>

        <Card.Body>
            <Card.Text>
              <strong>Bio</strong>
            </Card.Text>
            <Card.Text>
               {props.biography}
            </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default Counsellor