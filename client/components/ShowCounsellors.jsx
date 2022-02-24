import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'

// import Counsellor from './Counsellor'

function ShowCounsellors (props) {

    return (
        <>
        <Container fluid="md">
            <Row>
                <h3>Our Counsellors</h3>
            </Row>
            <Row>
                <p>This should be where the description will be shown</p>
            </Row>
        </Container>

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>        

        </>
    )
}

export default ShowCounsellors