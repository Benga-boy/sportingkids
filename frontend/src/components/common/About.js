import React from 'react'


const About = () => {
  return (
    <div className="about">
      <section className="hero is-primary has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              ABOUT US
            </h1>
            <h2 className="subtitle">
              Rene and Ola
            </h2>
          </div>
        </div>
      </section>
      <div className="columns">
        <div className="column about-rene">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/480x320.png" alt="Rene Steer" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Rene Steer</p>
                  <a href="https://twitter.com/ReneSteer?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer" className="subtitle is-6"><ion-icon name="logo-twitter"></ion-icon>  @renesteer</a>
                </div>
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
        <div className="column about-ola">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/480x320.png" alt="Ola Williams" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Ola Williams</p>
                  <a href="#" className="subtitle is-6"><ion-icon name="logo-twitter"></ion-icon>  @olawilliams</a>
                </div>
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About