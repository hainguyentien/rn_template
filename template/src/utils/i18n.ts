import i18n from 'i18next'
import { en, vi } from 'locales'
import moment from 'moment'
import 'moment/locale/vi'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  fallbackLng: 'vi',
  lng: 'vi',

  resources: {
    en,
    vi,
  },

  ns: ['common'],
  defaultNS: 'common',

  debug: false,
})

moment.updateLocale(i18n.language, {})

export default i18n
