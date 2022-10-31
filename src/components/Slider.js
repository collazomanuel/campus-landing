
import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Icon from './Icon'

const Slider = () => {

  const sliderStyle = 'top-part slider'

  return (
    <div className={sliderStyle}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="./img/fiuba-carousel-bg-1-colorized.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className='slider-text'>
              <div className='title'><Icon type={'Touch'}/><div className='title-text'>Campus</div></div>
              <div className='subtitle'>
                Toda la oferta educativa de la<br/>
                Facultad de Ingeniería de la Universidad de Buenos Aires<br/>
                en un mismo espacio
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="./img/fiuba-carousel-bg-2-colorized.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className='slider-text'>
              <div className='title'><Icon type={'Touch'}/><div className='title-text'>Campus</div></div>
              <div className='subtitle'>
                Toda la oferta educativa de la<br/>
                Facultad de Ingeniería de la Universidad de Buenos Aires<br/>
                en un mismo espacio
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="./img/fiuba-carousel-bg-3-colorized.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className='slider-text'>
              <div className='title'><Icon type={'Touch'}/><div className='title-text'>Campus</div></div>
              <div className='subtitle'>
                Toda la oferta educativa de la<br/>
                Facultad de Ingeniería de la Universidad de Buenos Aires<br/>
                en un mismo espacio
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    </div>
  )
}

export default Slider
