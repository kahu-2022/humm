import React, { useState } from "react"
import {
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap"

import DayJS from 'react-dayjs'

import { claimFreeItem } from "../../apis/api"

function FreeItem (props) {
  const { freeItem, setClaimed } = props

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [claimData, setClaimData] = useState({
    id: freeItem.id,
    claimedBy: "",
    claimerRoom: "",
    status: "Claimed",
  })


  const handleChange = (e) => {
    setClaimData({
      ...claimData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    claimFreeItem(claimData)
    .then((newClaim) => {
      window.scrollTo(0, 0)
      setClaimed(newClaim)
      setShow(false)
    })
  }

  return (
    <>
        <div className="shadow p-3 mb-5 bg-white rounded">
        <Card className="py-3">
          <Card.Body>
            <Row className="justify-content-md-center">
              <Col>
                <Row>
                  <Col>
                    <Card.Title>
                      <em>{freeItem.item} </em>
                    </Card.Title>
                  </Col>
                  <Col>
                    <Button variant="primary" onClick={handleShow}>
                      Claim
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                    
                      <Modal.Header closeButton>
                        <Modal.Title>Claim Free {freeItem.item} </Modal.Title>
                      </Modal.Header>
                      <Form>
                        <Modal.Body>
                          <Form.Group
                            className="mb-3"
                            controlId="claimedBy"
                            onChange={handleChange}
                          >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              name="claimedBy"
                              type="text"
                              placeholder="Enter your name"
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="claimerRoom"
                            onChange={handleChange}
                          >
                            <Form.Label>Room Number</Form.Label>
                            <Form.Control
                              name="claimerRoom"
                              type="text"
                              placeholder="Enter your room number"
                            />
                          </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleSubmit}>
                           Claim
                          </Button>
                        </Modal.Footer>
                      </Form>
                    </Modal>
                  </Col>
                </Row>
                <Row>
                  <Card.Text>{freeItem.quantity} available </Card.Text>
                </Row>
                <Row>
                  <Card.Text>{freeItem.description}</Card.Text>
                </Row>
                <br /> <strong>Donated by</strong>
                <br />
                <Row>
                  <Card.Text>
                    {freeItem.name} in room {freeItem.donorRoom}{" "}
                  </Card.Text>
                </Row>
                <Row>
                  <Card.Text className="mt-2">
                    <strong>Date Donated</strong>
                    <br />
                    <DayJS format="MMM DD, YYYY">{freeItem.donateDate}</DayJS>
                  </Card.Text>
                </Row>
                <br />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </div>
    </>
  )
}

export default FreeItem
  