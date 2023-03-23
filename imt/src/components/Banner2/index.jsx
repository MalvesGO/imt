import React from 'react'
import './styles.css'

import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='banner'>      
      <div>
        <h1>Nova Versao da APP</h1>
        <p>Tecnologia a favor do Transito</p>
        <div>
          <img src="https://play.google.com/store/apps/details?id=app.detran.go.gov.br.detran" alt="" />
          <img src="https://www.detran.go.gov.br/psw/assets/img/banner/aplicativo-05-white.svg" alt="" />
        </div>
      </div>
      <img src="https://www.detran.go.gov.br/psw/assets/img/propaganda_aplicativo_otimizado.webp" alt="" />
    </div>
  )
}

export default Banner