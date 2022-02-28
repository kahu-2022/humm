import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light  " variant="light  ">
      <Container>
        <Navbar.Brand href="/">humm</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="about">About us</Nav.Link>
            <NavDropdown title="Mental Health" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/counsellors">
                Browse counsellors
              </NavDropdown.Item>
              <NavDropdown.Item href="/booking">
                Book counselling
              </NavDropdown.Item>
              <NavDropdown.Item href="/sessions">
                Group Therapy
              </NavDropdown.Item>
              <NavDropdown.Item href="/emergencyresources">
                Emergency Resources
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/activities">Community Activities</Nav.Link>
            <Nav.Link href="/food">Food</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/room">Report an issue</Nav.Link>
            <Nav.Link href="/volunteering">Volunteering</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
