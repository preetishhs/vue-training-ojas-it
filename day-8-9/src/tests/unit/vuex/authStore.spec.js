import 'core-js/stable'
import 'regenerator-runtime/runtime'
import authStoreConfig from '@/store/modules/auth'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import { cloneDeep } from 'lodash'
import flushPromises from 'flush-promises'
import { login } from '@/services/auth'
const localVue = createLocalVue()
localVue.use(Vuex)
let store, axiosMock, auth, mockStore

beforeEach(() => {
  mockStore = cloneDeep(authStoreConfig)
  store = new Vuex.Store(mockStore)
  auth = {
    email: 'phs',
    password: '1234',
  }
})

test('test async calls', async () => {
  await store.dispatch('loginUser', auth)
  await flushPromises()
  expect(store.state.auth.email).toEqual(auth.email)
})

test('test getters', async () => {
  await store.dispatch('loginUser', auth)
  await flushPromises()
  expect(store.getters.isLoggedIn).toBeTruthy()
})
