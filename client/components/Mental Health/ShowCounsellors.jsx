import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Counsellor from './Counsellor'
import PageHeader from '../PageHeader'

import { fetchCounsellors } from '../../apis/api'

function ShowCounsellors(props) {
  const [counsellor, setCounsellor] = useState([])

  useEffect(() => {
    getCounsellors()
  }, [])

  const getCounsellors = () => {
    fetchCounsellors().then((arr) => {
      setCounsellor(arr)
    })
  }

  return (
    <>
      <PageHeader
        title="Our Counsellors"
        description="Meet our team of friendly counselling staff!"
      />
      <Container>
        <Row className="g-3">
          {counsellor.map((counsellor) => {
            return (
              <Col md={6} lg={4} key={counsellor.id}>
                <Counsellor counsellor={counsellor} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default ShowCounsellors
