import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './router'

import { Collapse, Button } from 'buefy'
import 'buefy/dist/buefy.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})

Vue.use(Collapse)
Vue.use(Button)
