import React from 'react'

import { getEvent, editEvent } from '../../lib/api'

import EventForm from './EventForm'

class EventEdit extends React.Component {
  state = {
    formData: {
      title: '',
      subtitle: '',
      description: '',
      date: '',
      time: ''
    }
  }

  async componentDidMount() {
    const eventId = this.props.match.params.id
    try {
      const res = await getEvent(eventId)
      this.setState({ formData: res.data[0] })
    } catch (err) {
      console.log(err.response)
      this.props.history.push('/notfound')
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const eventId = this.props.match.params.id
    try {
      await editEvent(eventId, this.state.formData)
      this.props.history.push('/whatson')
    } catch (err) {
      console.log(err.response)
    }
  }

  render() {
    console.log(this.state.formData, 'from event edit')
    return (
      <div className="event-edit">
        <section className="section">
          <EventForm
            formData={this.state.formData}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            buttonText="Edit Event"
          />
        </section>
      </div>
      
    )
  }
}

export default EventEdit