import { getArticlesData } from '@/services/articles'

const articles = {
  namespaced: true,
  state: {
    articleList: [],
    selectedArticle: {},
  },
  getters: {
    getArticleFiltered(state) {
      if (state.articleList && state.articleList.length) {
        return state.articleList.slice(0, 1)
      } else {
        return []
      }
    },
  },
  mutations: {
    updateArticleList(state, payload) {
      console.log('article updated', payload)
      state.articleList = payload
    },
  },
  actions: {
    getArticleList(context) {
      getArticlesData().then((response) => {
        context.commit('updateArticleList', response)
      })
    },
  },
}

export default articles
