import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

function Team () {
  return (

    <Container className='mt-3'>
    <h2>Meet the team behind humm</h2>
  <Row className='g-3 my-3'>
  <Col  xs={6} md={4}>
    <h5>Hareton 👾</h5>
    <em> Product Owner, Co-Git Lead & Co-Scrum Lead</em>
    <p>Hareton loves dyeing their hair, yoga and their friend Ivy.</p>
  </Col>
  <Col  xs={6} md={4}>
    <h5>Rose 💅</h5>
    <em>Front-End Lead & Advisor</em>
    <p>Rose loves her mum, the colour pink and coffee. </p>
  </Col>
  <Col  xs={6} md={4}>
  <h5>John 🦸 </h5> 
  <em>Vibes Lead</em>
  <p>John loves Marvel, dinosaurs and Marvel.</p>

  </Col>
  <Col xs={6} md={4} >
  <h5>Jad 😎  </h5>
  <em> Back-End Lead </em>
  <p>Jad loves the idea of getting a flame tattoo, his car not being stolen and caldereta.</p>
  </Col>
  <Col xs={6} md={4}>
  <h5>Courtney 🤠</h5>
  <em> Co-Git Lead & Co-Scrum Master</em>
  <p>Courtney loves colour co-ordinated outfits, potatoes and sit-coms.</p>
  </Col>
  <Col xs={6} md={4}> 
  </Col>
  <Col>
    <Image src="./images/cuties.jpg" fluid="true" rounded="true" className="mt-2 mb-4" />
  </Col>
  </Row>
  <Row className='g-3 my-3'>
  <Col>
  <em className="intro-text">humm is a project made from love and caffeine, plus the support of our fellow Kāhu 2022 cohort and awesome facillitators here at Enspiral Dev Academy. &#x1F495; </em>
  </Col>
</Row>
</Container>

  )}

export default Team 