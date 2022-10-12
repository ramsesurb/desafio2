import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const Carrousel = () => {
  return (
    <Carousel className="m-3">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.musiciansfriend.com/static/mf/selects/2022/r-home/mf-md-rhhl-essentials-09-25-22.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.musiciansfriend.com/static/mf/selects/2022/r-home/mf-md-rhhl-guitar-fest-09-08-22.jpg"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        
        </Carousel>
    

    
  )
}
