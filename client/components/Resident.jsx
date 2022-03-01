import React, { useState } from "react"
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap"

import PageHeader from "./PageHeader"
import Loading from "./Loading"

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"

function Resident() {
  const { user } = useAuth0()

  const [formData, setFormData] = useState()
  const handleChange = () => {}

  const handleSubmit = () => {}
  return (
    <>
      <Container>
        <Row>
          <Col md={{span:6, offset:3}} >
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
                <Form.Group
                  className="mb-3"
                  controlId="name"
                  onChange={handleChange}
                  value={formData?.name}
                >
                  <Form.Label>Your full name</Form.Label>
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
                  <Form.Label>Your Pronouns</Form.Label>
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
                  controlId="contactDetails"
                  onChange={handleChange}
                  key={"j"}
                >
                  <Form.Label>Contact Details</Form.Label>
                  <Form.Control
                    name="contactDetails"
                    as="textarea"
                    rows={3}
                    placeholder="Enter how you'd like to be contacted here"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" >
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
