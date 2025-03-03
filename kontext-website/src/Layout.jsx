import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer.jsx"
import Header from "./components/header/Header.jsx"


function Layout(props) {
  return (
    <>
      <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div>
          <Header />
          <Outlet/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout