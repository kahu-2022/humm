import React, { useState, useEffect } from "react"
import {
  Row,
  Col,
  Card,
  Container,
  Button,
  Modal,
  Form,
  Alert,
} from "react-bootstrap"

import { useAuth0 } from "@auth0/auth0-react"

import DayJS from "react-dayjs"

import { claimNewFood, getUserByEmail } from "../../apis/api"

function Food(props) {
  const { food, setClaimed } = props
  const { user } = useAuth0()

  

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [claimData, setClaimData] = useState({
    id: food.id,
    claimedBy: "",
    claimerRoom: "",
    status: "Claimed",
  })

  useEffect(() => {
    //Get our user information to populate the form
    getUserByEmail(user?.email).then((userFromDB) => {
      if (userFromDB[0]?.email === user?.email) {
        setClaimData({
          id: food.id,
          name: userFromDB[0].name,
          claimedBy: userFromDB[0].pronouns,
          claimerRoom: userFromDB[0].roomNumber,
          status: "Claimed",
        })
      }
    })
  }, [])

  const handleChange = (e) => {
    setClaimData({
      ...claimData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    claimNewFood(claimData).then((newClaim) => {
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
                      <em>{food.item} </em>
                    </Card.Title>
                  </Col>
                  <Col>
                    <Button variant="primary" onClick={handleShow}>
                      Claim
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Claim the food {food.item} </Modal.Title>
                      </Modal.Header>
                      <Form>
                        <Modal.Body>
                          <Form.Group className="mb-3" controlId="claimedBy">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              name="claimedBy"
                              type="text"
                              placeholder="Enter your name"
                              onChange={handleChange}
                              defaultValue={claimData?.name}
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="claimerRoom">
                            <Form.Label>Room Number</Form.Label>
                            <Form.Control
                              name="claimerRoom"
                              type="text"
                              placeholder="Enter your room number"
                              onChange={handleChange}
                              defaultValue={claimData?.claimerRoom}
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
                  <Card.Text>{food.quantity} available </Card.Text>
                </Row>
                <br /> <strong>Donated by</strong>
                <br />
                <Row>
                  <Card.Text>
                    {food.name} in room {food.donorRoom}{" "}
                  </Card.Text>
                </Row>
                <Row>
                  <Card.Text className="mt-2">
                    <strong>Date Donated</strong>
                    <br />
                    <DayJS format="MMM DD, YYYY">{food.donateDate}</DayJS>
                  </Card.Text>
                </Row>
                <br />
                <Row>
                  <Card.Text>
                    <strong>Expiry Date</strong>
                    <br />
                    <DayJS format="MMM DD, YYYY">{food.useByDate}</DayJS>
                  </Card.Text>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Food
