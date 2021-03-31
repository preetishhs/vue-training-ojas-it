import { api } from '@/services/axiosInstance'

export function getArticlesData() {
  return api
    .get('/posts')
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error.response)
    })
}

export function getArticleDetail(id) {
  return api
    .get('/posts/' + id)
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error.response)
    })
}
