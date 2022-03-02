import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function PageHeader(props) {
  return (
    <Container className="pt-5 pb-2">
      <Row>
        <Col xs={12}>
          <h2 className="page-title">{props.title}</h2>
          <p className="text-muted">{props.description}</p>
        </Col>
        <Col className="d-flex justify-content-end"></Col>
      </Row>
    </Container>
  )
}

export default PageHeader
