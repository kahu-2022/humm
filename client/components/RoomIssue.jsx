import React, { useState, useEffect } from 'react'
import {Container, Form, Button, Alert} from 'react-bootstrap'

import Loading from './Loading'
import { addRoomIssue } from '../apis/api'

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';


function RoomIssueForm(props) {
  const [roomIssue, setRoomIssue] = useState({
    name: '',
    pronouns: '',
    roomNumber: '',
    issue: '',
  })

  const [showAlert, setShowAlert] = useState(false)
  const [alertInfo, setAlertInfo] = useState({})

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
        <header className="mt-4 header">
          <h1>Report an issue with your room </h1>
        </header>
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
            Thank you for taking the time to bring this to our attention. We'll
            aim to get back to you as soon as we can.
          </p>
          <hr />
          <p className="mb-0">
            If the issue changes in any way please let us know.
          </p>
        </Alert>
        <section>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="name"
              onChange={handleChange}
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="pronouns"
              onChange={handleChange}
            >
              <Form.Label>Pronouns</Form.Label>
              <Form.Control
                name="pronouns"
                type="text"
                placeholder="Enter your preferred pronouns"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="roomNumber"
              onChange={handleChange}
            >
              <Form.Label>Room number</Form.Label>
              <Form.Control
                name="roomNumber"
                type="text"
                placeholder="Enter your room number"
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
      </section>
    </Container>
  </> 
)
}

export default withAuthenticationRequired(RoomIssueForm, {
  onRedirecting: () => <Loading />,
});


