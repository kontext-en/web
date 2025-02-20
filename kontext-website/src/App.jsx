import Footer from "./components/footer/Footer.jsx"
import Header from "./components/header/Header.jsx"


function App({children}) {
  return (
    <>
      <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App