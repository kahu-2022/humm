import React, { useState, useEffect, } from 'react'
import { Button, Container, Row, Col, Alert, Form } from 'react-bootstrap'
import PageHeader from '../PageHeader'
import FreeItem from './FreeItem'
import AddFreeItem from './AddFreeItem'
import Loading from '../Loading'

import { fetchFreeItems } from '../../apis/api'

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';


function ShowFreeItem (props) {
  const [freeItem, setFreeItem] = useState([])

  const [showAddFreeItem, setShowAddFreeItem] = useState(false)
  const [claimedFreeItem, setClaimedFreeItem] = useState()

  const [showAlert, setShowAlert] = useState(false)

  const toggleForm = () => {
    setShowAddFreeItem(!showAddFreeItem)
  }

  const renderForm = () => {
    return <AddFreeItem />
  }

  const categories = ['All', 
  'Home & Living', 
  'Books, Music & Movies', 
  'Health & Beauty',
  'DIY, Garden & Pet',
  'Electronics & Computer',
  'Toys & Games',
  'Clothing & Apparel',
  'Stationery & Office',
  'Sports & Outdoors',
  'Others']

  const [category, setCategory] = useState('All') 

  const filteredData = freeItemCategory()

  function freeItemCategory () {
    if (!category || category === "All") {
      return freeItem
    } else {
      return freeItem.filter(item => item.category === category) 
    }
  }

  useEffect(() => {
    fetchFreeItems().then((arr) => {
      setFreeItem(arr)
    })
  }, [])

  const setClaimed = (freeItem) => {
    setClaimedFreeItem(freeItem[0])

    const newSetFreeItem = freeItem.map((aFreeItem) => {
      if (aFreeItem.id === freeItem[0].id) {
        aFreeItem.status = 'Claimed'
      }
      return aFreeItem
    })

    setFreeItem(newSetFreeItem)
    setShowAlert(true)
  }

  return (
    <>
      <PageHeader
        title="Free Items"
        description="Free Items up for grabs. Please take what you need."
      />
      <Container>
        <Alert
          variant="success"
          show={showAlert}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>
            Thanks {claimedFreeItem?.claimedBy}, you've claimed {claimedFreeItem?.item}!
          </Alert.Heading>
          <p>You can pick your food up from the desk near the front door.</p>
        </Alert>
        <Button variant="primary" className="my-3" onClick={toggleForm}>
          {showAddFreeItem ? 'Hide' : 'Add Free Item'}
        </Button>
        {showAddFreeItem && renderForm()}
      </Container>
      <Container>
        <header className="mt-4 header">
          <h2>Search Free Items</h2>
        </header>
        <Form.Group
          className="mb-3"
          controlId="freeItemCategory"
          key={'e'}
          onChange={e => setCategory(e.target.value)}
          >
            <Form.Label>Categories</Form.Label>
              <Form.Select name="freeItemCategory" aria-label="freeItemCategory" >
                <option>Select Category</option>
                  {categories.map((category, index) => {
                    return (<option value={category} key={index}>{category}</option>)
                  })}
              </Form.Select>
          </Form.Group>
        <Row className="g-3">
          {filteredData
            .filter((freeItem) => freeItem.status != 'Claimed')
            .map((freeItem) => {
              return (
                <Col key={freeItem.id} md={6} lg={4}>
                  <FreeItem freeItem={freeItem} setClaimed={setClaimed} />
                </Col>
              )
            })}
        </Row>
      </Container>
    </>
  )
}

export default withAuthenticationRequired(ShowFreeItem, {
  onRedirecting: () => <Loading />,
});