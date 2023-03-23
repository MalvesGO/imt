import React from 'react'
import './App.css'

import Header from './components/Header'
import Menu from './components/Menu'
import Banner from './components/Banner'
import BannerApp from './components/BannerApp'
import Noticias from './components/Noticias'
import Footer from './components/Footer'


function App() {

  return (
    <div className="App">
      <Header />
      <Menu />
      <Banner />
      <Noticias />
      <BannerApp />
      <Footer />      
    </div>
  )
}

export default App
