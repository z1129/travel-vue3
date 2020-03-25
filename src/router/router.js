import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/pages/home/Home.vue'
import List from '@/pages/list/List.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'


export default new Router({
    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/list',
            name: 'List',
            component: List
        },
        {
            path: '/city',
            name: 'City',
            component: City
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: Detail
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {
            x: 0,
            y: 0
        }
      }
})

