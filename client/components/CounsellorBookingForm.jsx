import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


function CounsellorBookingForm(props) {
  return (
    <>
    <Container>
    <header className="mt-4 header">
    <h1>Book in your session </h1>
    </header>
    <section>
    <Form>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="pronouns">
            <Form.Label>Pronouns</Form.Label>
            <Form.Control type="text" placeholder="Enter your preferred pronouns" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="roomNumber">
            <Form.Label>Room number</Form.Label>
            <Form.Control type="text" placeholder="Enter your room number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="pronouns">
        <Form.Label>Urgency</Form.Label>
            <Form.Select aria-label="urgency">
                <option>Select urgency</option>
                <option value="Today">Today</option>
                <option value="1-2 days">1-2 days</option>
                <option value="This week">This week</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="preferences">
        <Form.Label>Preferred format of session</Form.Label>
            <Form.Check type="checkbox" label="Phone" />
            <Form.Check type="checkbox" label="Zoom" />
            <Form.Check type="checkbox" label="Face to face" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="appointmentDate" >
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="time">
        <Form.Label>Time</Form.Label>
            <Form.Select aria-label="time">
                <option>Select time for your session</option>
                <option value="9am-10am">9 am-10 am</option>
                <option value="12pm-1pm">12 pm-1 pm</option>
                <option value="3pm-4pm">3 pm-4 pm</option>
                <option value="5pm-6pm">5 pm-6 pm</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="preferences">
        <Form.Label>Preferred form of contact </Form.Label>
            <Form.Check type="checkbox" label="Text" />
            <Form.Check type="checkbox" label="Email" />
            <Form.Check type="checkbox" label="Phone call" />
            <Form.Check type="checkbox" label="Room visit" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactDetails">
            <Form.Label>Contact Details</Form.Label>
             <Form.Control as="textarea" rows={3} placeholder="Enter how you'd like to be contacted here"/>
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

export default CounsellorBookingForm