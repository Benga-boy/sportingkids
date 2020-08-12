import axios from 'axios'
import { getToken } from './auth'

const skUrl = '/api'

const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

// * Function to get an event
export const getEvent = () => {
  return axios.get(`${skUrl}/events`)
}

export const createEvent = () => {
  return axios.post(`${skUrl}/events`)
}

export const editEvent = (id, formData) => {
  return axios.put(`${skUrl}/events/${id}`, formData, withHeaders())
}

export const deleteEvent = (id) => {
  return axios.delete(`${skUrl}/events/${id}`, withHeaders())
}

export const loginUser = formData => {
  return axios.post(`${skUrl}/login`, formData)
}