import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router.js'
import axios from './utils/axios'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastClick from 'fastclick'
import './assets/styles/iconfont/iconfont.css'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
