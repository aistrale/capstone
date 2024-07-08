import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './myNav.css'

const MyNav = () => {
  return (
    <Navbar className="nav-bg">
      <Container>
        <Nav.Link href='/' className='nav-link'>Home</Nav.Link>
        <Nav.Link href='/user/:userId' className='nav-link'>Account</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default MyNav;