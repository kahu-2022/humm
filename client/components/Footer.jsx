import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

function Footer() {
  const sendUp = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Container>
      <footer className=" py-5 my-5 border-top">
        <Row>
          <Col md={6} lg={4}>
            `{' '}
            <Button variant="outline-secondary" onClick={sendUp}>
              <Image
                src="./images/back-to-top-icon.png"
                title="return to top"
                fluid="true"
                className="arrow"
              />{' '}
              Return to top of page
            </Button>
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <svg className="bi me-2" width="40" height="32"></svg>
            </a>
            <p className="text-muted">&copy; 2022</p>
          </Col>

          <Col md={6} lg={2}></Col>
          <Col xs={6} md={4} lg={2}>
            ` <h5>Mental Health</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Book counselling
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Browse counselling
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Group Therapy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Emergency resources
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={6} md={4} lg={2}>
            ` <h5>Other</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Community activities
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Food
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Report an issue
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Volunteering
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={6} md={4} lg={2}>
            ` <h5>About us </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </Container>
  )
}

export default Footer
