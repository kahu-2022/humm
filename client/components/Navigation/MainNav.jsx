import React, { useState, useEffect } from "react"
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Button,
  Image,
} from "react-bootstrap"

import {
  useAuth0,
  logout,
  withAuthenticationRequired,
} from "@auth0/auth0-react"
import NavLoading from "../NavLoading"

function MainNav(props) {
  const { user, logout, isAuthenticated, isLoading, loginWithRedirect } =
    useAuth0()


  return (
    <Nav className="me-auto">
      {isAuthenticated ? (
        <>
          <NavDropdown title="Mental Health" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/counsellors">
              Browse counsellors
            </NavDropdown.Item>
            <NavDropdown.Item href="/booking">
              Book counselling
            </NavDropdown.Item>
            <NavDropdown.Item href="/sessions">Group Therapy</NavDropdown.Item>
            <NavDropdown.Item href="/emergencyresources">
              Emergency Resources
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/activities">Activities</Nav.Link>
          <NavDropdown title="Free stuff" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/food">Food</NavDropdown.Item>
            <NavDropdown.Item href="/free">Items</NavDropdown.Item>
            <NavDropdown.Item href="/dinner">Dinner</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/room">Report an issue</Nav.Link>
          <Nav.Link href="/volunteering">Volunteering</Nav.Link>
        </>
      ) : null}
    </Nav>
  )
}

export default MainNav
