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

import PageHeader from "./PageHeader"
import Loading from "./Loading"

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import { addUser, getUserByEmail, updateUser } from "../apis/api"

function Resident() {
  const { user } = useAuth0()
  const [userExists, setUserExists] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    pronouns: "",
    email: user.email,
    roomNumber: "",
    contactDetails: "",
  })

  useEffect(() => {
    getUserByEmail(user.email).then((userFromDB) => {
      if (userFromDB[0].email === user.email) {
        setUserExists(true)
        setFormData(userFromDB[0])
      }
    })
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (userExists) {
      console.log("user exists", formData)
      updateUser(formData)
      .then((updatedUser) => {
        console.log("returned", updatedUser[0])

        setFormData(updatedUser[0])
        setShowAlert(true)
      })
    } else {
      addUser(formData).then((newUser) => {
        setShowAlert(true)
      })
    }
  }
  return (
    <>
      <Container className="mt-3"></Container>

      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Alert
              variant="success"
              show={showAlert}
              onClose={() => setShowAlert(false)}
              dismissible
            >
              <Alert.Heading>Thanks, {formData?.name} updated</Alert.Heading>
              <p>Thank you for making a booking with</p>
            </Alert>
            <PageHeader
              title="Profile page"
              description="Feel free to help us out around the place."
            />
            <Container className="d-flex align-items-center py-3 my-3 border-top border-bottom">
              <Image
                className="profile-img"
                src={user?.picture}
                roundedCircle={true}
              />
              <div>
                <p className="data-title mb-0">Email</p>
                <p>{user?.email}</p>
              </div>
            </Container>
            <Container>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Your full name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    defaultValue={formData?.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pronouns">
                  <Form.Label>Your Pronouns</Form.Label>
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

                <Form.Group
                  className="mb-3"
                  controlId="contactDetails"
                >
                  <Form.Label>Contact Details</Form.Label>
                  <Form.Control
                    name="contactDetails"
                    as="textarea"
                    rows={3}
                    placeholder="Enter how you'd like to be contacted here"
                    onChange={handleChange}
                    defaultValue={formData?.contactDetails}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Save changes
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default withAuthenticationRequired(Resident, {
  onRedirecting: () => <Loading />,
})
