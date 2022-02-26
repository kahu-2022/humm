import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'

function Volunteering(props) {

  console.log(props)

  return (
    <>
    <Container>
      <Card className="py-3">
        <Card.Body>
          <Row className="justify-content-md-center">
            <Col>
                <Row><Card.Title><em>{props.title} </em></Card.Title></Row>
                <Row><Card.Text>Description of volunteering role{props.description}</Card.Text></Row>
                <Row>
                  <Card.Text className="mt-2">
                  <strong>When</strong><br />
                  {props.when}
                  </Card.Text>
                </Row><br />
                <Row>
                  <Card.Text>
                  <strong>Where</strong><br />
                  {props.where}
                  </Card.Text>
                </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      </Container>
</>
    
  )
}

export default Volunteering