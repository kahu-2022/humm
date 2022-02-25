import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Bio from "./Bio"


function Home(props) {
  return (
    <>
    <Container>
    <header className="mt-4 header">
    <h1>Welcome to Hummm</h1>
    </header>
    
    <section className="main">
      <br></br>
      <Bio />
    </section>
    </Container>
    </>
    
  )
}

export default Home