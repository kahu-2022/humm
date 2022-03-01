import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Navbar, NavDropdown, Nav, Container, Button, Image } from "react-bootstrap"

import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated"

import { useAuth0 } from "@auth0/auth0-react"


function Navigation(props) {
  const { loginWithRedirect, logout } = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()
    logout({ returnTo: window.location.origin })
  }

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }


  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container className="navigation">
        <Navbar.Brand href="/">humm</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/about">About us</Nav.Link>
          </Nav>
          <IfAuthenticated>
            <Nav className="me-auto">
              <NavDropdown className="me-auto" title="Mental Health" id="collapsible-nav-dropdown">
                <NavDropdown.Item className="me-auto" href="/counsellors">
                  Browse counsellors
                </NavDropdown.Item>
                <NavDropdown.Item className="me-auto" href="/booking">
                  Book counselling
                </NavDropdown.Item>
                <NavDropdown.Item className="me-auto"href="/sessions">
                  Group Therapy
                </NavDropdown.Item>
                <NavDropdown.Item className="me-auto" href="/emergencyresources">
                  Emergency Resources
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/activities">Community Activities</Nav.Link>
              <Nav.Link href="/food">Food</Nav.Link>
              <Nav.Link href="/room">Report an issue</Nav.Link>
            <Nav.Link href="/volunteering">Volunteering</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="/resident">
              <Image
                src="./images/user-icon.png"
                title="my page"
                fluid="true"
                className="arrow"
              />
              </Nav.Link>
            </Nav>
          <Nav>
            <Nav.Link onClick={handleLogoff}>Logout</Nav.Link>
          </Nav>
          </IfAuthenticated>          
          
        </Navbar.Collapse>

        <IfNotAuthenticated>
          <Button variant="primary" onClick={handleSignIn}>Login</Button>
        </IfNotAuthenticated>
      </Container>
    </Navbar>
  )
}

export default Navigation
