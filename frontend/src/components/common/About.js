import React from 'react'

import {rene, ola} from '../../styles/assets/homeCarousel/homeCarousel-data'


const About = () => {
  return (
    <div className="about">
      <section className="about-background  hero is-link has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              ABOUT US
            </h1>
            <p className="ruler"></p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <img src="https://static.wixstatic.com/media/1a0189_8f00a4cd2e9e4684a39c90b603af02db~mv2.jpg/v1/fill/w_680,h_680,al_c,q_85,usm_0.66_1.00_0.01/ABOUT%20US.webp" alt="Rene and Ola Sporting Kids" />
            </div>
            <div className="divider"></div>
            <div className="column">
              <div className="content about-content">
                  <p>
                    Sporting Kids was founded in 2018, our vision is to provide a chance for children and young people
                    to explore new sports, improve their skills and most importantly, have fun!
                  </p>
                <p>
                    We pride ourselves on striving to meet the interests and needs of the children and young people we
                    work with, through various sports such as football, basketball, tennis, cricket, gymnastics and more.
                </p>
                <p>
                    Our sessions are tailored to build upon existing skills as well as developing new skills to improve
                    communication, confidence, independence and promote the benefits of exercise.
                </p>
              </div>
            </div>
          </div>
        </div>
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
                  <figure className="image is-3by2">
                    <img src={rene} alt="Rene Steer" />
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
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris <button>more...</button></p> 
                  </div>
                </div>
              </div>
            </div>
            <div className="column about-ola">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src={ola} alt="Ola Williams" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Ola Williams</p>
                      <a href="https://www.sportingkids.co.uk/" className="subtitle is-6"><ion-icon name="logo-twitter"></ion-icon>  @olawilliams</a>
                    </div>
                  </div>
                  <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris <button>more...</button></p> 
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