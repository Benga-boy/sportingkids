import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Modal from 'react-modal'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { homeCarousel } from '../../styles/assets/homeCarousel/homeCarousel-data'
// import {Container, Typography, Button, IconButton, DeleteIcon} from '@material-ui/core'
import { Player } from 'video-react'


class Home extends React.Component {
  state = {
    showModal: false
  }
  render() {
    console.log(homeCarousel)

    return (
      <div>
        <div className="hero">
        Video
        </div>
        <Carousel
          infiniteLoop
          centerMode
          dynamicHeight={true}
        >
          {homeCarousel.map(image => <div key={image.name} id={image.name} className="carousel-item" >
            <img src={image.value} className="carousel-image" />
          </div>)}
        </Carousel>
        <div>
        Boxes!
        </div>
      </div>
    )
  }
}
export default Home