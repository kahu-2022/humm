import React, { useState, useEffect } from "react"
import { Button, Container, Row, Col, Alert } from "react-bootstrap"
import PageHeader from "./PageHeader"
import Food from "./Food"
import AddFood from "./AddFood"

import { fetchFood } from "../apis/api"

function ShowFood(props) {
  const [food, setFood] = useState([])

  const [showAddFood, setShowAddFood] = useState(false)
  const [claimedFood, setClaimedFood] = useState()

  const [showAlert, setShowAlert] = useState(false)

  const toggleForm = () => {
    setShowAddFood(!showAddFood)
  }

  const renderForm = () => {
    return <AddFood />
  }

  useEffect(() => {
    getFood()
  }, [])

  const getFood = () => {
    fetchFood().then((arr) => {
      setFood(arr)
    })
  }

  const setClaimed = (foodItem) => {
    //To put information in the alert
    setClaimedFood(foodItem[0])

    const newSetFood = food.map((aFood) => {
      if (aFood.id === foodItem.id) {
        aFood.status = "Claimed"
      }
      return aFood
    })
    setFood(newSetFood)
    setShowAlert(true)
  }

  return (
    <>
      <PageHeader
        title="Food"
        description="Food up for grabs. Please take what you need."
      />
      <Container>
        <Alert
          variant="success"
          show={showAlert}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>
            Kia ora {claimedFood?.claimedBy}, that's all yours!
          </Alert.Heading>
        </Alert>
        <Row>
          <Button className="my-3" onClick={toggleForm}>
            {showAddFood ? "Hide" : "Add Food"}
          </Button>
          {showAddFood && renderForm()}
        </Row>
        <Row className="g-3">
          {food
            .filter((food) => food.status != "Claimed")
            .map((food) => {
              return (
                <Col key={food.id} md={6} lg={4}>
                  <Food food={food} setClaimed={setClaimed} />
                </Col>
              )
            })}
        </Row>
      </Container>
    </>
  )
}

export default ShowFood
