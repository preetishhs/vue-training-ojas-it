import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import articles from './modules/articles'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    articles,
  },
})

export default store
