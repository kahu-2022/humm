import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import { addNewFreeItem, getUserByEmail } from '../../apis/api'

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

function AddFreeItem (props) {
  const { user } = useAuth0()

  const [freeItem, addFreeItem] = useState({
    name: '',
    donorRoom: '',
    item: '',
    description: '',
    quantity: '',
    category: '',
    donateDate: '',
    status: '',
  })

  const [showAlert, setShowAlert] = useState(false)
  const [alertInfo, setAlertInfo] = useState({})

  useEffect(() => {
    //Get our user information to populate the form
    getUserByEmail(user.email).then((userFromDB) => {
      if (userFromDB[0].email === user.email) {
        addFreeItem({
          ...freeItem,
          name: userFromDB[0].name,
          donorRoom: userFromDB[0].roomNumber
        })
      }
    })
  }, [])

  const handleChange = (e) => {
    addFreeItem({
      ...freeItem,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewFreeItem(freeItem).then((newFreeItem) => {
      setAlertInfo({
        name: newFreeItem[0].name,
      })
      setShowAlert(true)
      window.scrollTo(0, 0)
    })
  }
  return (
    <>
      <Container className="mb-3">
        <header className="mt-4 header">
          <h2>Add Item</h2>
        </header>
        <Alert
          variant="success"
          show={showAlert}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>
            Kia ora {alertInfo.name}, thanks for adding a free item.
          </Alert.Heading>
          <p>You're also more than welcome to claim any free item up for grabs.</p>
        </Alert>
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
                defaultValue={freeItem?.name}
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
                defaultValue={freeItem?.donorRoom}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="item"
              onChange={handleChange}
            >
              <Form.Label>Item</Form.Label>
              <Form.Control
                name="item"
                type="text"
                placeholder="Enter the free item you'd like to donate"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="description"
              onChange={handleChange}
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder="Enter a description about it"
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
                placeholder="Enter the amount of item"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="category"
              onChange={handleChange}
              key={"e"}
            >
              <Form.Label>Category</Form.Label>
              <Form.Select name="category" aria-label="category">
                <option>Select a category</option>
                <option value="Home & Living">Home & Living</option>
                <option value="Books, Music & Movies">Books, Music & Movies</option>
                <option value="Health & Beauty">Health & Beauty</option>
                <option value="DIY, Garden & Pet">DIY, Garden & Pet</option>
                <option value="Electronics & Computer">Electronics & Computer</option>
                <option value="Toys & Games">Toys & Games</option>
                <option value="Clothing & Apparel">Clothing & Apparel</option>
                <option value="Stationery & Office">Stationery & Office</option>
                <option value="Sports & Outdoors">Sports & Outdoors</option>
                <option value="Others">Others</option>
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

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
    </>
  )
}

export default withAuthenticationRequired(AddFreeItem, {
  onRedirecting: () => <Loading />,
})
