import React from 'react'
import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';

function SocialLink({label, link, iconClass}) {
  return <NavLink href={link||'#'} className='text-light'>
    <i className={`bi bi-${iconClass}`}></i>
    <span style={{textDecoration: 'underline', marginLeft: '2ex'}}>
      {label}
    </span>
  </NavLink>
}

function Footer() {
  return <footer className='w-100'>
    <Container fluid>
    <Row className='bg-dark text-light pt-4 pb-4'>
      <Col className='mx-5 pe-3 col-3 col-md-5 justify-content-center' style={{borderRight: '2px solid #fff'}}>
          <h2 className='text-end text-md-center'>
            Contact Us
          </h2>
      </Col>
      <Col>
        <Nav className='flex-column fs-6'>
          <SocialLink label={'Phone'} iconClass={'telephone-fill'} link={'tel:+6086218025'}/>
          <SocialLink label={'Mail'} iconClass={'envelope-fill'} link={'mailto:park659@wisc.edu'}/>
        </Nav>
      </Col>
    </Row>
    </Container>
  </footer>;
}

export default Footer;