import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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

const router = new VueRouter({
  routes
})

export default router
