import React from 'react'
import './styles.css'

import takephone from '../../assets/phone.png'
import applestore from '../../assets/applestore.svg'
import playstore from '../../assets/playstore.svg'

const BannerApp = () => {
  return (
    <div className='bannerapp'>      
      <div className='content'>
        <h1>Nova Versão da APP</h1>
        <p>Tecnologia a favor do Trânsito</p>
        <div className='stores'>
          <img src={playstore} alt="" />
          <img src={applestore} alt="" />
        </div>
      </div>
      <img src={takephone} alt="" />
    </div>
  )
}

export default BannerApp