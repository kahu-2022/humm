import React, { useState, useEffect } from "react"
import {
  Row,
  Col,
  Card,
  Container,
  Alert,
  Modal,
  Form,
  Button,
} from "react-bootstrap"
import { useAuth0 } from "@auth0/auth0-react"

import { signUpForVolunteering, getUserByEmail } from "../../apis/api"

function Volunteering(props) {
  const { user } = useAuth0()

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [volunteerData, setVolunteerData] = useState({
    name: "",
    pronouns: "",
    roomNumber: "",
  })

  const [showAlert, setShowAlert] = useState(false)
  const [alertInfo, setAlertInfo] = useState({})

  useEffect(() => {
    //Get our user information to populate the form
    getUserByEmail(user?.email).then((userFromDB) => {
      if (userFromDB[0]?.email === user?.email) {
        setVolunteerData({
          name: userFromDB[0].name,
          pronouns: userFromDB[0].pronouns,
          roomNumber: userFromDB[0].roomNumber,
        })
      }
    })
  }, [])

  const handleChange = (e) => {
    setVolunteerData({
      ...volunteerData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    signUpForVolunteering(volunteerData).then((volunteered) => {
      setAlertInfo({
        title: volunteered[0].title,
        name: volunteered[0].name,
      })
      window.scrollTo(0, 0)
      setShowAlert(true)
    })
  }

  return (
    <Card className="py-2">
      <Card.Body className="flex-wrap d-grid">
        <Col>
          <Row>
            <Card.Title>
              <em>{props.title} </em>
            </Card.Title>
          </Row>
          <Row>
            <Card.Text>{props.description}</Card.Text>
          </Row>
          <Row>
            <Card.Text className="mt-3">
              <strong>When</strong>
              <br />
              {props.when}
            </Card.Text>

            <Card.Text>
              <strong>Where</strong>
              <br />
              {props.where}
            </Card.Text>
          </Row>
        </Col>
        {/* <Row> */}
        <Button
          variant="outline-primary"
          className="mt-3 "
          onClick={handleShow}
        >
          Sign Up
        </Button>
        {/* </Row> */}
      </Card.Body>

      {/* </Container> */}
      <Container>
        <Modal show={show} onHide={handleClose}>
          <Alert
            variant="success"
            show={showAlert}
            onClose={() => setShowAlert(false)}
            dismissible
          >
            <Alert.Heading>
              Kia ora {alertInfo.name}, you're all booked in.
            </Alert.Heading>
            <p>
              Thank you for signing up to help us out. Please let us know if you
              can no longer make it.
            </p>
            <hr />
            <p className="mb-0"></p>
          </Alert>

          <Modal.Header closeButton>
            <Modal.Title>Sign up for {props.title} </Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  defaultValue={volunteerData?.name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="pronouns">
                <Form.Label>Pronouns</Form.Label>
                <Form.Control
                  name="pronouns"
                  type="text"
                  placeholder="Enter your preferred pronouns"
                  onChange={handleChange}
                  defaultValue={volunteerData?.pronouns}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="roomNumber">
                <Form.Label>Room number</Form.Label>
                <Form.Control
                  name="roomNumber"
                  type="text"
                  placeholder="Enter your room number"
                  onChange={handleChange}
                  defaultValue={volunteerData?.roomNumber}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    </Card>
  )
}

export default Volunteering
