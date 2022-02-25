import React, {useEffect, useState} from 'react'
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

import { fetchSessions } from '../apis/api'

function Sessions () {

    const [sessions, setSessions] = useState(null)
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        fetchSessions()
        .then(sessions => setSessions(sessions))
        return null
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true)
      }


    return (
        <> 

        <header className="mt-4 header">
        <h3>Group therapy sessions & workshops</h3>
        </header>

        <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>Awesome! We'll see you there!</Alert.Heading>
        </Alert>
        
        <ul>
        { sessions ? sessions.map(sesh => {
        return <li key={sesh.id}>
            <b>session: </b><em>{sesh.title + ' // ' + sesh.info}</em>
            <p>{sesh.date} {sesh.time} in {sesh.location}</p>
            <p>ran by: {sesh.ran_by}</p>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
            i'm keen!
            </Button>
            <br></br>
            <br></br>
            </li>
        })
        : null}
        </ul>
          
        </>

    )
}

export default Sessions