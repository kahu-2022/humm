import React, {useEffect, useState} from 'react'
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Container from "react-bootstrap/Container"
import Footer from './Footer'
import ActivitySuggestion from './ActivitySuggestion'

import { fetchActivities } from '../apis/api'

function Activities () {

    const [activities, setActivities] = useState(null)
    const [showAlert, setShowAlert] = useState(false)

    // const [message, setMessage] = useState('')

    useEffect(() => {
        fetchActivities()
        .then(activities => setActivities(activities))
        return null
    },[])

    // const handleTyping = (e) => {
    //     setMessage(e.target.value)
    //   }

      const handleSubmit = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0)
        setShowAlert(true)
      }

    return (
        <> 
        <Container>

        <header className="mt-4 header">
        <h3>Community Events/Activities</h3>
        </header>

        <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>Awesome! We'll see you there!</Alert.Heading>
        </Alert>

        <ul>
        { activities ? activities.map(act => {
        return <li key={act.id}>
            <b>Activity: </b><em>{act.title + ' // ' + act.info}</em>
            <p>{act.date} {act.time} in {act.location}</p>
            <p>ran by: {act.ran_by}</p>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
            i'm keen!
            </Button>
            <br></br>
            <br></br>
            </li>
        })
        : null}
        </ul>

            <ActivitySuggestion />

            <Footer />

        </Container>
          
        </>
    )
}

export default Activities