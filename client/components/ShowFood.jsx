import React, { useState, useEffect } from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import PageHeader from './PageHeader'
import Food from './Food' 
import AddFood from "./AddFood"

import { fetchFood } from "../apis/api"

function ShowFood (props) {
  const [food, setFood] = useState([])

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
    {/* <Button>Donate Food </Button> */}
    <Row className="g-3"> 
      { food ? food.map(food => {
        return (
          <Col md={6} lg={4}>
            <Food 
            key={food.id}
            name={food.name}
            donorRoom={food.donorRoom}
            item={food.item}
            quantity={food.quantity}
            donateDate={food.donateDate}
            useByDate={food.useByDate}
            status={food.status}
            claimedBy={food.claimedBy}
            claimerRoom={food.claimerRoom}
            />
          </Col>
        )
            }
            )
        : null
      }
    </Row>
    < AddFood />
  </Container>
  </>
  )
}

export default ShowFood