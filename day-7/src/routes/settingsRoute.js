import AccountSettings from '@/views/AccountSettings.vue'
import PrivacySettings from '@/views/PrivacySettings.vue'
import AppSettings from '@/views/AppSettings.vue'

const settingRoute = [
  {
    path: 'account',
    name: 'accountSettings',
    component: AccountSettings,
  },
  {
    path: 'privacy',
    name: 'privacySettings',
    component: PrivacySettings,
  },
  {
    path: 'app',
    name: 'appSettings',
    component: AppSettings,
  },
]

export default settingRoute
