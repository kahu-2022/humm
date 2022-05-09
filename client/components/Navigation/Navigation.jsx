import React, { useState, useEffect } from "react"
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Button,
  Image,
} from "react-bootstrap"

// import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated"

import { useAuth0 } from "@auth0/auth0-react"
import AuthNav from "./AuthNav"
import MainNav from "./MainNav"

function Navigation(props) {
  const { loginWithRedirect, logout } = useAuth0()
  const { user, isAuthenticated, isLoading } = useAuth0()

  return (
    <Navbar collapseOnSelect expand="lg" className="navigation" variant="dark">
      <Container>
        <Navbar.Brand href="/">humm</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/about">About us</Nav.Link>
          </Nav>
          <Nav className="me-auto">

          <MainNav /> 
          </Nav>
          <AuthNav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
