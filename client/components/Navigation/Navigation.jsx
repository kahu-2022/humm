import React, { useState, useEffect } from "react"
import { Navbar, NavDropdown, Nav, Container, Button, Image } from "react-bootstrap"

// import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated"

import { useAuth0 } from "@auth0/auth0-react"
import AuthNav from "./AuthNav"



function Navigation(props) {



  const { loginWithRedirect, logout } = useAuth0()
  const { user ,isAuthenticated, isLoading} = useAuth0();

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
              <NavDropdown title="Free Marketplace" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/food">
                  Food
                </NavDropdown.Item>
                <NavDropdown.Item href="/dinner">
                  Free Dinner
                </NavDropdown.Item>
                <NavDropdown.Item href="/free">
                  Free Items
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/room">Report an issue</Nav.Link>
            <Nav.Link href="/volunteering">Volunteering</Nav.Link>
            </Nav>
           

            <AuthNav />
          
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Navigation