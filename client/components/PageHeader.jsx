import React from 'react'
import { Container, Row } from 'react-bootstrap'

function PageHeader(props) {
  return (
    <Container className="mt-4">
      <Row>
        <h2>{props.title}</h2>
      </Row>
      <Row>
        <p className="text-muted">{props.description}</p>
      </Row>
    </Container>
  )
}

export default PageHeader
