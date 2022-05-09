import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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