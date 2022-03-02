import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PageHeader from '../PageHeader'
import Loading from '../Loading'


import resources from '../../emergencyresources'

import { withAuthenticationRequired } from '@auth0/auth0-react'


function EmergencyResources() {
  return (
    <>
      <PageHeader title = 'Emergency Resources' description = 'Here are useful contacts in case of emergencies'/>

      <Container>
        <Row className="g-3"> 
          {resources.map(resource => {
            return <Col md={6} lg={4} key={resource.id}>
              <Card className="shadow p-3 mb-5 bg-white rounded">
                <Card.Header className="text-white bg-success mb-3"><strong>{resource.name}</strong></Card.Header>
                  <Card.Body>
                    <Card.Text>{resource.description}</Card.Text>
                    <Card.Text><strong>{resource['contact number']}</strong></Card.Text>
                    <Card.Text>{resource.email}</Card.Text>
                  </Card.Body>
              </Card>
            </Col>
            }
          )}
       </Row>
     </Container>
    </>
  )
}

export default withAuthenticationRequired(EmergencyResources, {
  onRedirecting: () => <Loading />,
});
