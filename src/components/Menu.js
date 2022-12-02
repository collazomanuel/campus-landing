
import '../App.css'

import MenuButton from './MenuButton'

import Linkify from 'react-linkify'

const Menu = () => {

  const announcement1 = 'Conocé los cursos de posgrado en Estabilidad en https://www.fi.uba.ar/noticias/cursos-de-posgrado-del-depto-de-estabilidad-2'
  const announcement2 = 'La FIUBA, presente en el XV COINI (más información en https://coiniarg.com)'
  const announcement3 = 'Nanomateriales y nanotecnología: La FIUBA invita a la disertación que ofrecerá el Dr. Galo Soler Illia sobre el tema'

  const marqueeText = announcement1 + ' // ' + announcement2 + ' // ' + announcement3

  return (
    <div className='middle-part'>
      <div className='adverts-container'>
        <div className='adverts-title'>
          ANUNCIOS
        </div>
        <div className='adverts-content cut-text'>
          <div className='cssmarquee'>
            <div style={{ animation: 'cssmarquee ' + marqueeText.length/10 +'s linear infinite' }}>
              <Linkify>{marqueeText}</Linkify>
            </div>
          </div>
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
