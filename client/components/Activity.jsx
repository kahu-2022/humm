import React, {useEffect, useState} from 'react'
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Form from 'react-bootstrap/Form'
import { Container, Card, Image } from 'react-bootstrap'

function Activity (props) {

    const {activity} = props
    const [showAlert, setShowAlert] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [showButton, setShowButton] = useState(true)

    useEffect(() => {
        // console.log(activity)
    },[])

    const handleChange = (e) => {
    }

      const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true)
        setShowForm(false)
      }

    //   const hideButton = () => {
    //     setShowButton(false)
    //   }

    return (
        <> 
        <Container>

        <Card className="py-3">
            <Card.Body>

            <p> <b>{activity.title} </b><em>   // {activity.info}</em> </p>
            <p>{activity.date} {activity.time} in {activity.location}</p>
            <p>ran by: {activity.ran_by}</p>
            <Button variant="primary" type="submit" onClick={() => setShowForm(true), () => setShowButton(false)}>
            I'm keen!
            </Button>

            </Card.Body>
            </Card>

            <section
            >
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
      </section>

        <br></br>

      <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>Awesome! We'll see you there!</Alert.Heading>
        </Alert>

            <br></br>

        </Container>
          
        </>
    )
}

export default Activity