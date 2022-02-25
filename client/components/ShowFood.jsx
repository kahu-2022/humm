import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap/Container"

import { fetchFood } from "../apis/api"

function ShowFood (props) {
  const [food, setFood] = useState([])
}

useEffect (() => {
  getFood()
}, [])

const getFood = () => {
  fetchFood()
  .then((arr) => {
    setFood(arr)
  })
}

return (
  <>
  <PageHeader title = 'Food' description = 'Food up for grabs. Please take what you need.'/>
  <Container>
    <Row className="g-3"> 
      {food.map((food) => {
        return (
          <Col md={6} lg={4}>
          <Counsellor 
            key={food.id}
            name={food.name}
          />
           </Col>
        )
      })}
    </Row>
  </Container>
  </>
)


export default ShowFood