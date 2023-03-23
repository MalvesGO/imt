import React from 'react'
import './styles.css'

import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>
      <header>
        <img src={Logo} alt="Logo" />
        <input type="text" />
        <button>Aceder</button>
      </header>
    </div>
  )
}

export default Header