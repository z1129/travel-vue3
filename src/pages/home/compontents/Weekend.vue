<template>
    <div class="weekend">
        <div class="hot-recommend">周末旅游</div>
        <ul>
            <li class="item-warp border-bottom" v-for="item in weekendList" :key="item.id">
                <div class="img-wrapp">
                    <img :src="item.src" alt="阿欧">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props:{
        weekendList: Array
    }
    
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.hot-recommend
    line-height .8rem
    margin-top .2rem
    text-indent .2rem
    background #eee
.item-warp
    .img-wrapp
        overflow hidden
        height 0
        padding-bottom 33.9%
        img
            width 100%
            padding .1rem
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            ellipsis()
            line-height .4rem
            color #ccc
        .item-button
            padding 0 .2rem
            background #ff9300
            color #ffffff
            border-radius .06rem
            margin-top .16rem
</style>