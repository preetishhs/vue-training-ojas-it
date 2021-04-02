import 'regenerator-runtime/runtime'
import {
  shallowMount,
  mount,
  createLocalVue,
  RouterLinkStub,
} from '@vue/test-utils'
import HeaderView from '@/components/HeaderView.vue'
import Vuex from 'vuex'
import Vuei18n from 'vue-i18n'
import i18n from '@/plugins/i18n'
import { cloneDeep } from 'lodash'
import storeConfig from '../factory/vuex-data'

let localStoreConfig, store, stubs, mocks, localVue

beforeEach(() => {
  localVue = createLocalVue()
  localVue.use(Vuex)
  localVue.use(Vuei18n)
  localStoreConfig = cloneDeep(storeConfig)
  store = new Vuex.Store(localStoreConfig)
  stubs = {
    RouterLink: RouterLinkStub,
  }
})

describe('testing logout functionality', () => {
  test('check if logout button is visible', () => {
    const wrapper = shallowMount(HeaderView, {
      localVue,
      store,
      i18n,
    })
    expect(wrapper.contains('.logout-button')).toBe(true)
  })

  test('check if logout action is called on click', async () => {
    const wrapper = shallowMount(HeaderView, {
      localVue,
      store,
      i18n,
      stubs,
    })
    wrapper.find('.logout-button').trigger('click')
    await wrapper.vm.$nextTick()
    expect(localStoreConfig.modules.auth.actions.logoutUser).toHaveBeenCalled()
  })
})
