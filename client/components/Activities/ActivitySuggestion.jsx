import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

import { addSuggestion } from '../../apis/api'

function ActivitySuggestion(props) {

  const [suggestion, setSuggestion] = useState({
    name: '',
    pronouns:'',
    roomNumber: '',
    suggestion: ''
})

const [showAlert, setShowAlert] = useState(false)
const [alertInfo, setAlertInfo] = useState({})

const handleChange = (e) => {
      setSuggestion({
          ...suggestion,
          [e.target.name]: e.target.value 
      })
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      addSuggestion(suggestion) 
      .then((newSuggestion)=> {
        setAlertInfo({
          name: newSuggestion[0].name
        })
    setShowAlert(true)
    window.scrollTo(0, 0)
  })
}

return (
  <>
    <Container>
 
    <header className="mt-4 header">
      <h2> Make a suggestion! </h2>
      <p>Have a cool idea for an activity you'd like to see happen in the future? Let us know below, and we'll weave our magic and try to make it happen!</p>
    </header>
    <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>Kia ora {alertInfo.name}, thanks for your idea!</Alert.Heading>
        <p>
            We'll do our best to make it happen and let you know soon!
        </p>
        <hr />
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

    <Form.Group className="mb-3" controlId="suggestion" onChange={handleChange}>
            <Form.Label>Activity idea</Form.Label>
             <Form.Control  name="suggestion" as="textarea" rows={3} placeholder="Enter your idea here"/>
    </Form.Group>

    <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
      </section>
      <br></br>
    </Container>
  </> 
)
}

export default ActivitySuggestion