import 'regenerator-runtime/runtime'
import Modal from '@/components/Modal.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
let mocks = {
  $emit: jest.fn(),
  $router: {
    push: jest.fn(),
  },
  $route: {
    params: {
      id: 1,
    },
    query: {
      username: 'john',
    },
  },
}
test('check if slots are rendered', () => {
  const wrapper = shallowMount(Modal, {
    localVue,
    slots: {
      header: '<h2>SignUp Page</h2>',
      footer: 'All rights reserved',
    },
  })
  expect(wrapper.text()).toContain('SignUp Page')
  expect(wrapper.text()).toContain('All rights reserved')
})

test('check if close event is emitted on close click', async () => {
  const wrapper = shallowMount(Modal, {
    localVue,
    mocks,
  })
  wrapper.find('.close').trigger('click')
  await wrapper.vm.$nextTick()
  expect(mocks.$emit).toHaveBeenCalledWith('close', true)
})

test('check if router push opens login page', async () => {
  const wrapper = shallowMount(Modal, {
    localVue,
    mocks,
  })
  wrapper.find('.open-login').trigger('click')
  await wrapper.vm.$nextTick()
  expect(mocks.$router.push).toHaveBeenCalledWith({ name: 'login' })
})
