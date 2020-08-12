/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'


import { getEvent, deleteEvent } from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'

class WhatsOn extends React.Component {
  state = {
    event: null
  }

  // * Get Event at index 0 as they wish to post one at a time - so latest event
  async componentDidMount() {
    try {
      const res = await getEvent()
      const data = res.data[0]
      this.setState({ event: data })
    } catch (err) {
      console.log(err)
      this.props.history.push('/notfound')
    }
  }


  // * Function to handle deleting an event!
  handleDelete = async () => {
    try {
      const eventId = this.state.event._id
      await deleteEvent(eventId)
      this.props.history.push('/')
    } catch (err) {
      console.log(err.response)
    }
  }

  render() {
    if (!this.state.event) return <div className="no-event"><h1>No event at this current time</h1>
    {isAuthenticated && <Link to={`/whatson/create`} className="button is-link">Create Event</Link>}</div>
    
    const { event } = this.state
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
            <h1 className="title">{event.title}</h1> <br/>
            <figure className="image is-16by9">
              <img className="has-ratio" width="640" height="360" src="https://www.golfchannel.com/sites/default/files/2020/03/22/olympics_1920_sign.jpg" alt="Sporting Kids Events" frameBorder="0" allowFullScreen/>
            </figure> <br/>
            <div className="content is-small">
              <h5 className="title">Description</h5>
              <p>{event.description} </p>
              <h5 className="title">Date</h5>
              <p>{event.date} </p>
              <h5 className="title">Time</h5>
              <p>{event.time} </p>
            </div>
            {isAuthenticated() && <Link to={`/whatson/${event._id}/edit`} className="button is-link">Edit</Link>}
            {isAuthenticated() && <button onClick={this.handleDelete} className="button is-danger">Delete</button>}
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