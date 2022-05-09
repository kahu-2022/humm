import React, { useState, useEffect } from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import PageHeader from "../PageHeader"
import Volunteering from "./Volunteering"
import Loading from "../Loading"

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import { fetchVolunteering, signUpForVolunteering } from "../../apis/api"

function ShowVolunteering(props) {
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
        <Row className="g-3">
          {volunteering
            ? volunteering.map((volunteer) => {
                return (
                  <div className="shadow p-3 mb-5 bg-white rounded" key={volunteer.id}>
                    <Col md={6} lg={4} >
                      <Volunteering
                        title={volunteer.title}
                        description={volunteer.description}
                        when={volunteer.when}
                        where={volunteer.where}
                      />
                    </Col>
                  </div>
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
