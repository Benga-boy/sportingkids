import React from 'react'

import { getEvent, editEvent } from '../../lib/api'

import EventForm from './EventForm'

class EventEdit extends React.Component {
  state = {
    formData: {
      title: '',
      subtitle: '',
      description: '',
      image: '',
      date: '',
      time: ''
    },
    renderedImage: null
  }

  async componentDidMount() {
    const eventId = this.props.match.params.id
    try {
      const res = await getEvent(eventId)
      const binary = await this.arrayBufferToBase64(res.data[0].image.data)
      this.setState({ formData: res.data[0], renderedImage: binary })
    } catch (err) {
      console.log(err.response)
      this.props.history.push('/notfound')
    }
  }

  async arrayBufferToBase64(data) {
    let binary = ''
    const bytes = await new Uint8Array( data )
    const len = bytes.byteLength
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] )
    }
    return binary
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
    console.log(this.state.renderedImage)
    return (
      <div className="event-edit">
        <section className="section">
          <EventForm
            formData={this.state.formData}
            renderedImage={this.state.renderedImage}
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