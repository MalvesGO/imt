import React from 'react'
import './styles.css'

import { FaArrowRight } from 'react-icons/fa'

const noticias = [
  { id: 1, title: 'Noticia 1', description: 'FCT - Concurso para Atribuição de Bolsas de Investigação para Doutoramento 2023 - IMT manifesta interesse para acolhimento de doutorandos através de Bolsa de Investigação da FCT' },
  { id: 2, title: 'Noticia 2', description: 'Avaliação de Desempenho Ambiental da OCDE a Portugal' },
  { id: 3, title: 'Noticia 3', description: 'Declaração de Autenticidade do Cartão Tacográfico' },
  { id: 4, title: 'Noticia 4', description: 'Estratégia Nacional para a Mobilidade Ativa Ciclável - 1ª Ação de Formação “Desporto Escolar Sobre Rodas”' },
  { id: 5, title: 'Noticia 5', description: 'Transportes de mercadorias e passageiros - Publicidade de horários de trabalho e forma de registo dos respetivos tempos de trabalho' },
  { id: 6, title: 'Noticia 6', description: 'Anuário Estatístico da Mobilidade e dos Transportes de 2021' },
  { id: 7, title: 'Noticia 7', description: 'Comunicado IMT - Anomalias Técnicas em Cartões Tacográficos' },
  { id: 8, title: 'Noticia 8', description: 'Alerta Fraude | Carta de Condução' },
  { id: 9, title: 'Noticia 9', description: 'Prémios European Green Capital & European Green Leaf 2025' },
]

const Noticias = () => {
  return (
    <div className='sectionNoticias'>
      <h1>Notícias</h1>
      <div className='noticias'>
        {
          noticias.map((noticia) => {
            return (
              <div className='noticia' key={noticia.id}>
                <img src="https://www.imt-ip.pt/sites/IMTT/Portugues/Noticias/PublishingImages/2019/SimboloIMT.png" alt="" />
                <div>
                  {/* <h2>{noticia.title}</h2> */}
                  <p className='description'>{noticia.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='more'>
        <button>
          Mais Notícias
          <FaArrowRight
            size={20}
            color='#fff'
          />
        </button>
      </div>
    </div>
  )
}

export default Noticias