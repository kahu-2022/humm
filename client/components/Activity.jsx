import React, {useEffect, useState} from 'react'
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Form from 'react-bootstrap/Form'
import { Container, Card } from 'react-bootstrap'

function Activity (props) {

    const {activity} = props
    const [showAlert, setShowAlert] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [showButton, setShowButton] = useState(true)
    const [showConf, setShowConf] = useState(false)

    useEffect(() => {
        // console.log(activity)
    },[])

    const handleChange = (e) => {
    }

      const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true)
        setShowForm(false)
        setShowConf(true)
      }

      const formAppear = () => {
        setShowForm(true)
        setShowButton(false)
    }

    const cancelBooking = () => {
        alert('All good!')
        setShowButton(true)
        setShowConf(false)
    }

    return (
        <> 
        <Container fluid="true">

        <Card className="py-3" className='m-1'>
           <Card.Img as="img" src={activity.image} className='mt-3' />
            <Card.Body>
                <Card.Title>
                    <b>{activity.title} </b>
                </Card.Title>

            <p> <em> {activity.info}</em> </p>

            <p>{activity.date} {activity.time} in {activity.location}</p>
            <p>ran by: {activity.ran_by}</p>
            {showButton ? <Button variant="primary" type="submit" onClick={formAppear}>
            I'm keen!
            </Button> : null }
            {showConf ? <p>You're all booked! <Button variant="success" onClick={cancelBooking}>Need to cancel?</Button> </p> : null }
            <br></br>

    {showForm ? <Form 
    onSubmit={handleSubmit}>
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

    <Button variant="primary" type="submit" >
            Submit
        </Button>
        </Form> : null }

      <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>Awesome! We'll see you there!</Alert.Heading>
        </Alert>

        </Card.Body>
            </Card>

        <br></br>

        </Container>
          
        </>
    )
}

export default Activity