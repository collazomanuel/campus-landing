
import React from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'

import Icon from './Icon'
import '../App.css'

const CarouselImage = ({ imgSource }) => {
  return (
    <img
      className="d-block w-100 slider-image"
      src={imgSource}
      alt="Carousel slide"
    />
  )
}

const CarouselCaption = () => {
  return (
    <div className='slider-text'>
      <div className='title'><Icon type={'Touch'}/><div className='title-text'>Campus</div></div>
      <div className='subtitle'>
        Toda la oferta educativa de la<br/>
        Facultad de Ingeniería de la Universidad de Buenos Aires<br/>
        en un mismo espacio
      </div>
    </div>
  )
}

const Slider = () => {

  const firstImage = './img/fiuba-carousel-bg-pc-colorized.png'
  const secondImage = './img/fiuba-carousel-bg-lh-colorized.png'
  const thirdImage = './img/fiuba-carousel-bg-cu-colorized.png'

  const sliderStyle = 'top-part'

  return (
    <div className={sliderStyle}>
      <Carousel>
        <Carousel.Item>
          <CarouselImage imgSource={firstImage} />
          <Carousel.Caption>
            <CarouselCaption />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage imgSource={secondImage} />
          <Carousel.Caption>
            <CarouselCaption />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage imgSource={thirdImage} />
          <Carousel.Caption>
            <CarouselCaption />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider
