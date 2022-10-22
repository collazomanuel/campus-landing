
import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Icon from './Icon'

const Slider = () => {

  const sliderStyle = 'top-part'

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
            <div className='title'><Icon type={'Touch'}/><div className='title-text'>Campus</div></div>
            <div className='subtitle'>Toda la oferta educativa de la Facultad de Ingeniería de la Universidad de Buenos Aires en un mismo espacio</div>
          </Carousel.Caption>
        </Carousel.Item>
        {/*
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/fiuba-carousel-bg-2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/fiuba-carousel-bg-3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        */}
      </Carousel>


    </div>
  )
}

export default Slider
