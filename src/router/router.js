import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/pages/home/Home.vue'
import List from '@/pages/list/List.vue'
import City from '@/pages/city/City.vue'


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
        }
    ]
})

