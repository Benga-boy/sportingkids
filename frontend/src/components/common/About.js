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
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <img src="https://static.wixstatic.com/media/1a0189_8f00a4cd2e9e4684a39c90b603af02db~mv2.jpg/v1/fill/w_680,h_680,al_c,q_85,usm_0.66_1.00_0.01/ABOUT%20US.webp" alt="Rene and Ola Sporting Kids" />
            </div>
            <div className="column">
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </section>
      <section className="section">
        <div>
          <h1 className="title coaches">COACHES</h1>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column about-rene">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="https://jasonrobertsfoundation.com/wp-content/uploads/2016/10/DSC_0187.jpg" alt="Rene Steer" />
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
                    <img src="https://www.hamhigh.co.uk/polopoly_fs/1.5742723!/image/image.jpg_gen/derivatives/landscape_630/image.jpg" alt="Ola Williams" />
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
      </section>
    </div>

  )
}

export default About