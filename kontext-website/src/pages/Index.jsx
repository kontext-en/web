
import Banner from '../components/banner/Banner.jsx'
import About from '../components/about/About.jsx'
import { Container, Row, Col } from 'react-bootstrap'
import bannerImg from './../assets/puppy.png'

function Index() {
  return (<>
      <Container className='mt-2 mt-sm-4'>
        <Row className='my-4'>
          <Col>
            <Banner img={{src:bannerImg, alt:'TODO'}}> {/* TODO */}
              <h1>Hello!</h1>
            </Banner>
          </Col>
        </Row>
        <Row className='my-4'>
          <Col xs={{span: 12,offset: 0}} md={{span: 8,offset: 2}} xl={{span: 6,offset: 4}}>
            <About/>
          </Col>
        </Row>
      </Container>
    </>);
}

export default Index