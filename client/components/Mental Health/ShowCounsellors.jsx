import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Counsellor from './Counsellor'
import PageHeader from '../PageHeader'
import Loading from '../Loading'

import { fetchCounsellors } from '../../apis/api'
import { withAuthenticationRequired } from '@auth0/auth0-react'

function ShowCounsellors (props) {
  const [counsellors, setCounsellors] = useState([])

  const categories = [
    "All",
    "Addiction",
    "Anxiety & Stress",
    "Job Support",
    "LGBTQI+",
    "Relationships",
    "Te Whare Tapa Whā",
    "Trauma & Grief",
  ]

  const [category, setCategory] = useState("All")

  // const filteredData = useMemo(() => {
  //   if (!category || category === "All") return counsellor

  //   return counsellor.filter(item => item.speciality === category)
  // }, [category])

  const filteredData = counsellorsCategory()

  function counsellorsCategory() {
    if (!category || category === "All") {
      return counsellors
    } else {
      return counsellors.filter((item) => item.speciality === category)
    }
  }

  useEffect(() => {
    getCounsellors()
  }, [])

  const getCounsellors = () => {
    fetchCounsellors().then((arr) => {
      setCounsellors(arr)
    })
  }

  return (
    <>
      <PageHeader
        title="Our Counsellors"
        description="Meet our team of friendly counselling staff!"
      />

      <Container>
        <Row>
          <Col lg={4} className="mb-3">
            <Form.Group
              className="mb-3"
              controlId="counsellorSpeciality"
              key={"e"}
              onChange={(e) => setCategory(e.target.value)}
            >
              <Form.Select
                name="counsellorSpeciality"
                aria-label="counsellorSpeciality"
              >
                <option>Filter by counsellor specialty</option>
                {categories.map((speciality, index) => {
                  return (
                    <option value={speciality} key={index}>
                      {speciality}
                    </option>
                  )
                })}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-3">
          {filteredData.map((counsellor) => {
            return (
              <Col md={6} lg={6} xl={4} key={counsellor.id}>
                <Counsellor counsellor={counsellor} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default withAuthenticationRequired(ShowCounsellors, {
  onRedirecting: () => <Loading />,
})
