import axios from 'axios'

const skUrl = '/api'

// * Function to get an event
export const getEvent = () => {
  return axios.get(`${skUrl}/events`)
}