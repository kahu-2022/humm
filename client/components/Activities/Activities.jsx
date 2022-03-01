import React, { useEffect, useState } from 'react'
import { Alert, Container, Row, Col, Button } from 'react-bootstrap'
import ActivitySuggestion from './ActivitySuggestion'

import PageHeader from '../PageHeader'
import Activity from './Activity'
import Loading from '../Loading'

import { fetchActivities } from '../../apis/api'

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

function Activities() {
  const [activities, setActivities] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  const [showAddActivities, setShowAddActivities] = useState(false)

  const toggleForm = () => {
    setShowAddActivities(!showAddActivities)
  }

  const renderForm = () => {
    return <ActivitySuggestion />
  }

  useEffect(() => {
    fetchActivities().then((activities) => setActivities(activities))
    return null
  }, [])

  return (
    <>
      <PageHeader
        title="Community Events/Activities"
        description="Sign up for our free community events and activities"
      />
      <Container>
        <Alert
          variant="success"
          show={showAlert}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>Awesome! We'll see you there!</Alert.Heading>
        </Alert>
        <Button variant="outline-primary" className="my-3" onClick={toggleForm}>
          {showAddActivities ? 'Hide' : 'Add Activities'}
        </Button>
        {showAddActivities && renderForm()}
      </Container>
      <Container>
        <Row className="g-3">

        {activities?.map((act) => {
          return (
            <Col md={6} lg={4} key={act.id}>
              <Activity key={act.id} activity={act} />
            </Col>
          )
        })}
        </Row>
      </Container>
    </>
  )
}

export default withAuthenticationRequired(Activities, {
  onRedirecting: () => <Loading />,
});
