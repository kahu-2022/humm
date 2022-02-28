import React, {useEffect, useState} from 'react'
import { Alert, Container } from 'react-bootstrap'

import Footer from './Footer'
import Session from './Session'

import { fetchSessions } from '../apis/api'

function Sessions () {

    const [sessions, setSessions] = useState(null)
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        fetchSessions()
        .then(sessions => setSessions(sessions))
        return null
    },[])

    return (
        <> 
        <Container>

        <header className="mt-4 header">
        <h3>Group therapy sessions & workshops</h3>
        </header>

        <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>Awesome! We'll see you there!</Alert.Heading>
        </Alert>
        
        { sessions ? sessions.map(sesh => { return <Session key={sesh.id} session={sesh} /> }
        ) 
        : null
    }

            <Footer />

        </Container>            
          
        </>

    )
}

export default Sessions