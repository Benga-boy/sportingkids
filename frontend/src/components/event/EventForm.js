import React from 'react'

const EventForm = ({ formData, handleChange, handleSubmit, buttonText }) =>
  (
    <div className="event-form">
      <div className="columns">
        <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
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
            <button type="submit" className="button is-fullwidth is-link">{buttonText}</button>
          </div>
        </form>
      </div>
    </div>
  )

export default EventForm