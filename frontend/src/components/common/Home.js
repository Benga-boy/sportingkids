import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { homeCarousel, video } from '../../styles/assets/homeCarousel/homeCarousel-data'
import Blank from '../../styles/assets/logos/blank.png'



import Boxes from '../pages/Boxes'

class Home extends React.Component {
  state = {
    showModal: false
  }
  render() {

    return (
      <div className="home">
        <section className="home-section hero is-primary has-text-centered">
          {/* <div className="hero-body">
            <div className="container"> */}
          <div className="carousel-wrapper">
            <Carousel
              infiniteLoop
              centerMode
              autoPlay
              dynamicHeight={true}
              showThumbs={false}
              interval={3500}
              showStatus={false}
              showArrows={false}
              transitionTime={750}
              centerSlidePercentage={100}
            >
              {homeCarousel.map(image => <div key={image.name} id={image.name} className="carousel-item" >
                <img src={Blank} className="carousel-image" alt="Sporting Kids" />
              </div>)}
            </Carousel>
          </div>
          {/* </div> */}
          {/* </div> */}
        </section>
        <section className="welcome section">
          <div className="container">
            <h1 className="animate__animated animate__heartBeat title has-text-centered">WELCOME TO SPORTING KIDS</h1>
            <h2 className="home-subtitle subtitle has-text-centered">
              Sporting Kids is an independent sports coaching company that has been working with children and schools across London and sorrounding counties
            </h2>
          </div>
        </section>
        <section className="section">
          <div id="container" className="container">
            <div id="monitor">
              <div id="monitorscreen">
                <div className="video">
                  <video src={video} autoPlay controls muted />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="offerings">
              <Boxes
              />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Home