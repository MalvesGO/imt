import React from 'react'
import './styles.css'
import { BiLockAlt } from 'react-icons/bi'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>
      <header>
        <img src={Logo} alt="Logo" />
        <input 
        type="text" 
        placeholder="Pesquisar"
        />
        <button>
          <BiLockAlt
            fontSize={22}
            style={
              {
                marginRight: 10,
                color: '#fff'
              }}
          />
          Area Reservada
        </button>
      </header>
    </div>
  )
}

export default Header