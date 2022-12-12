
import { useState, useEffect } from 'react'

import Linkify from 'react-linkify'
import Marquee from 'react-easy-marquee'

import MenuButton from './MenuButton'

import announcementsFile from '../anuncios.txt'
import '../App.css'


const linkGrado = 'https://campusgrado.fi.uba.ar/course/index.php?categoryid=2'
const linkPosgrado = 'https://campus.fi.uba.ar/course/index.php?categoryid=16'
const linkFormacionDocente = 'https://campusgrado.fi.uba.ar/course/index.php?categoryid=680'
const linkCetec = 'https://campusgrado.fi.uba.ar/course/index.php?categoryid=679'

const Menu = () => {

  const [marqueeText, setMarqueeText] = useState('')

  useEffect(() => {
    fetch(announcementsFile)
      .then(r => r.text())
      .then(text => {
        const array = text.toString().split('\n')
        let auxMarqueeText = ''
        for (let i in array) {
          auxMarqueeText += array[i]
          auxMarqueeText += ' // '
        }
        auxMarqueeText += '\u00A0'
        setMarqueeText(auxMarqueeText)
      })
  }, [])

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
