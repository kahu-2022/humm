import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Session from './Session'
import PageHeader from '../PageHeader'
import Loading from '../Loading'

import { fetchSessions } from '../../apis/api'

import { withAuthenticationRequired } from '@auth0/auth0-react'

function Sessions() {
  
    const [sessions, setSessions] = useState(null)
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        fetchSessions()
        .then(sessions => setSessions(sessions))
        return null
    },[])

    return (
        <> 
         <PageHeader
            title="Group therapy sessions and workshops"
            description="Some things are easier to do together. Join a group or come along for a one-off session, and build strategies for growth."
        />
      
        <Container >
            <Alert
                variant="success"
                show={showAlert}
                onClose={() => setShowAlert(false)}
                dismissible
            >
            <Alert.Heading>Awesome! We'll see you there!</Alert.Heading>
            </Alert>
        <Row className="g-3">
          {sessions?.map((sesh) => {
            return (
              <Col md={6} lg={4} key={sesh.id}>
                <Session key={sesh.id} session={sesh} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default withAuthenticationRequired(Sessions, {
  onRedirecting: () => <Loading />,
});

