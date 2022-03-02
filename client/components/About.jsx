import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function About() {
  return (
    <>
      <Container className="py-3">
        <Row className="d-flex align-items-center">
          <Col className="p-5" lg={6}>
            <header className="mt-4 header">
              <h2 className="landing-hero mb-4">Welcome to humm!</h2>
              <p className="intro-text">
                We’re a community dedicated to housing and feeding vulnerable
                members of our whānau, as well as providing them with resources
                and strategies to recover and grow.
              </p>
              <p className="intro-text">
                We offer residents clean and safe accommodation facilities, free
                food for their rooms as well as daily meals, and a variety of
                services such as counselling, group therapy workshops, skill
                development and job search support, and a wide and ever-changing
                range of community activities and events, from yoga and hikes to
                movie nights and cooking classes.
              </p>
            </header>
          </Col>
          <Col>
            <Image
              className="home-page "
              src="./images/vibes/wall.jpg"
              fluid="true"
              rounded="true"
            />
          </Col>
        </Row>
      </Container>
      <Container className="py-3">
        <Row className="d-flex align-items-center">
          <Col className="d-flex justify-content-center" xs={{order:2}}sm={{order:1}}>
            <Image
              src="./images/vibes/frenz.jpg"
              className="vertical-about-pic"
              fluid="true"
              thumbnail="true"
              rounded="true"
            />
          </Col>
          <Col className="p-5" lg={6}  xs={{order:1}} sm={{order:2}}>
            <div className="border-bottom pb-3">
              <p className="intro-text">
                Our aims are not only to house and feed our friends, but to also
                give them the opportunity to recover from trauma and find
                purpose, and feel connected to and inspired by the world around
                them. Honouring te ao Māori is a central commitment here at
                humm, and our project is inspired by many brilliant social
                initiatives that have come before us and still exist alongside
                us, both in Aotearoa and abroad.
              </p>
              <p className="intro-text">
                If you know someone struggling who we could assist, would like
                to volunteer at humm or make a koha, or want to get in touch for
                any other reason, please reach out. We always love meeting new
                faces and welcome any support and feedback of our
                project/community. We’re always looking for ways to improve our
                model, and we are equally happy to share what we’ve learnt with
                others.
              </p>
            </div>
            <div className="pt-5">
              <h5>Contact us</h5>
              <div>
                <p className="contact-label pt-2">Phone</p>
                <p>021 154 9674</p>
              </div>
              <div>
                <p className="contact-label">Email</p>
                <p>hareton@humm.co.nz</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About
