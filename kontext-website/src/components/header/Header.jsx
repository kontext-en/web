import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

function Header() {
  return (<Navbar expand="sm" className="bg-primary" variant="dark"  >
        <Container>
          <Navbar.Brand href="/web">
            <h4>Kontext</h4>
          </Navbar.Brand>
    
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/web" className='text-light ms-4' style={{textDecoration: 'none'}}>
                Home
              </Link>
              <Link to="/web/analysis" className='text-light ms-4' style={{textDecoration: 'none'}}>
                Analyses
              </Link>
              <Link to="/web/bookdata" className='text-light ms-4' style={{textDecoration: 'none'}}>
                Book Info
              </Link>
              <Link to="/web/writersnook" className='text-light ms-4' style={{textDecoration: 'none'}}>
                Writer's Nook
              </Link>
              <Link to="/web/people" className='text-light ms-4' style={{textDecoration: 'none'}}>
                People
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>);
}

export default Header;