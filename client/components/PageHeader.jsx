import React from 'react'
import { Container, Row } from 'react-bootstrap'

function PageHeader(props) {
  return (
    <Container className="mt-4">
      <Row>
        <h1>{props.title}</h1>
      </Row>
      <Row>
        <p>{props.description}</p>
      </Row>
    </Container>
  )
}

export default PageHeader
