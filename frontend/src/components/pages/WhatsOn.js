/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'
// import Map from '../event/Map'
import moment from 'moment'


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
      console.log(res.data)
      const data = res.data[0]
      this.setState({ event: data})
    } catch (err) {
      console.log(err)
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
    if (!this.state.event) return <section className="non-event hero is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          WE ARE WORKING ON SOME NEW EVENTS! PLEASE CHECK BACK SOONEST
          {isAuthenticated() && <Link to={'/whatson/create'} className="button is-link">Create Event</Link>}
        </h1>
      </div>
    </div>
  </section>
    
    const { event } = this.state


    // Convert date using moment
    const date = moment(event.date).format('LL')
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
            <h2 className="subtitle">{event.subtitle}</h2>
          
            <figure className="image is-16by9">
              <img className="has-ratio" width="640" height="360"
                src={event.image}
                frameBorder="0" allowFullScreen alt="Sporting Kids event"/>
            </figure>
            <br/>
            <div className="content is-medium">
              <h5 className="title">Description</h5>
              <p>{event.description} </p>
              <h5 className="title">Date</h5>
              <p>{date} </p>
              <h5 className="title">Time</h5>
              <p>{event.time} </p>
            </div>
            {isAuthenticated() && <Link to={`/whatson/${event._id}/edit`} className="button is-link" style={{ marginRight: '5px' }}>Edit</Link>}
            {isAuthenticated() && <button onClick={this.handleDelete} className="button is-danger">Delete</button>}
          </div>


          <div className="divider"></div>

          
          <div className="whatson-directions">
            {/* <div className="map">
              <Map
                longitude={event.longitude}
                latitude={event.latitude}
              />
            </div> */}

            <div className="map-directions">
              <article className="message is-warning" style={{ width: '480px', marginTop: '50px' }}>
                <div className="message-header">
                  <p>Directions</p>
                </div>
                <div className="message-body">
                  {event.directions}
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      
    )
  }
}

export default WhatsOn