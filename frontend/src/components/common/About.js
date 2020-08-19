import React from 'react'

import { rene, ola } from '../../styles/assets/homeCarousel/homeCarousel-data'


class About extends React.Component {
  state = {
    reneModalOpen: false,
    olaModalOpen: false
  }

  toggleReneModal = () => {
    this.setState({ reneModalOpen: !this.state.reneModalOpen })
  }

  closeReneModal = () => {
    this.setState({ reneModalOpen: !this.state.reneModalOpen })
  }

  toggleOlaModal = () => {
    this.setState({ olaModalOpen: !this.state.olaModalOpen })
  }

  render() {
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
                        Rene Steer founded Sporting Kids in 2018, his sporting story started at Arsenal <span className="more" onClick={this.toggleReneModal}>more...</span></p>
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
                      Ola Williams co-founded Sporting Kids alongside his partner Rene Steer <span className="more" onClick={this.toggleOlaModal}>more...</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={this.state.reneModalOpen ? "modal is-active" : "modal"}>
          <div onClick={this.toggleReneModal} className="modal-background"></div>
          <div className="animate__animated animate__backInLeft">
            <div className="modal-card rene-modal">
              <header className="modal-card-head">
                <p className="modal-card-title">Rene Steer</p>
                <button onClick={this.toggleReneModal} className="delete" aria-label="close"></button>
              </header>
              <section className="modal-card-body">
                <figure className="image is-128x128">
                  <img src={rene} alt="Rene Steer" />
                </figure>
                <div className="content">
                  <p>
                  Rene Steer founded Sporting Kids in 2018, his sporting story started in his early years as a youngster at the Arsenal Academy under Arsene Wenger. He worked his way up from the age of 12 and in 2008 was included in the first team in the Premier League for nine matches. He was also on the bench for Champions League and Carling Cup games. While playing professional football Rene started his started his Level 2 Football Coaching course with the FA which lead to Rene beginning his coaching career.
                  </p>
                  <p>
                  Rene has worked and developed his coaching skills with children and young people aged 4-25 over the years in various contexts, some of these include Sporting Opportunities For All, Rachael Yankey, Elms Tennis Club, Jason Roberts Foundation, Arsenal Development Centre and Norwich FC, as a scout.
                  </p>
                  <p>
                  Rene found a passion for coaching and went on to further his knowledge by obtaining his FA UEFA B License. He continues to play football for Maidenhead United FC but wants to share his passion for coaching through Sporting Kids with his vision for the company being to "provide a chance for children to experience new sports, make new friends and most importantly, have fun!"
                  </p>
                </div>
              </section>
              <footer className="modal-card-foot">
                Renes Contact
              </footer>
            </div>
          </div>
        </div>
        <div className={this.state.olaModalOpen ? "modal is-active" : "modal"}>
          <div onClick={this.toggleOlaModal} className="modal-background"></div>
          <div className="animate__animated animate__backInRight">
            <div className="modal-card ola-modal">
              <header className="modal-card-head">
                <p className="modal-card-title">Ola Williams</p>
                <button onClick={this.toggleOlaModal} className="delete" aria-label="close"></button>
              </header>
              <section className="modal-card-body">
                <figure className="image is-128x128">
                  <img src={ola} alt="Rene Steer" />
                </figure>
                <div className="content">
                  <p>
                    Ola Williams co-founded Sporting Kids alongside his partner Rene Steer. His sporting story began playing football at the age of 11 for his local Sunday League team Pinnacle Youth.

                    Following this, Ola's football career continued to grow, playing semi professional football from the age of 16 where he made his first team debut for Borehamwood FC. He has since played for Billericay FC and currently plays at a semi professional level for Finchley and Wingate FC.
                  </p>
                  <p>
                    Ola’s coaching career started working part time at Borehamwood FC where he began his work with children, coaching during half term football camps. He has also worked alongside ex Arsenal legend- Rachel Yankee, coaching in primary schools in North West London. More recently, Ola broadened his experience working with 16-18 year olds as Head of Recruitment for London Rangers FC.   

                    Throughout his coaching career Ola has worked towards various coaching qualifications such as the FA Level 1 in coaching football and a Level 3 Diploma in Sport and Exercise Sciences.
                  </p>
                  <p>
                    Ola's vision is for Sporting Kids is to enable children to experience and enjoy all different types of sports, we want to encourage children to have fun and bring the community together.
                  </p>
                </div>
              </section>
              <footer className="modal-card-foot">
                Olas Contact
              </footer>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default About