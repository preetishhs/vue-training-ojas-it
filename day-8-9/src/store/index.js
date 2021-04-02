import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import articles from './modules/articles'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    articles,
  },
  plugins: [
    createPersistedState({
      paths: ['auth'],
    }),
  ],
})

export default store
