
import Banner from '../components/banner/Banner.jsx'
import About from '../components/about/About.jsx'
import { Container } from 'react-bootstrap'

function Index() {
  return (<>
      <Banner />
      <Container>
        <About />
      </Container>
    </>);
}

export default Index