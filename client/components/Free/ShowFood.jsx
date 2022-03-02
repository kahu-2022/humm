import React, { useState, useEffect, useMemo } from "react"
import { Button, Container, Row, Col, Alert, Form, Card } from "react-bootstrap"
import PageHeader from "../PageHeader"
import Food from "./Food"
import AddFood from "./AddFood"
import Loading from "../Loading"

import { fetchFood } from "../../apis/api"

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"

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

  const categories = ["All", "fruit", "veggies", "staple"]

  const [category, setCategory] = useState("All")

  const filteredData = foodCategory()

  function foodCategory() {
    if (!category || category === "All") {
      return food
    } else {
      return food.filter((item) => item.type === category)
    }
  }

  useEffect(() => {
    fetchFood().then((arr) => {
      setFood(arr)
    })
  }, [])

  const setClaimed = (foodItem) => {
    setClaimedFood(foodItem[0])

    const newSetFood = food.map((aFood) => {
      if (aFood.id === foodItem[0].id) {
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

        <Row className="mb-3">
          <Col sm={6} lg={4} className="mb-3">
            <Form.Group
              controlId="foodCategory"
              onChange={(e) => setCategory(e.target.value)}
            >
              <Form.Select name="foodCategory" aria-label="foodCategory">
                <option>Filter on food category</option>
                {categories.map((category, index) => {
                  return (
                    <option value={category} key={index}>
                      {category}
                    </option>
                  )
                })}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col sm={6} lg={{ span: 3, offset: 5 }} className="d-grid gap-2 mb-3">
            <Button variant="primary" onClick={toggleForm}>
              {showAddFood ? "Hide" : "Add Food"}
            </Button>
            {showAddFood && renderForm()}
          </Col>
        </Row>
      </Container>
      <Container>
      <Alert
          variant="success"
          show={showAlert}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>
            Thanks {claimedFood?.claimedBy}, you've claimed {claimedFood?.item}!
          </Alert.Heading>
          <p>You can pick your food up from the desk near the front door.</p>
        </Alert>
        <Row className="g-3">
          {filteredData
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

export default withAuthenticationRequired(ShowFood, {
  onRedirecting: () => <Loading />,
})
