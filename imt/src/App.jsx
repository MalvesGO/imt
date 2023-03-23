import { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Noticias from './components/Noticias'
import Menu from './components/Menu'

function App() {

  return (
    <div className="App">
      <Header />
      <Menu />
      <Banner />
      <Noticias />
      <Banner2 />
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default App
