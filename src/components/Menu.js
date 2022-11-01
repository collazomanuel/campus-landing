
import '../App.css'

import Marquee from 'react-fast-marquee'

import MenuButton from './MenuButton'

const Menu = () => {

  return (
    <div className='middle-part'>
      <div className='adverts-container'>
        <div className='adverts-title'>
          ANUNCIOS
        </div>
        <div className='adverts-content cut-text'>
          <Marquee
            delay={2}
            gradient={false}
          >
            <div>
              Conocé los cursos de posgrado en Estabilidad en <a href='/'>https://www.fi.uba.ar/noticias/cursos-de-posgrado-del-depto-de-estabilidad-2</a>
            </div>
          </Marquee>
        </div>
      </div>
      <div className='buttons-container'>
        <MenuButton type='Book' text='Grado' />
        <MenuButton type='Hat' text='Posgrado' />
        <MenuButton type='Teacher' text='Formación docente' />
        <MenuButton type='Cetec' text='Cetec' />
      </div>
    </div>
  )
}

export default Menu
