<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper></home-swiper>
        <home-icons :iconlist="iconlist"></home-icons>
        <home-recommend :recommendList= "recommendList"></home-recommend>
        <home-weekend :weekendList= "weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './compontents/Header'
import HomeSwiper from './compontents/Swiper'
import HomeIcons from './compontents/Icons'
import HomeRecommend from './compontents/Recommend'
import HomeWeekend from './compontents/Weekend'
import axios from 'axios'

export default {
    name: 'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return {
            city: '',
            iconlist: [],
            recommendList: [],
            weekendList: []
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            axios.get('/api/index.json')
            .then(this.getInfo)
        },
        getInfo(res){
            res = res.data
            if(res.data) {
                const data = res.data
                this.city = data.city
                this.iconlist = data.iconlist
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
                
            }
        }
    }
}
</script>

<style lang='stylus' scoped>

</style>