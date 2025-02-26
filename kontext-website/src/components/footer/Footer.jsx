import React from 'react'
import { Container, Row, Col, Stack, Image, Nav, NavLink } from 'react-bootstrap';

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
          <SocialLink label={'Phone'} iconClass={'telephone-fill'}/>
          <SocialLink label={'Instagram'} iconClass={'instagram'}/>
          <SocialLink label={'Etc'} iconClass={'question-lg'}/>
          <SocialLink label={'Mail'} iconClass={'envelope-fill'}/>
        </Nav>
      </Col>
    </Row>
    </Container>
  </footer>;
}

export default Footer;