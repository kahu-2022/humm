import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

function Food(props) {
  
  return (
      <Card className="py-3">
        <Card.Body>
          <Row className="justify-content-md-center">
            <Col>
                <Row><Card.Title><em>{props.item} </em></Card.Title></Row>
                <Row><Card.Text>{props.quantity} available </Card.Text></Row>
                <br /> <strong>Donated by</strong><br />
                <Row><Card.Text>{props.name} in room {props.donorRoom} </Card.Text></Row>
                <Row>
                  <Card.Text className="mt-2">
                  <strong>Date Donated</strong><br />
                  {props.donateDate}
                  </Card.Text>
                </Row><br />
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
              <br />
               {props.status}
            </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default Food