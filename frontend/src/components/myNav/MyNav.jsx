import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './myNav.css'

const MyNav = () => {
  return (
    <Navbar className="nav-bg">
      <Container>
        <Navbar.Brand href="#home" className='nav-logo'>Home</Navbar.Brand>
          <Navbar.Text className='nav-link'>Account</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default MyNav;