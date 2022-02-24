import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


function CounsellorBookingForm(props) {

    const [name, setName] = useState('')
    const [pronouns, setPronouns] = useState('')
    const [roomNumber, setRoomNumber] = useState('')
    const [urgency, setUrgency] = useState('')
    const [sessionPreference, setSessionPreference] = useState([])
    const [contactPreference, setContactPreference] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [contactDetails, setContactDetails] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name,
            pronouns,
            roomNumber,
            urgency,
            sessionPreference,
            contactPreference,
            date,
            time,
            contactDetails
        }
        console.log(formData)
    }



  return (
    <>
    <Container>
    <header className="mt-4 header">
    <h1>Book in your session </h1>
    </header>
    <section>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name" onChange={(e) => setName(e.target.value)}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="pronouns" onChange={(e) => setPronouns(e.target.value)}>
            <Form.Label>Pronouns</Form.Label>
            <Form.Control type="text" placeholder="Enter your preferred pronouns" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="roomNumber" onChange={(e) => setRoomNumber(e.target.value)}>
            <Form.Label>Room number</Form.Label>
            <Form.Control type="text" placeholder="Enter your room number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="urgency" onChange={(e) => setUrgency(e.target.value)} >
        <Form.Label>Urgency</Form.Label>
            <Form.Select aria-label="urgency">
                <option>Select urgency</option>
                <option value="Today">Today</option>
                <option value="1-2 days">1-2 days</option>
                <option value="This week">This week</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="preferences" onChange={(e) => setSessionPreference({...sessionPreference, [e.target.value] : event.target.checked })} >
        <Form.Label>Preferred format of session</Form.Label>
            <Form.Check type="checkbox" value= "Phone" label="Phone" />
            <Form.Check type="checkbox" value= "Zoom" label="Zoom" />
            <Form.Check type="checkbox" value= "Face to face" label="Face to face" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="appointmentDate" onChange={(e) => setDate(e.target.value)} >
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="time" onChange={(e) => setTime(e.target.value)}>
        <Form.Label>Time</Form.Label>
            <Form.Select aria-label="time">
                <option>Select time for your session</option>
                <option value="9am-10am">9 am-10 am</option>
                <option value="12pm-1pm">12 pm-1 pm</option>
                <option value="3pm-4pm">3 pm-4 pm</option>
                <option value="5pm-6pm">5 pm-6 pm</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="preferences" onChange={(e) => setSessionPreference(e.target.value)}>
        <Form.Label>Preferred form of contact </Form.Label>
            <Form.Check type="checkbox" label="Text" />
            <Form.Check type="checkbox" label="Email" />
            <Form.Check type="checkbox" label="Phone call" />
            <Form.Check type="checkbox" label="Room visit" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactDetails" onChange={(e) => setContactPreference(e.target.value)}>
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