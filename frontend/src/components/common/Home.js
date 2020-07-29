import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { homeCarousel, video } from '../../styles/assets/homeCarousel/homeCarousel-data'
import { Player } from 'video-react'


class Home extends React.Component {
  state = {
    showModal: false
  }
  render() {
    console.log(homeCarousel)

    return (
      <div className="home">
        <section className="hero is-primary has-text-centered">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                WELCOME TO SPORTING KIDS
            </h1>
            </div>
          </div>
        </section>
        <div className="video-wrapper">
          <Player 
          src={video}
          playsInline
          />
        </div>
        <div className="carousel-wrapper">
          <Carousel
            infiniteLoop
            centerMode
            autoPlay
            dynamicHeight={true}
            showArrows={false}
            showThumbs={false}
            interval={5000}
            showStatus={false}
            transitionTime={750}
            centerSlidePercentage={100}
          >
            {homeCarousel.map(image => <div key={image.name} id={image.name} className="carousel-item" >
              <img src={image.value} className="carousel-image" alt="" />
            </div>)}
          </Carousel>
        </div>
        <div>
          Boxes!
        </div>
      </div>
    )
  }
}
export default Home