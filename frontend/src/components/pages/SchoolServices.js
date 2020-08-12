import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { homeCarousel } from '../../styles/assets/homeCarousel/homeCarousel-data'
import Blank from '../../styles/assets/logos/blank.png'

const SchoolServices = () => {
  return (
    <div className="school-services">
      <section className="hero is-warning has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              School Services
            </h1>
            <h2 className="subtitle">
              something or other
            </h2>
          </div>
        </div>
      </section>
      <section className="school-services-carousel">
        <div className="school-carousel">
          <Carousel
            infiniteLoop
            centerMode
            autoPlay
            dynamicHeight={true}
            showThumbs={false}
            showArrows={false}
            interval={3500}
            showStatus={false}
            transitionTime={750}
            centerSlidePercentage={100}
          >
            {homeCarousel.map(image => <div key={image.name} id={image.name} className="carousel-school-services" >
              <img src={Blank} className="school-carousel-image" alt={image.name} />
            </div>)}
          </Carousel>
        </div>
      </section>
      <section className="info-and-testimonial">
        <div className="school-services-info">It's uh, the other end of town, a block past Maple. Why not? Marty, I'm sorry, but the only power source capable of generating one point twenty-one gigawatts of electricity is a bolt of lightning. Who, who? Wait a minute, wait a minute. 1:15 in the morning?

        That Biff, what a character. Always trying to get away with something. Been on top of Biff ever since high school. Although, if it wasn't for him- Yeah, I'm- mayor. Now that's a good idea. I could run for mayor. Oh. I will. I'm too loud. I can't believe it. I'm never gonna get a chance to play in front of anybody.

        I'm, I'm sorry, Mr. McFly, I mean, I was just starting on the second coat. Doc, you gotta help- You wait and see, Mr. Caruthers, I will be mayor and I'll be the most powerful mayor in the history of Hill Valley, and I'm gonna clean up this town. Radiation suit, of course, cause all of the fall out from the atomic wars. This is truly amazing, a portable television studio. No wonder your president has to be an actor, he's gotta look good on television. You too.

        Right. So tell me, Marty, how long have you been in port? His head's gone, it's like it's been erased. Oh, you mean how you're supposed to act on a first date. Jennifer, oh are you a sight for sore eyes. Let me look at you.</div>
        <div className="divider"></div>
        <div className="school-services-testimonial">
          <article className="message is-success">
            <div className="message-header">
              <p>Derek Junior, Beekeeper</p>
            </div>
            <div className="message-body">
              <em>Why is she gonna get angry with you? Oh honey, he's teasing you, nobody has two television sets. Great good, good, Lorraine, I had a feeling about you two. Marty, will we ever see you again? Hey boy, are you alright?

      Marty, you didn't fall asleep, did you? C'mon. Yeah. Silence Earthling. my name is Darth Vader. I'm am an extra-terrestrial from the planet Vulcan. I have to tell you about the future.</em>
            </div>
          </article>
        </div>
        
      </section>
    </div>

  )
}

export default SchoolServices