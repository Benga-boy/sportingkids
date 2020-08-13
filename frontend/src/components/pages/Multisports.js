import React from 'react'

const Multisports = () => {
  return (
    <div className="multisports">
      <section className="multi-sports-background hero is-danger has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              MULTI SPORTS COACHING
            </h1>
            <h2 className="subtitle">
              All sports
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title">Section</h1>
          <h2 className="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </section>
      <section className="infos-and-testimonial">
        <div className="multisports-info">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <img src="https://static.wixstatic.com/media/1a0189_f288ece6945247a7a8d88fdce15c77ae~mv2_d_5184_3456_s_4_2.jpg/v1/crop/x_145,y_0,w_4894,h_3456/fill/w_1082,h_764,al_c,q_85,usm_0.66_1.00_0.01/IMG_1576_JPG.webp" alt="Sporting Kids Multisports Services" />
        </div>
        <div className="divider"></div>
        <div className="multisports-services-testimonial">
          <article className="message is-success">
            <div className="message-header">
              <p>Jane Doe, Parent</p>
            </div>
            <div class="message-body">
              <em>"Thank you sporting kids Ryan never really liked playing football with his friends and often missed out on sports, its so great to see him enjoying your lunchtime tennis lessons. All schools should introduce lunchtime classes like this!"</em>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Multisports