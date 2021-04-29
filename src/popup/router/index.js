import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'
import Default from '@/popup/layouts/Default.vue'

Vue.use(VueRouter)

const routes = [
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
          import(/* webpackChunkName: "about" */ '../views/ChangelogView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  if ((to.name === 'Changelogs') && (from.name === 'Home')) {
    await store.dispatch('removeNotification', to.params.package)
  }
  next()
})

export default router
