import Default from '@/popup/layouts/Default.vue'
import HomeView from '../views/HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'Default',
    component: Default,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView
      },
      {
        path: '/changelogs/:package',
        name: 'Changelogs',
        component: () =>
          import(
            /* webpackChunkName: "abChangelogViewout" */ '../views/ChangelogView.vue'
          )
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () =>
          import(
            /* webpackChunkName: "SettingsView" */ '../views/SettingsView.vue'
          )
      }
    ]
  }
]
