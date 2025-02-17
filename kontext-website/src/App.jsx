import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import About from './components/about/About'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
    </>
  )
}

export default App
