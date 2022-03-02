import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function Footer() {

  const sendUp = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Container>
      <footer className="py-5 my-5 border-top mb-2 pb-2">
        <Row>
          <Col md={6} lg={4}>
            
            <Button variant="outline-secondary" onClick={sendUp}>
              <Image
                src="/images/back-to-top-icon2.png"
                title="return to top"
                fluid="true"
                className="arrow"
              />
              Return to top
            </Button>

            {window.location.href === "http://localhost:3000/"  ?  null :
            <Button variant="outline-secondary" href="/">
              <Image
                src="/images/return-home-icon.png"
                title="return home"
                fluid="true"
                className="arrow"
              />
              Return home
            </Button> 
            }

            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <svg className="bi me-2" width="40" height="32"></svg>
            </a>

            </Col>

          <Col md={6} lg={2}></Col>
          <Col xs={6} md={4} lg={2}>
            <h5>Mental Health</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/booking" className="nav-link p-0 text-muted">
                  Book counselling
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/counsellors" className="nav-link p-0 text-muted">
                  Browse counsellors
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/sessions" className="nav-link p-0 text-muted">
                  Group Therapy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/emergencyresources" className="nav-link p-0 text-muted">
                  Emergency resources
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={6} md={4} lg={2}>
            <h5>Other</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/activities" className="nav-link p-0 text-muted">
                  Community activities
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/food" className="nav-link p-0 text-muted">
                  Food
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/free" className="nav-link p-0 text-muted">
                  Free Item
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/dinner" className="nav-link p-0 text-muted">
                  Dinner
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/room" className="nav-link p-0 text-muted">
                  Report an issue
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/volunteering" className="nav-link p-0 text-muted">
                  Volunteering
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={6} md={4} lg={2}>
            <h5>About us </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/about" className="nav-link p-0 text-muted">
                  The Project
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/team" className="nav-link p-0 text-muted">
                  The Team
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container>
              <p className="text-muted mt-2">&copy; 2022</p>
            </Container>
          </Col>
        </Row>
       
      </footer>
    </Container>
  )
}

export default Footer
