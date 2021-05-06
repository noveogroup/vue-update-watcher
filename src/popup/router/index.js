import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { routes } from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.name === 'Changelogs' && from.name === 'Home') {
    await store.dispatch('removeNotification', to.params.package)
  }
  next()
})

export default router
