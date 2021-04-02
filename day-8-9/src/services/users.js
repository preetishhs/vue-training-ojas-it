import { api } from '@/services/axiosInstance'

export function getUsersData() {
  return api
    .get('/users')
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error.response)
    })
}

export function getUserDetail(id) {
  return api
    .get('/users/' + id)
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error.response)
    })
}

export function updateUserDetail(user) {
  return api
    .put('/users/' + user.id, {
      user,
    })
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error.response)
    })
}
