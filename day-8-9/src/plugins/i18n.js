import en from '@/locales/en'
import fr from '@/locales/fr'
import Vue from 'vue'
import Vuei18n from 'vue-i18n'
Vue.use(Vuei18n)

const i18n = new Vuei18n({
  messages: {
    en,
    fr,
  },
  fallbackLocale: 'en',
  locale: 'en',
})

export default i18n
