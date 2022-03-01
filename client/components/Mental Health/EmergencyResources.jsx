import React, { useState, useEffect } from 'react'
import PageHeader from '../PageHeader'
import Loading from '../Loading'

import { Card, Row, Container, Col} from 'react-bootstrap'

import resources from '../../emergencyresources'

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';


function EmergencyResources() {
  return (
    <>
      <PageHeader title = 'Emergency Resources' description = 'Here are useful contacts in case of emergencies'/>

      <Container>
        <Row className="g-3"> 
          {resources.map(resource => {
            return <Col md={6} lg={4} key={resource.id}>
              <Card>
                <Card.Header className="text-white bg-success mb-3"><strong>{resource.name}</strong></Card.Header>
                  <Card.Body className="text-dark bg-light mb-3">
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
