import React from 'react'


const About = () => {
  return (
    <div className="about">
      <section className="hero is-primary">
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
          <div classname="card">
            <div classname="card-image">
              <figure classname="image is-4by3">
                <img src="https://bulma.io/images/placeholders/480x320.png" alt="Placeholder image" />
              </figure>
            </div>
            <div classname="card-content">
              <div classname="media">
                <div classname="media-content">
                  <p classname="title is-4">Rene Steer</p>
                  <p classname="subtitle is-6">@renesteer</p>
                </div>
              </div>
              <div classname="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
        <div className="column about-ola">
          <div classname="card">
            <div classname="card-image">
              <figure classname="image is-4by3">
                <img src="https://bulma.io/images/placeholders/480x320.png" alt="Placeholder image" />
              </figure>
            </div>
            <div classname="card-content">
              <div classname="media">
                <div classname="media-content">
                  <p classname="title is-4">Ola Williams</p>
                  <p classname="subtitle is-6">@olawilliams</p>
                </div>
              </div>
              <div classname="content">
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