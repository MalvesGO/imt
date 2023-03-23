import React from 'react'
import './styles.css'

const noticias = [
  {id: 1, title: 'Noticia 1', description: 'Descrição da noticia 1'},
  {id: 2, title: 'Noticia 2', description: 'Descrição da noticia 2'},
  {id: 3, title: 'Noticia 3', description: 'Descrição da noticia 3'},
  {id: 4, title: 'Noticia 4', description: 'Descrição da noticia 4'},
  {id: 5, title: 'Noticia 5', description: 'Descrição da noticia 5'},
  {id: 6, title: 'Noticia 6', description: 'Descrição da noticia 6'},
  {id: 7, title: 'Noticia 7', description: 'Descrição da noticia 7'},
  {id: 8, title: 'Noticia 8', description: 'Descrição da noticia 8'},
  {id: 9, title: 'Noticia 9', description: 'Descrição da noticia 9'},
  {id: 10, title: 'Noticia 10', description: 'Descrição da noticia 10'},
  {id: 11, title: 'Noticia 11', description: 'Descrição da noticia 11'},
  {id: 12, title: 'Noticia 12', description: 'Descrição da noticia 12'},
]

const Noticias = () => {
  return (
    <div className='noticias'>
      {
        noticias.map((noticia) => {
          return (
            <div className='noticia' key={noticia.id}>
              <img src="https://www.imt-ip.pt/sites/IMTT/Portugues/Noticias/PublishingImages/2019/SimboloIMT.png" alt="" />
              <div>
              <h2>{noticia.title}</h2>
              <p>{noticia.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Noticias