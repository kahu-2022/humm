import React, { useState, useEffect, useMemo } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Counsellor from './Counsellor'
import PageHeader from '../PageHeader'

import { fetchCounsellors } from '../../apis/api'

function ShowCounsellors(props) {
  const [counsellor, setCounsellor] = useState([])

  const categories = ['All', 'Addiction', 'Anxiety & Stress', 'Job Support', 'LGBTQI+', 'Relationships', 'Te Whare Tapa Whā', 'Trauma & Grief']

  const [category, setCategory] = useState('') 

  const filteredData = useMemo(() => {  
    if (!category || category === "All") return counsellor

    return counsellor.filter(item => item.speciality === category) 
  }, [category])


  useEffect(() => {
    getCounsellors()
  }, [])

  const getCounsellors = () => {
    fetchCounsellors().then((arr) => {
      setCounsellor(arr)
    })
  }

  return (
    <>
      <PageHeader
        title="Our Counsellors"
        description="Meet our team of friendly counselling staff!"
      />
      
      <Container>
        <Form.Group
          className="mb-3"
          controlId="counsellorSpeciality"
          key={'e'}
          onChange={e => setCategory(e.target.value)}
          >
            <Form.Label>Counsellor Speciality</Form.Label>
              <Form.Select name="counsellorSpeciality" aria-label="counsellorSpeciality" >
                <option>Select Speciality</option>
                  {categories.map((speciality, index) => {
                    return (<option value={speciality} key={index} >{speciality}</option>)
                  })}
              </Form.Select>
            </Form.Group>
        <Row className="g-3">
          {filteredData.map((counsellor) => {
            return (
              <Col md={6} lg={4} key={counsellor.id}>
                <Counsellor counsellor={counsellor} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default ShowCounsellors
