import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Bio from './Bio'
import Button from 'react-bootstrap/Button'
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
      <Bio />
      <br></br>
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
