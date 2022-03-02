import React, { useState, useEffect } from "react"
import {
  Alert,
  Form,
  Button,
  Image,
  Container,
  Row,
  Col,
} from "react-bootstrap"
import Loading from "./Loading"
import PageHeader from "./PageHeader"

import { getUserByEmail, addRoomIssue } from "../apis/api"

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"

function RoomIssueForm(props) {
  const { user } = useAuth0()
  const [showAlert, setShowAlert] = useState(false)
  const [alertInfo, setAlertInfo] = useState({})
  const [roomIssue, setRoomIssue] = useState({
    name: "",
    pronouns: "",
    roomNumber: "",
    issue: "",
  })

  useEffect(() => {
    //Get our user information to populate the form
    getUserByEmail(user?.email).then((userFromDB) => {
      if (userFromDB[0]?.email === user?.email) {
        setRoomIssue({
          name: userFromDB[0].name,
          pronouns: userFromDB[0].pronouns,
          roomNumber: userFromDB[0].roomNumber,
        })
      }
    })
  }, [])

  const handleChange = (e) => {
    setRoomIssue({
      ...roomIssue,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addRoomIssue(roomIssue).then((newRoomIssue) => {
      setAlertInfo({
        name: newRoomIssue[0].name,
      })
      setShowAlert(true)
    })
  }
  return (
    <>
      <Container>
        <Row className="m-3 ">
          <Col className="styled-form p-4" lg={{ span: 6, offset: 3 }}>
         
         
            <Alert
              variant="success"
              show={showAlert}
              onClose={() => setShowAlert(false)}
              dismissible
            >
              <Alert.Heading>
                Kia ora {alertInfo.name}, your room issue has been reported.
              </Alert.Heading>
              <p>
                Thank you for taking the time to bring this to our attention.
                We'll aim to get back to you as soon as we can.
              </p>
              <hr />
              <p className="mb-0">
                If the issue changes in any way please let us know.
              </p>
            </Alert>
             <h2 className="page-title">Report an issue with your room </h2>
          <p className="text-muted">Let us know any problems you are having with your room</p>
       
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    defaultValue={roomIssue?.name}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pronouns">
                  <Form.Label>Pronouns</Form.Label>
                  <Form.Control
                    name="pronouns"
                    type="text"
                    placeholder="Enter your preferred pronouns"
                    onChange={handleChange}
                    defaultValue={roomIssue?.pronouns}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="roomNumber">
                  <Form.Label>Room number</Form.Label>
                  <Form.Control
                    name="roomNumber"
                    type="text"
                    placeholder="Enter your room number"
                    onChange={handleChange}
                    defaultValue={roomIssue?.roomNumber}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="issue"
                  onChange={handleChange}
                >
                  <Form.Label>Issue</Form.Label>
                  <Form.Control
                    name="issue"
                    as="textarea"
                    rows={3}
                    placeholder="Enter any issues you may be having with your room here"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default withAuthenticationRequired(RoomIssueForm, {
  onRedirecting: () => <Loading />,
})
