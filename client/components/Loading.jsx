import React from "react";
import { Container, Spinner } from "react-bootstrap";



const Loading = () => (
  <Container className="d-flex justify-content-center my-5">
    <Spinner animation="border" role="status" variant="primary">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  </Container>
);

export default Loading;