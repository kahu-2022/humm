import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import { addNewFood, getUserByEmail } from '../../apis/api'

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

function AddFood(props) {
  const { user } = useAuth0()

  const [food, addFood] = useState({
    name: '',
    donorRoom: '',
    item: '',
    quantity: '',
    type: '',
    donateDate: '',
    useByDate: '',
    status: '',
  })

  const [showAlert, setShowAlert] = useState(false)
  const [alertInfo, setAlertInfo] = useState({})

  useEffect(() => {
    //Get our user information to populate the form
    getUserByEmail(user.email).then((userFromDB) => {
      if (userFromDB[0].email === user.email) {
        addFood({
          ...food,
          name: userFromDB[0].name,
          donorRoom: userFromDB[0].roomNumber
        })
      }
    })
  }, [])

  const handleChange = (e) => {
    addFood({ 
      ...food,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewFood(food).then((newFood) => {
      setAlertInfo({
        name: newFood[0].name,
      })
      setShowAlert(true)
      window.scrollTo(0, 0)
    })
  }
  return (
    <>
      <Container>
        <header className="mt-4 header">
          <h2>Add Food</h2>
        </header>
        <Alert
          variant="success"
          show={showAlert}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>
            Kia ora {alertInfo.name}, thanks for adding your food.
          </Alert.Heading>
          <p>You're also more than welcome to claim food up for grabs.</p>
        </Alert>
        <section>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="name"
              onChange={handleChange}
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter your name"
                defaultValue={food?.name}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="donorRoom"
              onChange={handleChange}
            >
              <Form.Label>Room Number</Form.Label>
              <Form.Control
                name="donorRoom"
                type="text"
                placeholder="Enter your room number"
                defaultValue={food?.donorRoom}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="item"
              onChange={handleChange}
            >
              <Form.Label>Food</Form.Label>
              <Form.Control
                name="item"
                type="text"
                placeholder="Enter the food you'd like to donate"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="quantity"
              onChange={handleChange}
            >
              <Form.Label>Amount</Form.Label>
              <Form.Control
                name="quantity"
                type="number"
                placeholder="Enter the amount of food you have to donate"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="type"
              onChange={handleChange}
              key={"e"}
            >
              <Form.Label>Type of Food</Form.Label>
              <Form.Select name="type" aria-label="type">
                <option>Select type of food</option>
                <option value="fruit">Fruit</option>
                <option value="veggies">Veggies</option>
                <option value="staple">Staple</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="donateDate"
              onChange={handleChange}
            >
              <Form.Label>Date Donated</Form.Label>
              <Form.Control name="donateDate" type="date" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="useByDate"
              onChange={handleChange}
            >
              <Form.Label>Use by Date</Form.Label>
              <Form.Control name="useByDate" type="date" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </section>
      </Container>
    </>
  )
}

export default withAuthenticationRequired(AddFood, {
  onRedirecting: () => <Loading />,
})
