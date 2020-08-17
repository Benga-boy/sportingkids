import React from 'react'

import { createEvent } from '../../lib/api'
import EventNewForm from './EventNewForm'

class EventNew extends React.Component {
  state = {
    formData: {
      title: '',
      subtitle: '',
      desciption: '',
      date: '',
      time: ''
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await createEvent(this.state.formData)
      console.log(res)
      this.props.history.push('/whatson')
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state.formData)
    return (
      <div className="event-new">
        <section className="section">
          <EventNewForm
            formData={this.state.formData}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            buttonText="Make Event"
          />
        </section>
      </div>
    )
  }
}

export default EventNew