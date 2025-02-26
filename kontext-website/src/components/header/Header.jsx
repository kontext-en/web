import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-primary" variant="dark" >
        <Container>
          <Navbar.Brand href="/">
            Kontext
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <Link to="/" className='text-light ms-4' style={{textDecoration: 'none'}}>
                Home
              </Link>
              <Link to="/books" className='text-light ms-4' style={{textDecoration: 'none'}}>
                Books
              </Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
}

export default Header;