import React, { useState, useEffect, useMemo } from 'react'
import { Button, Container, Row, Col, Alert, Form } from 'react-bootstrap'
import PageHeader from '../PageHeader'
import Food from './Food'
import AddFood from './AddFood'
import Loading from '../Loading'

import { fetchFood } from '../../apis/api'

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';


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

  const categories = ['All', 'fruit', 'veggies', 'staple']

  const [category, setCategory] = useState('') 

  const filteredData = useMemo(() => {  
    if (!category || category === "All") return food

    return food.filter(item => item.type === category) 
  }, [category])

  useEffect(() => {
    fetchFood().then((arr) => {
      setFood(arr)
    })
  }, [])

  const setClaimed = (foodItem) => {
    setClaimedFood(foodItem[0])

    const newSetFood = food.map((aFood) => {
      if (aFood.id === foodItem[0].id) {
        aFood.status = 'Claimed'
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
            Thanks {claimedFood?.claimedBy}, you've claimed {claimedFood?.item}!
          </Alert.Heading>
          <p>You can pick your food up from the desk near the front door.</p>
        </Alert>
        <Button variant="outline-primary" className="my-3" onClick={toggleForm}>
          {showAddFood ? 'Hide' : 'Add Food'}
        </Button>
        {showAddFood && renderForm()}
      </Container>
      <Container>
        <header className="mt-4 header">
          <h2>Search Food</h2>
        </header>
        <Form.Group
          className="mb-3"
          controlId="foodCategory"
          key={'e'}
          onChange={e => setCategory(e.target.value)}
          >
            <Form.Label>Type of Food</Form.Label>
              <Form.Select name="foodCategory" aria-label="foodCategory" >
                <option>Select Category</option>
                  {categories.map((category, index) => {
                    return (<option value={category} key={index}>{category}</option>)
                  })}
              </Form.Select>
          </Form.Group>
        <Row className="g-3">
          {filteredData
            .filter((food) => food.status != 'Claimed')
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
});