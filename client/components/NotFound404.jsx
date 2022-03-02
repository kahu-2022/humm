import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function NotFound404(props) {
  return (
     <Container className="d-flex justify-content-center my-5">
        <Row className="g-3">
          <h1>404 Page not found</h1>
        </Row>
      </Container>
  )
}

export default NotFound404