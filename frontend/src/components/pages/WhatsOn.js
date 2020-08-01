/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import {getEvent} from '../../lib/api'

class WhatsOn extends React.Component {
  state = {
    event: null
  }

  // * Get Event at index 0 as they wish to post one at a time - so latest event
  async componentDidMount(){
    try {
      const res = await getEvent()
      const data = res.data[0]
      this.setState({event: data})
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    if (!this.state.event) return <div className="no-event"><h1>No event at this current time</h1></div> 
    const {event} = this.state
    console.log(event)
    return (
      <div className="whatson">
        <section className="hero is-link has-text-centered">
          <div className="change hero-body">
            <div className="container">
              <h1 className="title">
                Whats on
              </h1>
              <h2 className="subtitle">
                something or other
              </h2>
            </div>
          </div>
        </section>
        <section className="whatson-info">
          <div className="whatson-event">
            <h1 className="title">{event.title}</h1>
            <p>{event.description} </p>
          <p>{event.date} </p>
          <p>{event.time} </p>
          </div>
          <div className="divider"></div>
          <div className="whatson-directions">
            <article className="message is-warning">
              <div className="message-header">
                <p>Directions</p>
              </div>
              <div className="message-body">
                map corordinates (if we are using map) and directions sent from the backend here
              </div>
            </article>
          </div>
        </section>
      </div>
      
    )
  }
}

export default WhatsOn