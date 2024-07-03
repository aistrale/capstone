import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './myFooter.css'

const MyFooter = () => {
    return (
        <Container fluid>
            <Row>
                <Col  className='footer-bg'>
                    <p className='footer-logo text-center m-0'>&#169; 2024 Elena</p>
                </Col>
            </Row>
        </Container>
    );
}

export default MyFooter;