import { shallowMount, createLocalVue } from '@vue/test-utils'
import Login from '@/views/Login.vue'
import Vuex from 'vuex'
import storeConfig from '../factory/vuex-data'
import { cloneDeep } from 'lodash'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

const localVue = createLocalVue()
localVue.use(Vuex)
let localStoreConfig, store, stubs, mocks

beforeEach(() => {
  localStoreConfig = cloneDeep(storeConfig)
  store = new Vuex.Store(localStoreConfig)
  mocks = {
    $router: {
      push: jest.fn(),
    },
  }
})

test('check if login API is called', async () => {
  const wrapper = shallowMount(Login, {
    localVue,
    store,
    mocks,
  })
  await wrapper.find('.login-button').trigger('click')
  expect(localStoreConfig.modules.auth.actions.loginUser).toHaveBeenCalled()
})

test('check if router push is called', async () => {
  const wrapper = shallowMount(Login, {
    localVue,
    store,
    mocks,
  })
  await wrapper.find('.login-button').trigger('click')
  expect(mocks.$router.push).toHaveBeenCalledWith({ name: 'home' })
})
