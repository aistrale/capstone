import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const JobsSummary = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={4} md={4} lg={4}>
        <p>Status</p>
        </Col>
        <Col xs={4} md={4} lg={4}>
        <p>Company</p>
        </Col>
        <Col xs={4} md={4} lg={4}>
        <p>Job position</p>
        </Col>
      </Row>
    </Container>
  );
}

export default JobsSummary;