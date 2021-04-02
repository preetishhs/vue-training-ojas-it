import 'regenerator-runtime/runtime'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Article from '@/views/Article.vue'

const localVue = createLocalVue()

test('check if Article content is rendered', () => {
  const wrapper = shallowMount(Article, {
    localVue,
    propsData: {
      articles: {
        title: 'my title',
        body: 'my description',
      },
    },
  })
  expect(wrapper.find('.title').text()).toBe('my title')
  expect(wrapper.find('.body').text()).toBe('my description')
})

test('update data and check render', async () => {
  const wrapper = shallowMount(Article, {
    localVue,
    propsData: {
      articles: {
        title: 'my title',
        body: 'my description',
      },
    },
    data() {
      return {
        subtitle: 'changed',
      }
    },
  })
  // wrapper.vm.$data.subtitle = 'changed'
  // wrapper.setData({ subtitle: 'changed' })
  // await wrapper.vm.$nextTick()
  expect(wrapper.find('.subtitle').text()).toBe('changed')
})
