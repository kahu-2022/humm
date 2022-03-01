import React, { useEffect, useState, useMemo } from 'react'
import { Alert, Container, Row, Col, Button, Form } from 'react-bootstrap'
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

  const categories = ['All', 'Health', 'Fun', 'Culture', 'Cuisine']

  const [category, setCategory] = useState('') 

  const filteredData = useMemo(() => {  
    if (!category || category === "All") return activities

    return activities.filter(item => item.category === category) 
  }, [category])

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
        <header className="mt-4 header">
          <h2>Browse Activities</h2>
        </header>
        <Form.Group
          className="mb-3"
          controlId="activityCategory"
          key={'e'}
          onChange={e => setCategory(e.target.value)}
          >
            <Form.Label>Check out our latest events and activities</Form.Label>
              <Form.Select name="activityCategory" aria-label="activityCategory" >
                <option>Select Category</option>
                  {categories.map((category, index) => {
                    return (<option value={category} key={index}>{category}</option>)
                  })}
              </Form.Select>
          </Form.Group>
        <Row className="g-3">
        {filteredData?.map((act) => {
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
