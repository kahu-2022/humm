import React, { useState, useEffect } from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import PageHeader from './PageHeader'
import Volunteering from './Volunteering'
import Footer from './Footer'


import { fetchVolunteering } from "../apis/api"

function ShowVolunteering (props) {

  const [volunteering, setVolunteering] = useState(null)

useEffect (() => {
  fetchVolunteering()
  .then(arr => {
    console.log(arr)
    setVolunteering(arr)})
    return null
}, [])

return (
  <>
  <PageHeader title = 'Volunteer' description = 'Fill out the form to lend a helping hand!'/>
  <Container>
    <Row className="g-3">

      {volunteering ? volunteering.map(volunteer => {
        return (
          <>
          <Col md={6} lg={4}>
            <Volunteering 
            key={volunteer.id}
            title={volunteer.title}
            description={volunteer.description}
            when={volunteer.when}
            where={volunteer.where}
            />
          </Col>
          </>
        )
      }
    )
    : null }

    </Row>

    <Footer />
    
    </Container>
  </>
  )
}

export default ShowVolunteering