import React, {useEffect, useState} from 'react'
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/Container"
import Footer from './Footer'
import ActivitySuggestion from './ActivitySuggestion'
import Activity from './Activity'

import { fetchActivities } from '../apis/api'

function Activities () {

    const [activities, setActivities] = useState(null)
    const [showAlert, setShowAlert] = useState(false)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        fetchActivities()
        .then(activities => setActivities(activities))
        return null
    },[])

    return (
        <> 
        <Container>

        <header className="mt-4 header">
        <h1>Community Events/Activities</h1>
        </header>

        <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>Awesome! We'll see you there!</Alert.Heading>
        </Alert>

        { activities ? activities.map(act => { return <Activity key={act.id} activity={act} /> }
        ) 
        : null
    }

            <ActivitySuggestion />

            <Footer />

        </Container>
          
        </>
    )
}

export default Activities