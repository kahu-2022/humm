import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light  " variant="light  ">
  <Container>
  <Navbar.Brand href="/">hummm</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">About</Nav.Link>
      <NavDropdown title="Mental Health" id="collapsible-nav-dropdown">
      <NavDropdown.Item href="/">Book counselling</NavDropdown.Item>
        <NavDropdown.Item href="/counsellors">Browse counsellors</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/sessions">Group Therapy</NavDropdown.Item>
        <NavDropdown.Item href="/">More resources</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/activities">Community Activities</Nav.Link>  
      <Nav.Link href="/">Food</Nav.Link>    
    </Nav>
    <Nav>
      <Nav.Link href="/">Another thing</Nav.Link>
      <Nav.Link eventKey={2} href="/">
      Another thing
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navigation