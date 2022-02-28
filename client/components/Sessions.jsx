import React, { useEffect, useState } from "react"
import { Alert, Container, Row, Col } from "react-bootstrap"

import Footer from "./Footer"
import Session from "./Session"
import PageHeader from "./PageHeader"

import { fetchSessions } from "../apis/api"

function Sessions() {
  const [sessions, setSessions] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    fetchSessions().then((sessions) => setSessions(sessions))
    return null
  }, [])

  return (
    <>
      <PageHeader
        title="Group therapy sessions & workshops"
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
          {sessions?.map((sesh) => {
            return (
              <div className="shadow p-3 mb-5 bg-white rounded">
              <Col md={6} lg={4} key={sesh.id}>
                <Session key={sesh.id} session={sesh} />
              </Col>
              </div>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Sessions
