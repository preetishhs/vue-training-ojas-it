import { login } from '@/services/auth'

const auth = {
  namespaced: true,
  state: {
    auth: {},
  },
  getters: {
    isLoggedIn(state) {
      if (state.auth.status) {
        return true
      } else {
        return false
      }
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.auth = payload
    },
  },
  actions: {
    loginUser(context, data) {
      return login(data)
        .then((response) => {
          console.log('Auth Successful')
          context.commit('updateUser', response)
          return true
        })
        .catch((error) => {
          console.log('Auth Failed')
          console.log(error)
          return false
        })
    },
    logoutUser(context) {
      context.commit('updateUser', {})
    },
  },
}

export default auth
