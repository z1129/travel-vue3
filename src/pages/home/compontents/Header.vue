<template>
    <div class="header">
        <div class="header-left"><i class="iconfont icon-fanhui1"></i></div>
        <div class="header-input">
            <i class="iconfont icon-sousuo"></i>
            输入城市/景点游玩主题</div>
        <router-link to="/city">
            <div class="header-right">
                {{city}}
                <i class="iconfont icon-jiantouarrow483"></i>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    props: {
        city: String
    }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
.header
    line-height .86rem
    background $bgColor
    display flex
    color #FFF
    .header-left
        width .64rem
        .icon-fanhui1
            text-align center
            font-size .4rem
            display block
    .header-input
        flex 1
        background #ffffff
        border-radius 5px
        color #ccc
        margin-top .12rem
        margin-left .2rem
        height .64rem
        line-height .64rem
        padding-left .2rem
    .header-right
        width 1.24rem
        text-align center
        color #fff
</style>