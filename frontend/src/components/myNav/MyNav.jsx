import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './myNav.css'

const MyNav = () => {
  return (
    <Navbar className="nav-bg">
      <Container>
        <Nav.Link className='nav-link'>Home</Nav.Link>
        <Nav.Link className='nav-link'>Account</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default MyNav;