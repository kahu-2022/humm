import React from "react";
import { Container, Spinner } from "react-bootstrap";



const NavLoading = () => (
  <Spinner animation="border" variant="light" size="sm">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
)

export default NavLoading;