import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Team() {
  return (

    <Container className='mt-3'>
    <h2>Meet the team behind humm</h2>
  <Row className='g-3 my-3'>
  <Col  xs={6} md={4}>
    <h5>Hareton </h5>
    <em> Product owner, co-Git lead, and co-scrum master</em>
    <p>Hareton loves dying their hair, their friend Ivy and yoga.</p>
  </Col>
  <Col  xs={6} md={4}>
    <h5>Rose </h5>
    <em>Front end lead, advisor</em>
    <p>Rose loves her mum, the colour pink and coffee. </p>
  </Col>
  <Col  xs={6} md={4}>
  <h5>John </h5>
  <em>Vibes lead</em>
  <p>John loves Marvel, dinosaurs and Marvel.</p>

  </Col>
  <Col xs={6} md={4} >
  <h5>Jad </h5>
  <em> Back end lead </em>
  <p>Jad loves the idea of getting a flame tattoo, his car not being stolen and caldereta.</p>
  </Col>
  <Col xs={6} md={4}>
  <h5>Courtney </h5>
  <em> Co-Git lead, and co-scrum master</em>
  <p>Courtney loves colour co-ordinated outfits, potatoes and sit-coms.</p>
  </Col>
  <Col xs={6} md={4}> 
  <h5>Enspiral Dev Academy </h5>
  <em> Kāhu class of 2022</em>
  </Col>
</Row>
</Container>

  )}

export default Team 