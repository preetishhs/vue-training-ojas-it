import { getArticlesData } from '@/services/articles'

const articles = {
  namespaced: true,
  state: {
    articleList: {},
    selectedArticle: {},
  },
  getters: {
    getArticleFiltered(state) {
      if (state.articleList) {
        return state.articleList.slice(0, 10)
      } else {
        return []
      }
    },
  },
  mutations: {
    updateArticleList(state, payload) {
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
