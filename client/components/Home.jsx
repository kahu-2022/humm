import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Bio from "./Bio"
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

function Home() {
  return (
    <>
    <Container>
    <header className="mt-4 header">
    <h1>Welcome to humm!</h1>
    </header>

    <Image src='./images/vibes/building.jpg' fluid='true' rounded='true'/>
    
    <section className="main">
      <br></br>
      <Bio />
      <br></br>
    </section>

    <Button variant="primary" className='mb-3'>Resident Login</Button> <span></span><Button variant="primary" className='mb-3'>Resident Register</Button>
    <br></br>
    <Button href="/about" variant="primary" className='mb-3'>Browse as a guest</Button>

    </Container>
    </>
    
  )
}

export default Home