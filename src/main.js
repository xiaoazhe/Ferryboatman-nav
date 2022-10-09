import 'babel-polyfill'
import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import '@/assets/iconfont/iconfont.js'
import '@/assets/iconfont/iconfont.css'
import '@/assets/theme/index.css'
import '@/styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap'
import './permission.js' // 权限
import ElementUI from 'element-ui'

import directive from '@/directives'
import util from '@/utils'
import filter from '@/filters'
import component from '@/components/common'
import router from '@/router'

Vue.use(ElementUI)
Vue.use(directive)
Vue.use(util)
Vue.use(filter)
Vue.use(component)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
