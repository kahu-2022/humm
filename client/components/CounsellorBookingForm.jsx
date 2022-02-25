import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

import { addCounselling } from '../apis/api'


function CounsellorBookingForm(props) {
    
    const [formData, setFormData] = useState({
        name: '',
        pronouns:'',
        roomNumber: '',
        urgency: '',
        sessionPreference: [],
        contactPreference: [],
        date: '',
        time: '',
        contactDetails: ''
    })

    const [sessionPrefCheck, setSessionPrefCheck] = useState([])
    const [contactPrefCheck, setContactPrefCheck] = useState([])

    const [showAlert, setShowAlert] = useState(false)
  // const [alertInfo, setAlertInfo] = useState({})

    const handleCheckboxOnChange = (e) => {
        console.log(e.target.name)
        const isChecked = e.target.checked
        if(e.target.name === 'contactPreference'){
            if(isChecked){     
                setContactPrefCheck([...contactPrefCheck, e.target.value] )       
            }else{
                const index = contactPrefCheck.indexOf(e.target.value)
                contactPrefCheck.splice(index, 1)
                setContactPrefCheck([...contactPrefCheck])
            } 

        }else{
            if(isChecked){     
                setSessionPrefCheck([...sessionPrefCheck, e.target.value] )       
            }else{
                const index = sessionPrefCheck.indexOf(e.target.value)
                sessionPrefCheck.splice(index, 1)
                setSessionPrefCheck([...sessionPrefCheck])
            }
        } 
    }

    // const handleCheckboxOnChange2 = (e) => {
    //     const isChecked = e.target.checked

    //     const stuff = {
    //         contactPreference: [contactPrefCheck, setContactPrefCheck],
    //         sessionPreference: [sessionPrefCheck, setSessionPrefCheck]
    //     }

    //     const stateCopy = stuff[e.target.name][0]
    //     const setStateFunc = stuff[e.target.name][1]

    //     // if(e.target.name === 'contactPreference') {
    //     //     setStateFunc = setContactPrefCheck
    //     //     stateCopy = [...contactPrefCheck]
    //     // } else {
    //     //     setStateFunc = setSessionPrefCheck
    //     //     stateCopy = [...sessionPrefCheck]
    //     // }

    //     if(isChecked){     
    //         setStateFunc([...stateCopy, e.target.value] )       
    //     }else{
    //         const index = stateCopy.indexOf(e.target.value)
    //         stateCopy.splice(index, 1)
    //         setStateFunc([...stateCopy])
    //     } 
    // }

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
         console.log(formData)
        addCounselling(formData)
        .then((newAppointmentId)=>{
            console.log(newAppointmentId)
            setShowAlert(true)

            // res will be an id of the new counselling booking
            // then some react to show the alert
       })

    }

  return (
    <>
    <Container>
   
    <header className="mt-4 header">
    <h1>Book in your session </h1>
    </header>
    <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>You're all booked in</Alert.Heading>
        <p>
            Thank you for making a booking with us. We'll send you a confirmation of your booking to your preferred method of contact. Please let us know if you need to cancel or rearrange your appointment.
            </p>
        <hr />
        <p className="mb-0">
            If you're currently in crisis we're here to help you or someone important to you right now. If this is an emergency please phone 111.
        </p>
    </Alert> 
    <section>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3"  controlId="name" onChange={handleChange}>
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="pronouns" onChange={handleChange}>
            <Form.Label>Pronouns</Form.Label>
            <Form.Control  name="pronouns" type="text" placeholder="Enter your preferred pronouns" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="roomNumber" onChange={handleChange}>
            <Form.Label>Room number</Form.Label>
            <Form.Control  name="roomNumber" type="text" placeholder="Enter your room number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="urgency" onChange={handleChange}>
        <Form.Label>Urgency</Form.Label>
            <Form.Select  name="urgency" aria-label="urgency">
                <option>Select urgency</option>
                <option value="Today">Today</option>
                <option value="1-2 days">1-2 days</option>
                <option value="This week">This week</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="appointmentDate" onChange={handleChange} >
            <Form.Label>Preferred date</Form.Label>
            <Form.Control  name="date" type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="time" onChange={handleChange}>
        <Form.Label>Preferred time</Form.Label>
            <Form.Select  name="time" aria-label="time">
                <option>Select time for your session</option>
                <option value="9am-10am">9 am-10 am</option>
                <option value="12pm-1pm">12 pm-1 pm</option>
                <option value="3pm-4pm">3 pm-4 pm</option>
                <option value="5pm-6pm">5 pm-6 pm</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="sessionPreference"  onChange={handleCheckboxOnChange}>
        <Form.Label>Preferred format of session</Form.Label>
            <Form.Check name="sessionPreference" type="checkbox" value= "Phone" label="Phone" />
            <Form.Check name="sessionPreference" type="checkbox" value= "Zoom" label="Zoom" />
            <Form.Check name="sessionPreference" type="checkbox" value= "Face to face" label="Face to face" />
        </Form.Group>

   
        <Form.Group  name="contactPreferences" className="mb-3" controlId="contactPreferences" onChange={handleCheckboxOnChange}>
        <Form.Label>Preferred form of contact </Form.Label>
            <Form.Check name="contactPreference" type="checkbox" value="Text" label="Text" />
            <Form.Check name="contactPreference" type="checkbox" value="Email" label="Email" />
            <Form.Check name="contactPreference" type="checkbox" value="Phone call" label="Phone call" />
            <Form.Check name="contactPreference" type="checkbox" value= "Room visit" label="Room visit" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactDetails" onChange={handleChange}>
            <Form.Label>Contact Details</Form.Label>
             <Form.Control  name="contactDetails" as="textarea" rows={3} placeholder="Enter how you'd like to be contacted here"/>
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