
import Banner from '../components/banner/Banner.jsx'
import About from '../components/about/About.jsx'
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'

function Index() {
  return (
    <>
      <div style={{minHeight: '100%', paddingBottom: '7rem'}}>
        <Header />
        <Banner />
        <About />
      </div>
      <Footer />
    </>
  )
}

export default Index