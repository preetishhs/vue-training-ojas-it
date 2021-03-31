import Vue from 'vue'
import Vuei18n from 'vue-i18n'
Vue.use(Vuei18n)
import en from '@/locales/en'
import fr from '@/locales/fr'
import numberFormats from '@/formats/numberFormats'
import dateTimeFormats from '@/formats/dateTimeFormats'

const i18n = new Vuei18n({
  messages: {
    en,
    fr,
  },
  numberFormats,
  dateTimeFormats,
  fallbackLocale: 'en',
  locale: fetchBrowserLanguage(),
})

function fetchBrowserLanguage() {
  const lang = navigator.language
  if (lang.startsWith('en')) {
    return 'en'
  } else {
    return 'fr'
  }
}

export default i18n
