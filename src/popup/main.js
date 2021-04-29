import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './router'
// import '../assets/scss/element-variables.scss'

import { Button, Select, Icon, Collapse, CollapseItem, Row, Col } from 'element-ui'
Vue.use(Button)
Vue.use(Select)
Vue.use(Icon)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Row)
Vue.use(Col)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
