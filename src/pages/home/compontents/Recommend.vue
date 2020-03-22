<template>
    <div class="recommend">
        <div class="hot-recommend">热门推荐</div>
        <ul>
            <li class="item-warp border-bottom" v-for="item in recommendList" :key="item.id">
                <img :src="item.src" alt="阿欧">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props:{
        recommendList: Array
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
    display flex
    img
        width 1.7rem
        height 1.7rem
        padding .1rem
    .item-info
        flex 1
        padding .1rem
        min-width 0
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