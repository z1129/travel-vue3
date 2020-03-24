import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router.js'
import axios from './utils/axios'
import store from '@/store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastClick from 'fastclick'
import './assets/styles/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
