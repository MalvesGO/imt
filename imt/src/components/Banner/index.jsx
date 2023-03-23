import React from 'react'
import './styles.css'

import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='banner'>
      <img src={banner} alt="" />
      <div className='info'>
        <h1>O Futuro da Mobilidade</h1>
        <p>Contacte nos sem se deslocar aos servicos</p>
        <button>Clique aqui</button>
      </div>
    </div>
  )
}

export default Banner