import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Card from 'components/login/Card.vue'

describe('Card component', () => {
  const localVue = Vue.use(Vuetify)

  it('should render title', async () => {
    const wrapper = await shallowMount(Card, {
      localVue,
      mocks: {
        switchLocalePath: () => ''
      },
      propsData: {
        title: 'Please work'
      }
    })

    expect(wrapper.find('[data-testid="title-value"]').exists()).toBeTruthy()
  })
})
