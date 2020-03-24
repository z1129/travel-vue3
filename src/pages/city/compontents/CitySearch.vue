<template>
    <div>
        <div  class="city-search">
            <input type="text" v-model="keyword" placeholder="输入城市名或拼音" class="search-input">
        </div>
        <ul class="search-list" v-show="keyword" ref="search">
            <li class="search-item border-bottom" v-for="item in list" :key= "item.id" >{{item.name}}</li>
            <li class="search-item border-bottom" v-show="hasNoData" style="text-align:center">暂无数据</li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'CityHeader',
    props: {
        cities: Object
    },
    data() {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData(){
            return !this.list.length
        }
    },
    watch: {
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list = []
            }
            this.timer = setTimeout(() => {
                const result = []
                for(var i in this.cities){
                    this.cities[i].forEach(ele => {
                        if(ele.spell.indexOf(this.keyword) > -1 || ele.name.indexOf(this.keyword) > -1){
                            result.push(ele)
                        }
                    })
                }
                this.list = result
            },100)
        }   
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.search)
    }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'

.city-search
    height .86rem
    line-height .86rem
    background $bgColor
    padding 0 .1rem
    .search-input
        box-sizing border-box
        width 100%
        padding 0 .1rem
        height .64rem
        line-height .64rem
        text-align center
        color #666
        border-radius .1rem
.search-list
    z-index 1
    position absolute
    top 1.73rem
    left 0
    right 0
    bottom 0
    background #eee
    overflow hidden
    .search-item
        background #fff
        padding-left .2rem
        height .44rem
        line-height .44rem
</style>