import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import PageHeader from './PageHeader'
import Loading from './Loading'

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { addUser, getUserByEmail, updateUser } from '../apis/api'

function Resident (props) {
  const { user } = useAuth0()
  const [userExists, setUserExists] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    pronouns: "",
    email: user.email,
    roomNumber: "",
    contactDetails: "",
  })

  useEffect(() => {
    //Get our user information to populate the form
    getUserByEmail(user?.email).then((userFromDB) => {
      // console.log(user)
      if (userFromDB[0]?.email === user?.email) {
        // console.log("I exist in the db")
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
      // console.log("i exist - calling update user")
      updateUser(formData).then((updatedUser) => {
        setFormData(updatedUser[0])
        setShowAlert(true)
        window.scrollTo(0, 0)
      })
    } else {
      addUser(formData).then((newUser) => {
        setShowAlert(true)
        window.scrollTo(0, 0)
      })
    }
  }
  return (
    <Container>
      <Row className="m-3">
        <Col className="styled-form" lg={{ span: 6, offset: 3 }}>
          <Alert
            variant="success"
            show={showAlert}
            onClose={() => setShowAlert(false)}
            dismissible
          >
            <Alert.Heading>
              Thanks, we've updated your information.
            </Alert.Heading>
          </Alert>

          <h2 className="page-title">Your profile</h2>
          <p className="text-muted">
            We use this to populate your info across the site.
          </p>

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
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Your name</Form.Label>
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

            <Form.Group className="mb-3" controlId="roomNumber">
              <Form.Label>Room number</Form.Label>
              <Form.Control
                name="roomNumber"
                type="text"
                placeholder="Enter your room number"
                onChange={handleChange}
                defaultValue={formData?.roomNumber}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactDetails">
              <Form.Label>Contact Details</Form.Label>
              <Form.Control
                name="contactDetails"
                as="textarea"
                rows={3}
                placeholder="Let us know how you would like to be contacted e.g. a phone number or email address"
                onChange={handleChange}
                defaultValue={formData?.contactDetails}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Text className="text-muted">
                If you need to update your email, please contact us at
                support@humm.com
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Save changes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default withAuthenticationRequired(Resident, {
  onRedirecting: () => <Loading />,
})
