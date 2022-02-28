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

        <Image src="./images/vibes/wall.jpg" fluid="true" rounded="true" />

        <section className="main">
          <br></br>
          <h4> (an extended biooooo...) </h4>
          <Bio />
          <h4> (nag hareton to finish it lol) </h4>
          <br></br>
        </section>

        <Image src="./images/vibes/frenz.jpg" fluid="true" rounded="true" />

        <section>
          <br></br>
          <h3>Contact us:</h3>
          <h5>phone...</h5>
          <h5>email...</h5>
        </section>
      </Container>
    </>
  )
}

export default About
