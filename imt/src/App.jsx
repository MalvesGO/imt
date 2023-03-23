import React from 'react'
import './App.css'

import Header from './components/Header'
import Banner from './components/Banner'
import BannerApp from './components/BannerApp'
import Noticias from './components/Noticias'
import Menu from './components/Menu'

function App() {

  return (
    <div className="App">
      <Header />
      <Menu />
      <Banner />
      <Noticias />
      <BannerApp />
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default App
