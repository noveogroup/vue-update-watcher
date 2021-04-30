import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './router'
import '@/assets/scss/globals.scss'
import '@/assets/scss/element-variables.scss'

import {
  Button,
  Select,
  Option,
  Collapse,
  Icon,
  CollapseItem,
  Row,
  Col,
  Slider,
  Switch
} from 'element-ui'

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Icon)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Slider)
Vue.use(Switch)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
