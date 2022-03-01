import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
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

    </Container>
    </>
  )
}

export default About
