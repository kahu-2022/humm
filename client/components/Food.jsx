import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

function Food(props) {
  
  return (
      <Card className="py-3">
        <Card.Body>
          <Row className="justify-content-md-center">
            <Col>
                <Row><Card.Title><em>{props.name}</em></Card.Title></Row>
                <Row><Card.Text>{props.donorRoom}</Card.Text></Row>
                <Row><Card.Text>{props.item}</Card.Text></Row>
                <Row><Card.Text>{props.quantity}</Card.Text></Row>
                <Row>
                  <Card.Text className="mt-2">
                  <strong>Date Donated</strong><br />
                  {props.donateDate}
                  </Card.Text>
                </Row>
                <Row>
                  <Card.Text>
                  <strong>Expiry Date</strong><br />
                  {props.useByDate}
                  </Card.Text>
                </Row>
            </Col>
          </Row>
        </Card.Body>

        <Card.Body>
            <Card.Text>
              <strong>Status</strong>
            </Card.Text>
            <Card.Text>
               {props.status}
            </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default Food