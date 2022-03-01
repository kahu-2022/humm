import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageHeader from '../PageHeader'
import Volunteering from './Volunteering'
import Loading from '../Loading'


import { fetchVolunteering } from '../../apis/api'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

function ShowVolunteering(props) {
  const [volunteering, setVolunteering] = useState([])

  useEffect(() => {
    fetchVolunteering().then((arr) => setVolunteering(arr))
  }, [])

  return (
    <>
      <PageHeader
        title="Volunteer"
        description="Fill out the form to lend a helping hand!"
      />
      <Container>
        <Row className="g-3">
          {volunteering
            ? volunteering.map((volunteer) => {
                return (
                  <Col md={6} lg={4} key={volunteer.id}>
                    <Volunteering
                      title={volunteer.title}
                      description={volunteer.description}
                      when={volunteer.when}
                      where={volunteer.where}
                    />
                  </Col>
                )
              })
            : null}
        </Row>
      </Container>
    </>
  )
}

export default withAuthenticationRequired(ShowVolunteering, {
  onRedirecting: () => <Loading />,
});
