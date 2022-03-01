import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Bio from './Bio'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

function Home() {
  return (
    <>

      <Container className="home-page">
        <header className="mt-4 header">
          <h1>humm</h1>
        </header>
        
        <Image src="./images/vibes/building-cropped-2.jpeg" fluid="true" rounded="true" className="mt-2 mb-4" />
        <Button variant="primary" className="mb-3">
           Login
        </Button> <span></span>
        <Button variant="primary" className="mb-3">
           Register
        </Button>
        <br></br>
        <Button href="/about" variant="primary" className="mb-3">
          Browse as a guest
        </Button>
      </Container>
    </>
  )
}

export default Home
