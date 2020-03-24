<template>
  <div  class="city-list" ref="wrapper">
      <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="btnlist">
                <div class="btn">
                    <div class="btntext">北京</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="btnlist">
                <div class="btn" v-for="item in hotCities" :key="item.id">
                    <div class="btntext">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list" v-for="inneritem in item" :key="inneritem.id">
                <div class="item border-bottom">{{inneritem.name}}</div>
            </div>
        </div>
      </div>
      
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'CityList',
    props: {
        cities: Object,
        hotCities: Array,
        letter: String
    },
    mounted(){
       this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
        letter() {
            if(this.letter){
                const e = this.letter.trim()
                const ele = this.$refs[e][0]
                this.scroll.scrollToElement(ele)
            } 
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
.border-topbottom
    &:before
        border-color #ccc
    &:after
        border-color #ccc
.border-bottom
    &:before
        border-color #ccc
.city-list
    overflow hidden
    position absolute
    top 1.75rem
    bottom 0
    left 0
    right 0
.title
    height .5rem
    line-height .5rem
    background #eee
    color #666666
    font-size .26rem
    padding-left .2rem
.btnlist
    padding .1rem .6rem .1rem .1rem
    overflow hidden
    .btn
        float left
        width 33%
        .btntext
            border .02rem solid #cccccc
            border-radius .06rem
            margin .1rem
            text-align center
            padding .1rem 0
.item-list
    .item
        padding-left .2rem
        height .76rem
        line-height .76rem
</style>