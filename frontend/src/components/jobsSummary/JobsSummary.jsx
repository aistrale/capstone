import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './jobsSummary.css'

const JobsSummary = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={12} lg={12} className=' mt-5'>
        <h2 className='text-center p-0'>Your job offers:</h2>
        <Card.Body className='card-box'>
          <Card.Title>Job Title</Card.Title>
          <Card.Text>Status | Company</Card.Text>
        </Card.Body>
        <Card.Body className='card-box'>
          <Card.Title>Job Title</Card.Title>
          <Card.Text>Status | Company</Card.Text>
        </Card.Body>
        </Col>
      </Row>
    </Container>
  );
}

export default JobsSummary;