import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import ActivitySuggestion from './ActivitySuggestion'
import Activity from './Activity'
import PageHeader from '../PageHeader'

import { fetchActivities } from '../../apis/api'

function Activities() {
  const [activities, setActivities] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    fetchActivities().then((activities) => setActivities(activities))
    return null
  }, [])

  return (
    <>
      <PageHeader
        title="Community Events/Activities"
        description="Meet our team of friendly counselling staff!"
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
        <Row className="g-3">
<<<<<<< HEAD:client/components/Activities.jsx

        {activities?.map((act) => {
          return (
            <div className="shadow p-3 mb-5 bg-white rounded">

            <Col md={6} lg={4} key={act.id}>
              <Activity key={act.id} activity={act} />
            </Col>
            </div>
          )
        })}
=======
          {activities?.map((act) => {
            return (
              <Col md={6} lg={4} key={act.id}>
                <Activity key={act.id} activity={act} />
              </Col>
            )
          })}
>>>>>>> ee56dd0d3e8b01679d9397fcf69f94cd8b3be013:client/components/Activities/Activities.jsx
        </Row>

        <ActivitySuggestion />
      </Container>
    </>
  )
}

export default Activities
