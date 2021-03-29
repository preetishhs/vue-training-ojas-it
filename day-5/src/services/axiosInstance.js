import axios from 'axios'

let config = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Accept: 'application/json',
  },
  timeout: 20000,
}

const api = axios.create(config)

api.interceptors.request.use(
  (response) => {
    console.log('successful request call')
    return response
  },
  (error) => {
    console.log('Request failed')
    return error
  }
)

api.interceptors.response.use(
  (response) => {
    console.log('successful call')
    return response
  },
  (error) => {
    console.log('Request failed')
    return error
  }
)

export { api }
