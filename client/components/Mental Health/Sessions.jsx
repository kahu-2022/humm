import React, { useEffect, useState } from 'react'
import { Alert, Container, Row, Col } from 'react-bootstrap'

import Session from './Session'
import PageHeader from '../PageHeader'
import Loading from '../Loading'


import { fetchSessions } from '../../apis/api'

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';


function Sessions() {1
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
            description="Meet our team of friendly counselling staff!"
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

