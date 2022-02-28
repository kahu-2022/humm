import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Navbar, NavDropdown, Nav, Container, Button } from "react-bootstrap"
// import NavDropdown from "react-bootstrap/NavDropdown"
// import Nav from "react-bootstrap/Nav"
// import Container from "react-bootstrap/Container"

import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated"

import { useAuth0 } from "@auth0/auth0-react"

function Navigation(props) {
  const { loginWithRedirect, logout } = useAuth0()

  // TODO: call the useAuth0 hook and destructure logout and loginWithRedirect
  function handleLogoff(e) {
    e.preventDefault()
    //console.log('log off')
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
    // console.log("sign in")
    loginWithRedirect()
  }


  return (
    <Navbar collapseOnSelect expand="lg" bg="light  " variant="light  ">
      <Container>
        <Navbar.Brand href="/">humm</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="about">About us</Nav.Link>
          </Nav>
          <IfAuthenticated>
            <Nav className="me-auto">
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
              <Nav.Link href="/room">Report an issue</Nav.Link>
            <Nav.Link href="/volunteering">Volunteering</Nav.Link>
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
