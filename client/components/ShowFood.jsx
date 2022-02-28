import React, { useState, useEffect } from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import PageHeader from './PageHeader'
import Food from './Food' 
import AddFood from "./AddFood"

import { fetchFood } from "../apis/api"

function ShowFood (props) {
  const [food, setFood] = useState([])

  const [showAddFood, setShowAddFood] = useState(false)

  const toggleForm = () => {
    setShowAddFood(!showAddFood)
  }

  const renderForm = () => {
    return (<AddFood />)
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
    <Row>
     <Button onClick={toggleForm}>{showAddFood ? 'Hide' : 'Add Food'}</Button>
    {showAddFood && renderForm()}
    </Row>
    
    <Row className="g-3"> 
      { food ? food.map(food => {
        return (
          food.status != 'Claimed' ?
          <Col md={6} lg={4}>
            <Food 
            key={food.id}
            food={food}
            />
          </Col> : null
        )
            }
            )
        : null
      }
    </Row>
  </Container>
  </>
  )
}

export default ShowFood