import { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import Banner from './components/Banner'
import Noticias from './components/Noticias'

function App() {

  return (
    <div className="App">
      <Header />
      <div className='menu'>

      </div>
      <Banner />
      <Noticias />
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default App
