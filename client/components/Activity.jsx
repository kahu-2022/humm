import React, {useEffect, useState} from 'react'
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/Container"
import Footer from './Footer'
import ActivitySuggestion from './ActivitySuggestion'

import { fetchActivities } from '../apis/api'

function Activity (props) {

    const {activity} = props
    // const [activities, setActivities] = useState(null)
    const [showAlert, setShowAlert] = useState(false)

    const [showForm, setShowForm] = useState(false)

    // const appear = () => {
    //         setShowForm(signup)
    //         return null
    //       .catch(err => {
    //         console.log(err.message)
    //       })
    //   }

    useEffect(() => {
        console.log(activity)
    },[])

    // const handleTyping = (e) => {
    //     setMessage(e.target.value)
    //   }
    const handleChange = (e) => {

        // setSuggestion({
        //     ...suggestion,
        //     [e.target.name]: e.target.value 
        // })
      }
      
    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     addSuggestion(suggestion) 
    //     .then((newSuggestion)=> {
    //       setAlertInfo({
    //         name: newSuggestion[0].name
    //       })
    //   setShowAlert(true)
    //   })
      
    //   }

      const handleSubmit = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0)
        setShowAlert(true)
        setShowForm(false)
      }

    return (
        <> 
        <Container>

        <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>Awesome! We'll see you there!</Alert.Heading>
        </Alert>

            <p> <b>Activity: </b><em>{activity.title + ' // ' + activity.info}</em> </p>
            <p>{activity.date} {activity.time} in {activity.location}</p>
            <p>ran by: {activity.ran_by}</p>
            <Button variant="primary" type="submit" onClick={() => setShowForm(true)}>
            i'm keen!
            </Button>

            <section
            >
    {showForm ? <Form 
    // show={showForm}
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
            <br></br>

        </Container>
          
        </>
    )
}

export default Activity