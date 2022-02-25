import React, { useState, useEffect } from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import Counsellor from './Counsellor'

import { fetchCounsellors } from '../apis/api'

// import Counsellor from './Counsellor'

function ShowCounsellors (props) {
  const [counsellor, setCounsellor] = useState([])

  useEffect (() => {
    getCounsellors()
  }, [])

  const getCounsellors = () => {
    fetchCounsellors()
    .then((arr) => {
      setCounsellor(arr)
      console.log(arr)
    })
  }

    return (
        <>
        <Container fluid="md">
            <Row>
                <h3>Our Counsellors</h3>
            </Row>
            <Row>
                <p>This should be where the description will be shown</p>
            </Row>
        </Container>

        {counsellor.map((counsellor) => {
          return (
            <Counsellor 
              key={counsellor.id}
              name={counsellor.name}
              pronouns={counsellor.pronouns}
              photo={counsellor.photo}
              speciality={counsellor.speciality}
              hours={counsellor.hours}
              biography={counsellor.biography}
            />
          )
        })}
        </>
    )
}

export default ShowCounsellors