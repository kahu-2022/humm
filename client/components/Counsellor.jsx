import React, {useEffect, useRef, useState} from 'react'
import { Row, Col, Card, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Counsellor(props) {
  const { counsellor } = props
  const ref = useRef(null)
  // const [imgCol, setImgCol] = useState()
  // useEffect(() => {
  //  setImgCol(ref.current.offsetWidth)
  //   console.log("width", imgCol);
  // }, []);

  return (
      <Card className="py-3">
        <Card.Body>
          <Row className="justify-content-md-center">
            {/* <Col ref={ref} className=" m-0"> */}
            <Col>
                {/* <Image src={props.photo} thumbnail="true" roundedCircle="true" fluid="true" style={{ maxHeight: `${imgCol}px`, width: `${imgCol}px` }}/> */}
                <Image src={counsellor.photo} thumbnail="true" roundedCircle="true" fluid="true" />
            </Col>
            <Col>
                <Row><Card.Title><em>{counsellor.name}</em></Card.Title></Row>
                <Row><Card.Text>{counsellor.pronouns}</Card.Text></Row>
                <Row>
                  <Card.Text className="mt-3">
                  <strong>Specialty</strong><br />
                  {counsellor.speciality}
                  </Card.Text>
                </Row>
                <Row>
                  <Card.Text className="mt-3">
                  <strong>Office Hours</strong><br />
                  {counsellor.hours}
                  </Card.Text>
                </Row>

                <Row className="mt-3">
                  <Card.Text>
                  <Button href={`/booking/${counsellor.name}`}variant="outline-primary" size="sm">
                    Book appointment
                  </Button>
                  </Card.Text>
                </Row>

            </Col>
          </Row>
        </Card.Body>

        <Card.Body>
            <Card.Text>
              <strong>Bio</strong>
            </Card.Text>
            <Card.Text>
               {counsellor.biography}
            </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default Counsellor