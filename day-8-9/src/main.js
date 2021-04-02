import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from '@/routes'
import store from '@/store'
import i18n from '@/plugins/i18n'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
