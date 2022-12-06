
import '../App.css'

import MenuButton from './MenuButton'

import Linkify from 'react-linkify'

import Marquee from 'react-easy-marquee'

const Menu = () => {


  const linkGrado = 'https://campusgrado.fi.uba.ar/course/index.php?categoryid=2'
  const linkPosgrado = 'https://campus.fi.uba.ar/course/index.php?categoryid=16'
  const linkFormacionDocente = 'https://campusgrado.fi.uba.ar/course/index.php?categoryid=680'
  const linkCetec = 'https://campusgrado.fi.uba.ar/course/index.php?categoryid=679'

  const announcement1 = 'Conocé los cursos de posgrado en Estabilidad en https://www.fi.uba.ar/noticias/cursos-de-posgrado-del-depto-de-estabilidad-2'
  const announcement2 = 'La FIUBA, presente en el XV COINI (más información en https://coiniarg.com)'
  const announcement3 = 'Nanomateriales y nanotecnología: La FIUBA invita a la disertación que ofrecerá el Dr. Galo Soler Illia sobre el tema'

  const marqueeText = announcement1 + ' // ' + announcement2 + ' // ' + announcement3 + ' //' + '\u00A0'

  return (
    <div className='middle-part'>
      <div className='adverts-container'>
        <div className='adverts-title'>
          ANUNCIOS
        </div>
        <div className='adverts-content cut-text'>
          <Marquee duration={80000} reverse="true" className='text-marquee'>
            <Linkify><p className='marquee-text'>{marqueeText}</p></Linkify>
          </Marquee>
        </div>
      </div>
      <div className='buttons-container'>
        <MenuButton type='Book' text='Grado' link={linkGrado} />
        <MenuButton type='Hat' text='Posgrado' link={linkPosgrado} />
        <MenuButton type='Teacher' text='Formación docente' link={linkFormacionDocente} />
        <MenuButton type='Cetec' text='Cetec' link={linkCetec} />
      </div>
    </div>
  )
}

export default Menu
