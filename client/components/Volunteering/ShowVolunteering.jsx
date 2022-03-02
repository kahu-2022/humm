import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import PageHeader from '../PageHeader'
import Volunteering from './Volunteering'
import Loading from '../Loading'

import { withAuthenticationRequired } from '@auth0/auth0-react'
import { fetchVolunteering } from '../../apis/api'

function ShowVolunteering (props) {
  const [volunteering, setVolunteering] = useState([])

  useEffect(() => {
    fetchVolunteering().then((arr) => setVolunteering(arr))
  }, [])

  return (
    <>
      <PageHeader
        title="Volunteer"
        description="Feel free to help us out around the place."
      />

      <Container>
        <Row >
          {volunteering
            ? volunteering.map((volunteer) => {
                return (
                      <Volunteering
                        volunteer = {volunteer}
                      />
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
})
