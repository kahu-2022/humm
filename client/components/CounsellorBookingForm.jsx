import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


function CounsellorBookingForm(props) {
  return (
    <>
    <Container>
    <header className="mt-4 header">
    <h1>The form</h1>
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