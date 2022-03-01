import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

function About() {
  return (
    <>
    <Container>
    <header className="mt-4 header">
    <h1>Welcome to humm!</h1>
    </header>

    <Image src='./images/vibes/wall.jpg' fluid='true' rounded='true'/>
    
    <section className="main">
      <br></br>
      <p>
        We’re a community dedicated to housing and feeding vulnerable members of our whānau, as well as providing them with resources and strategies to recover and grow.
      </p>
      <p>
        We offer residents clean and safe accommodation facilities, free food for their rooms as well as daily meals, and a variety of services such as counselling, group therapy workshops, skill development and job search support, and a wide and ever-changing range of community activities and events, from yoga and hikes to movie nights and cooking classes.
      </p>
      <p>
        Our aims are not only to house and feed our friends, but to also give them the opportunity to recover from trauma and find purpose, and feel connected to and inspired by the world around them.

        Honouring te ao Māori is a central commitment here at humm, and our project is inspired by many brilliant social initiatives that have come before us and still exist alongside us, both in Aotearoa and abroad. We’re always looking for ways to improve our model, and we are equally happy to share what we’ve learnt with others.
      </p>
      <p>
        If you know someone struggling who we could assist, would like to volunteer at humm or make a koha, or want to get in touch for any other reason, please reach out. We always love meeting new faces and welcome any support and feedback of our project/community.
      </p>
    </section>

    <Image src='./images/vibes/frenz.jpg' fluid='true' thumbnail='true' rounded='true' />


    <section>
    <br></br>
      <p>Contact us:</p>
      <p>Phone</p>
      <p>Email</p>
    </section>
    <Container>
      <h2>Meet the team behind humm</h2>
    <Row>
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
  </Row>

  <Row>
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
    </Container>
    </>
  )
}

export default About
