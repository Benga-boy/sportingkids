import React from 'react'

const EventNewForm = ({ formData, handleChange, handleSubmit, buttonText }) => (
  <div className="event-new-form">
     <div className="columns">
        <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
        <article className="message is-success">
                <div className="message-header">
                  <p> Site to convert addresses to Lat/Long for precise map location.</p>
                </div>
                <div className="message-body">
                <a target="_blank" href="https://www.latlong.net/convert-address-to-lat-long.html">Click Here</a>
                </div>
              </article>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className="input"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                value={formData.title}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Subtitle</label>
            <div className="control">
              <input
                className="input"
                placeholder="Subtitle"
                name="subtitle"
                onChange={handleChange}
                value={formData.subtitle}
              />
            </div>
          </div>
            <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input
                className="input"
                placeholder="Image"
                name="image"
                onChange={handleChange}
                value={formData.image}
              />
            </div> 
            </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                className="input"
                placeholder="Description"
                name="description"
                onChange={handleChange}
                value={formData.description}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Date</label>
            <div className="control">
              <input
                className="input"
                placeholder="Date"
                name="date"
                onChange={handleChange}
                value={formData.date}
              />
            </div>
          </div>
          <div className="field">
                <label className="label">Time</label>
            <div className="control">
              <input
                className="input"
                placeholder="Time"
                name="time"
                onChange={handleChange}
                value={formData.time}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Directions</label>
            <div className="control">
              <input
                className="input"
                placeholder="Directions"
                name="directions"
                onChange={handleChange}
                value={formData.directions}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Latitude</label>
            <div className="control">
              <input
                className="input"
                placeholder="Latitude"
                name="latitude"
                onChange={handleChange}
                value={formData.latitude}
              />
            </div>
          </div>
          <div className="field">
          <label className="label">Longitude</label>
            <div className="control">
              <input
                className="input"
                placeholder="Longitude"
                name="longitude"
                onChange={handleChange}
                value={formData.longitude}
                />
            </div>
            <button type="submit" className="button is-fullwidth is-link">{buttonText}</button>
          </div>
        </form>
      </div>
  </div>
)

export default EventNewForm