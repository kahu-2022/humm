  import React, { useState, useEffect } from 'react'
  import Row from 'react-bootstrap/Row'
  import Col from 'react-bootstrap/Col'
  import Card from 'react-bootstrap/Card'
  import Button from 'react-bootstrap/Button'
  import Modal from 'react-bootstrap/Modal'
  import Form from 'react-bootstrap/Form'

  import { useAuth0 } from '@auth0/auth0-react'

  import DayJS from 'react-dayjs'

  import { claimNewFood, getUserByEmail } from '../../apis/api'

function Food(props) {
  const { food, setClaimed } = props
  const { user } = useAuth0()

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [claimData, setClaimData] = useState({
    id: food.id,
    claimedBy: "",
    claimerRoom: "",
    status: "Claimed",
  })

  useEffect(() => {
    //Get our user information to populate the form
    getUserByEmail(user?.email).then((userFromDB) => {
      if (userFromDB[0]?.email === user?.email) {
        setClaimData({
          id: food.id,
          name: userFromDB[0].name,
          claimedBy: userFromDB[0].pronouns,
          claimerRoom: userFromDB[0].roomNumber,
          status: "Claimed",
        })
      }
    })
  }, [])

  const handleChange = (e) => {
    setClaimData({
      ...claimData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    claimNewFood(claimData).then((newClaim) => {
      window.scrollTo(0, 0)
      setClaimed(newClaim)
      setShow(false)
    })
  }

  return (
    <>
      <div className="shadow p-2    bg-white rounded">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Claim the food {food.item} </Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="claimedBy">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="claimedBy"
                  type="text"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  defaultValue={claimData?.name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="claimerRoom">
                <Form.Label>Room Number</Form.Label>
                <Form.Control
                  name="claimerRoom"
                  type="text"
                  placeholder="Enter your room number"
                  onChange={handleChange}
                  defaultValue={claimData?.claimerRoom}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Claim
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
        <Card className="py-2">
          <Card.Body>
            <Row className="border-bottom g-0 pb-3">
              <Col>
                <Card.Title>
                  <em>{food.item} </em>
                </Card.Title>
                <Card.Text>{food.quantity} available </Card.Text>
                </Col>
               
                </Row>
                <Row className="mt-4">
                  <Col>
                <strong>Donated by</strong>
                <br />
                <Card.Text>
                  {food.name} in room {food.donorRoom}{" "}
                </Card.Text>
              </Col>
              <Col>
              <Card.Text>
                <strong>Expiry Date</strong>
                <br />
                <DayJS format="MMM DD, YYYY">{food.useByDate}</DayJS>
              </Card.Text>
              </Col>
              <Row className="mt-4">
              <Col>
                <Card.Text>
                  <strong>Date Donated</strong>
                  <br />
                  <DayJS format="MMM DD, YYYY">{food.donateDate}</DayJS>
                
                </Card.Text></Col>
                <Col>
                <Button className="claim-food-btn" variant="primary" onClick={handleShow}>
                      Claim food 
                    </Button></Col>
                </Row>
              
            </Row>

            <br />
            <Row>
              
            </Row>
            {/* <Row>
            <Col className="d-grid gap-2">
                    <Button variant="primary" onClick={handleShow}>
                      Claim
                    </Button>
                  </Col>
            </Row> */}
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Food
