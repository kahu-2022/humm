import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import DayJS from 'react-dayjs'

import Loading from '../Loading'

import {
  addCounselling,
  fetchCounsellors,
  getUserByEmail,
  } from "../../apis/api"
  
import { useParams } from "react-router-dom"

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"

function CounsellorBookingForm(props) {
  const { user } = useAuth0()

  const [formData, setFormData] = useState({
    name: "",
    pronouns: "",
    roomNumber: "",
    preferredCounsellor: "",
    urgency: "",
    sessionPreference: [],
    contactPreference: [],
    date: "",
    time: "",
    contactDetails: "",
  })

  const params = useParams()

  const [sessionPrefCheck, setSessionPrefCheck] = useState([])
  const [contactPrefCheck, setContactPrefCheck] = useState([])

  const [counsellor, setCounsellor] = useState([])

  const [showAlert, setShowAlert] = useState(false)
  const [alertInfo, setAlertInfo] = useState({})

  useEffect(() => {
    //Get our user information to populate the form
    getUserByEmail(user.email).then((userFromDB) => {
      if (userFromDB[0].email === user.email) {
        setFormData({
          ...formData,
          name: userFromDB[0].name,
          pronouns: userFromDB[0].pronouns,
          contactDetails: userFromDB[0].contactDetails,
          roomNumber: userFromDB[0].roomNumber,
        })
      }
    })

    //Load counsellors into select dropdown
    fetchCounsellors().then((arr) => setCounsellor(arr))
    //if preferred counsellor is set in the url
    params.name ? (formData.preferredCounsellor = params.name) : null
  }, [])

  //Checkboxes
  const handleCheckboxOnChange = (e) => {
    const isChecked = e.target.checked

    const checkboxes = {
      contactPreference: [contactPrefCheck, setContactPrefCheck],
      sessionPreference: [sessionPrefCheck, setSessionPrefCheck],
    }

    const checkboxState = checkboxes[e.target.name][0]
    const setCheckboxState = checkboxes[e.target.name][1]

    if (isChecked) {
      setCheckboxState([...checkboxState, e.target.value])
    } else {
      const index = checkboxState.indexOf(e.target.value)
      checkboxState.splice(index, 1)
      setCheckboxState([...checkboxState])
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    formData.sessionPreference = sessionPrefCheck
    formData.contactPreference = contactPrefCheck

    console.log(formData)

    addCounselling(formData).then((newAppointment) => {
      console.log("new appointment", newAppointment)
      setAlertInfo({
        name: newAppointment[0].name,
        time: newAppointment[0].time,
        date: newAppointment[0].date,
        preferredCounsellor: newAppointment[0].preferredCounsellor,
        contactDetails: newAppointment[0].contactDetails,
      })

      // formData.name = ""
      //Scroll to the top of the page to show alert
      window.scrollTo(0, 0)
      setShowAlert(true)
    })
  }

  return (
    <>
      <Container>
        <Row className="m-3">
          <Col className="styled-form" lg={{ span: 6, offset: 3 }}>
              <h2 className="page-title">Book in your session</h2>
            <p className="text-muted">Fill in the form to book a session with one of our counsellors.</p>

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
                Thank you for making a booking with{" "}
                {alertInfo.preferredCounsellor}. We'll see you on the{" "}
                <DayJS format="MMM DD, YYYY">{alertInfo.date}</DayJS> at{" "}
                {alertInfo.time}. Please let us know if you need to cancel or
                rearrange your appointment.
              </p>
              <hr />
              <p className="mb-0">
                If you're currently in crisis we're here to help you or someone
                important to you right now. If this is an emergency please phone
                111. A list of other important{" "}
                <a href="/emergencyresources">emergency resources</a> are also
                available for you to browse.
              </p>
            </Alert>

           
          
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  defaultValue={formData?.name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="pronouns">
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
                onChange={handleChange}
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

              <Form.Group className="mb-3" controlId="preferredCounsellor">
                <Form.Label>Preferred Counsellor</Form.Label>
                <Form.Control
                  name="preferredCounsellor"
                  aria-label="preferredCounsellor"
                  type="select"
                  as="select"
                  onChange={handleChange}
                  value={formData.preferredCounsellor}
                >
                  <option key={"preferredCounsellor"}>
                    Select preferred counsellor
                  </option>
                  {counsellor.map((counsellor, index) => {
                    return (
                      <option value={counsellor.name} key={index}>
                        {counsellor.name}
                      </option>
                    )
                  })}
                </Form.Control>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="urgency"
                onChange={handleChange}
              >
                <Form.Label>Urgency</Form.Label>
                <Form.Select name="urgency" aria-label="urgency">
                  <option>Select urgency</option>
                  <option value="Today">Today</option>
                  <option value="1-2 days">1-2 days</option>
                  <option value="This week">This week</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="appointmentDate"
                onChange={handleChange}
              >
                <Form.Label>Preferred date</Form.Label>
                <Form.Control name="date" type="date" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="time"
                onChange={handleChange}
              >
                <Form.Label>Preferred time</Form.Label>
                <Form.Select name="time" aria-label="time">
                  <option>Select time for your session</option>
                  <option value="9am-10am">9 am-10 am</option>
                  <option value="12pm-1pm">12 pm-1 pm</option>
                  <option value="3pm-4pm">3 pm-4 pm</option>
                  <option value="5pm-6pm">5 pm-6 pm</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="sessionPreference"
                onChange={handleCheckboxOnChange}
              >
                <Form.Label>Preferred format of session</Form.Label>
                <Form.Check
                  name="sessionPreference"
                  type="checkbox"
                  value="Phone"
                  label="Phone"
                />
                <Form.Check
                  name="sessionPreference"
                  type="checkbox"
                  value="Zoom"
                  label="Zoom"
                />
                <Form.Check
                  name="sessionPreference"
                  type="checkbox"
                  value="Face to face"
                  label="Face to face"
                />
              </Form.Group>

              <Form.Group
                name="contactPreferences"
                className="mb-3"
                controlId="contactPreferences"
                onChange={handleCheckboxOnChange}
              >
                <Form.Label>Preferred form of contact </Form.Label>
                <Form.Check
                  name="contactPreference"
                  type="checkbox"
                  value="Text"
                  label="Text"
                />
                <Form.Check
                  name="contactPreference"
                  type="checkbox"
                  value="Email"
                  label="Email"
                />
                <Form.Check
                  name="contactPreference"
                  type="checkbox"
                  value="Phone call"
                  label="Phone call"
                />
                <Form.Check
                  name="contactPreference"
                  type="checkbox"
                  value="Room visit"
                  label="Room visit"
                />
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
                  onChange={handleChange}
                  value={formData.contactDetails}
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

export default withAuthenticationRequired(CounsellorBookingForm, {
  onRedirecting: () => <Loading />,
})
