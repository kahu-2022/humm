import React from 'react'
import { Container, Row } from 'react-bootstrap'

function PageHeader (props) {
  return (
    <Container fluid="md" className="mt-4">
            <Row>
                <h3>{props.title}</h3>
            </Row>
            <Row>
                <p>{props.description}</p>
            </Row>
    </Container>
  )
}

export default PageHeader