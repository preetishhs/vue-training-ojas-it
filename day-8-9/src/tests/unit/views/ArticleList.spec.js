import { mount, createLocalVue } from '@vue/test-utils'
import ArticleList from '@/views/ArticleList.vue'
import Vuex from 'vuex'
import Vuei18n from 'vue-i18n'
import i18n from '@/plugins/i18n'
import storeConfig from './articleListFactory'
import { cloneDeep } from 'lodash'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuei18n)
let localStoreConfig, store, stubs, mocks

beforeEach(() => {
  localStoreConfig = cloneDeep(storeConfig)
  store = new Vuex.Store(localStoreConfig)
})

describe('Article List tests', () => {
  test('Check if article list is fetched', () => {
    const wrapper = mount(ArticleList, {
      localVue,
      store,
      i18n,
    })
    expect(
      storeConfig.modules.articles.actions.getArticleList
    ).toHaveBeenCalledTimes(1)
  })

  test('Check if article list is rendered', () => {
    const wrapper = mount(ArticleList, {
      localVue,
      store,
      i18n,
    })
    expect(wrapper.findAll('.article')).toHaveLength(
      store.getters['articles/getArticleFiltered'].length
    )
  })
})
