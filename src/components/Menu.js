
import { useState, useEffect } from 'react'

import Linkify from 'react-linkify'
import Marquee from 'react-easy-marquee'

import MenuButton from './MenuButton'

import '../App.css'

import announcementsFile from '../anuncios.txt'
import urlsFile from '../urls.txt'

const Menu = () => {

  const [marqueeText, setMarqueeText] = useState('')

  const [urlGrado, setURLGrado] = useState('')
  const [urlPosgrado, setURLPosgrado] = useState('')
  const [urlCapacitacionDocente, setURLCapacitacionDocente] = useState('')
  const [urlCetec, setURLCetec] = useState('')

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
    fetch(urlsFile)
      .then(r => r.text())
      .then(text => {
        const array = text.toString().split('\n')
        setURLGrado(array[0])
        setURLPosgrado(array[1])
        setURLCapacitacionDocente(array[2])
        setURLCetec(array[3])
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
        <MenuButton type='Book' text='Grado' link={urlGrado} />
        <MenuButton type='Hat' text='Posgrado' link={urlPosgrado} />
        <MenuButton type='Teacher' text='Capacitación docente' link={urlCapacitacionDocente} />
        <MenuButton type='Cetec' text='Cetec' link={urlCetec} />
      </div>
    </div>
  )
}

export default Menu
