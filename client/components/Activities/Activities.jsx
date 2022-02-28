import React, {useEffect, useState} from 'react'
import Alert from "react-bootstrap/Alert"
import Container from "react-bootstrap/Container"
import ActivitySuggestion from './ActivitySuggestion'
import Activity from './Activity'

import { fetchActivities } from '../../apis/api'

function Activities () {

    const [activities, setActivities] = useState(null)
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        fetchActivities()
        .then(activities => setActivities(activities))
        return null
    },[])

    return (
        <> 
        <PageHeader title = 'Community Events/Activities' description = 'Meet our team of friendly counselling staff!'/>
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

        {activities?.map((act) => {
          return (
            <Col md={6} lg={4} key={act.id}>
              <Activity key={act.id} activity={act} />
            </Col>
          )
        })}
        </Row>

        <ActivitySuggestion />
      </Container>
    </>
  )
}

export default Activities
