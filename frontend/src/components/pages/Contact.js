import React from 'react'

const Contact = () => {
  return (
    <div className="contact-us">
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">
              We will love to hear from you!
            </h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-one-third">
              <form method="POST" action="https://formspree.io/mknqkgww">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input is-medium is-link" type="text" placeholder="Full Name" name="name" required/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input is-medium is-link" type="text" placeholder="Email Address" name="email" required/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Subject</label>
                  <div className="control">
                    <input className="input is-medium is-link" type="text" placeholder="Subject" name="subject" required/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                  <textarea className="textarea is-medium is-link" placeholder="Message" name="message" required/>
                  </div>
                </div>
                <button className="button is-medium is-link">SEND</button>
              </form>
            </div>
            <div className="divider"></div>
            <div className="column is-half">
            <iframe src="https://cdn.forms-content.sg-form.com/3f77d55f-cc14-11ea-833a-7e3deb42604a"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact