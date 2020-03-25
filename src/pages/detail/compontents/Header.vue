<template>
    <div>
        <router-link tag="div" to="/" class="abs" v-show="isShow">
            <i class="iconfont icon-fanhui1 abs-icon-fanhui1"></i>
        </router-link>
        <div class="fixheader" v-show="!isShow" :style="opacityStyle">
            景点详情
            <router-link to="/">
                <i class="iconfont icon-fanhui1 fix-icon-fanhui1"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailHeader",
    data (){
        return {
            isShow: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        scrollmove (){
            console.log(1)
            const top = document.documentElement.scrollTop
            if (top > 40){
                const opacity = top /140
                opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.isShow = false
            } else {
                this.isShow = true
            }
        }
    },
    mounted (){
        window.addEventListener('scroll',this.scrollmove)
    },
    destroyed (){
        window.removeEventListener('scroll',this.scrollmove)
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'

.abs
    position absolute
    top .2rem
    left .2rem
    background rgba(0,0,0,.8)
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius 50%
    color #fff
    .abs-icon-fanhui1
        font-size .32rem
.fixheader
    height .86rem
    line-height .86rem
    background $bgColor
    color #fff
    text-align center
    font-size .32rem
    position fixed
    top 0
    left 0
    right 0
    .fix-icon-fanhui1
        position absolute
        left 0
        top 0
        width .64rem
        color #fff
</style>