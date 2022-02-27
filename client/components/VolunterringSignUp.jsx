import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import { Routes, Route } from "react-router-dom"

import PageHeader from "./PageHeader"
import { fetchVolunteering, signUpForVolunteering } from "../apis/api"
import { useParams } from "react-router-dom"

function VolunterringForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    pronouns:"",
    roomNumber: "",
    title: "",
    description: "",
    when: "",
    where: ""
  })

  const params = useParams()

  const [volunteer, setVolunteer] = useState([])

  const [showAlert, setShowAlert] = useState(false)
  const [alertInfo, setAlertInfo] = useState({})

  fetchVolunteering()
  .then((arr) => {
    setVolunteer(arr)
  })
 
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  })
}

const handleSubmit = (event) => {
  event.preventDefault()
  console.log(formData)
  signUpForVolunteering(formData).then((volunteered) => {
    console.log(volunteered)
    setAlertInfo({ 
      title: volunteered[0].title,
      name: volunteered[0].name,

    })
    window.scrollTo(0, 0)
    setShowAlert(true)
  })
}

return (
  <>
    <Container className="mt-3">
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
          Thank you for signing up to help us out. Please let us know if you can no longer make it.
        </p>
        <hr />
        <p className="mb-0">
         
        </p>
      </Alert>
      </Container>

      <PageHeader title="Sign up to volunteer"/>

  <Container>
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
              controlId="description"
              onChange={handleChange}
            >
            <Form.Label>Volunteer for</Form.Label>
              <Form.Select name="description" aria-label="description">
              <option>Help out with</option>
                {volunteer.map((volunteer) => {
                return <option value={volunteer.title} key={volunteer.id}>
                  {volunteer.title}
                </option>})}
              </Form.Select>
            </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="contactDetails"
            onChange={handleChange}
          >
            <Form.Label>Contact Details</Form.Label>
            <Form.Control
              name="contactDetails"
              as="textarea"
              rows={3}
              placeholder="Enter how you'd like to be contacted here"
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

export default VolunterringForm
