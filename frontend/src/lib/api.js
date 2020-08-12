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

export const loginUser = formData => {
  return axios.post(`${skUrl}/login`, formData)
}