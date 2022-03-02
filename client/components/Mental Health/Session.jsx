import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import { getUserByEmail, bookSession } from '../../apis/api'
import { useAuth0 } from '@auth0/auth0-react'

function Session(props) {
  const { session } = props
  const { user } = useAuth0()

  const [showAlert, setShowAlert] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const [showConf, setShowConf] = useState(false)

  useEffect(() => {
    //Get our user information to populate the form
    getUserByEmail(user?.email)
    .then((userFromDB) => {
      if (userFromDB[0]?.email === user?.email) {
        setFormData({
          ...formData,
          name: userFromDB[0].name,
          pronouns: userFromDB[0].pronouns,
          roomNumber: userFromDB[0].roomNumber
        })
      } 
    })
  },[])

  const [formData, setFormData] = useState({
    name: "",
    pronouns: "",
    roomNumber: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)

    bookSession(formData).then((newBooking) => {
    console.log("new booking", newBooking)
    })

    setShowAlert(true)
    setShowForm(false)
    setShowConf(true)
  }

  const formAppear = () => {
    setShowForm(true)
    setShowButton(false)
  }

  const cancelBooking = () => {
    alert("All good!")
    setShowButton(true)
    setShowConf(false)
  }

  return (
        <Card className="py-3 shadow p-3 mb-5 bg-white rounded">
          <Card.Img src={session.image} className="mt-3" fluid="true" />
          <Card.Body>
            <Card.Title>
              <b>{session.title} </b>
            </Card.Title>

            <p>
              <em> {session.info}</em>
            </p>

            <p>
              {session.date} {session.time} in the {session.location}
            </p>
            <p>Ran by: {session.ran_by}</p>
            {showButton ? (
              <Button variant="primary" type="submit" onClick={formAppear}>
                Sign up
              </Button>
            ) : null}
            {showConf ? (
              <p>
                You're all booked!
                <Button variant="success" onClick={cancelBooking}>
                  Need to cancel?
                </Button>
              </p>
            ) : null}
            <br></br>

            {showForm ? (
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="name"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    defaultValue={formData?.name}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="pronouns"
                >
                  <Form.Label>Pronouns</Form.Label>
                  <Form.Control
                    name="pronouns"
                    type="text"
                    placeholder="Enter your preferred pronouns"
                    onChange={handleChange}
                    defaultValue={formData?.pronouns}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="roomNumber"
                >
                  <Form.Label>Room number</Form.Label>
                  <Form.Control
                    name="roomNumber"
                    type="text"
                    placeholder="Enter your room number"
                    onChange={handleChange}
                    defaultValue={formData?.roomNumber}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            ) : null}

            <br></br>

            <Alert
              variant="success"
              show={showAlert}
              onClose={() => setShowAlert(false)}
              dismissible
            >
              <Alert.Heading>Awesome! We'll see you there!</Alert.Heading>
            </Alert>
          </Card.Body>
        </Card>

      )
}

export default Session