import 'core-js/stable'
import 'regenerator-runtime/runtime'
import articlesStoreConfig from '@/store/modules/articles'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import { api } from '@/services/axiosInstance'
import MockAdapter from 'axios-mock-adapter'
import { cloneDeep } from 'lodash'
import flushPromises from 'flush-promises'
const localVue = createLocalVue()
localVue.use(Vuex)
let store, axiosMock, articleList, mockStore

beforeEach(() => {
  mockStore = cloneDeep(articlesStoreConfig)
  store = new Vuex.Store(mockStore)
  axiosMock = new MockAdapter(api)
  articleList = [
    {
      id: 1,
      title: 'article 1',
      body: 'description 1',
    },
    {
      id: 2,
      title: 'article 2',
      body: 'description 2',
    },
  ]
})

test('test async calls', async () => {
  axiosMock.onGet('/posts').reply(200, articleList)
  await store.dispatch('getArticleList')
  await flushPromises()
  expect(store.state.articleList).toEqual(articleList)
})

test('test mutation', async () => {
  store.commit('updateArticleList', articleList)
  expect(store.state.articleList).toEqual(articleList)
})

test('test getter', () => {
  store.commit('updateArticleList', articleList)
  expect(store.getters.getArticleFiltered).toHaveLength(1)
})
