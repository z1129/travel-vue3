<template>
    <div>
        <div class="banner" @click="hangleBannerClick">
            <img class="banner-img" src="https://img1.qunarzz.com/p/tts6/1612/6f/9aacc855cb61e902.jpg_r_640x420x95_a0b41223.jpg" alt="">
            <div class="info">
                <div class="info-name">产品编号 1907782332</div>
                <div class="info-number">
                    <i class="iconfont icon-tupian"></i>
                    18
            </div>
            </div>
        </div>
        <gallary :imgs="imgs" v-show="show" @changeClose= "hangleBannerClose"></gallary>
    </div>
    
</template>

<script>
import Gallary from 'common/gallary/Gallary.vue'
export default {
    name: 'Banner',
    components:{
        Gallary
    },
    data() {
        return {
            show: false,
            imgs: [
                "https://img1.qunarzz.com/p/tts6/1612/6f/9aacc855cb61e902.jpg_r_640x420x95_a0b41223.jpg",
                "https://img1.qunarzz.com/p/tts9/1612/47/f8788e49d32cbe02.jpg_r_1280x840x95_656ceaf9.jpg"
            ]
        }
    },
    methods: {
        hangleBannerClick(){
            this.show = true
        },
        hangleBannerClose(){
            this.show = false
        }
    }
}
</script>

<style lang="stylus" scoped>

.banner
    height 0
    padding-bottom 66%
    position relative
    .banner-img
        width 100%
    .info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        color #ffffff
        line-height .6rem
        background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.8))
        // background-image linear-gradient
        .info-name
            flex 1
            padding 0 .2rem
            font-size .32rem
        .info-number
            height .32rem
            line-height .32rem
            margin-top .14rem
            margin-right .2rem
            background rgba(0,0,0,.8)
            border-radius .2rem
            padding 0 .4rem
            font-size .24rem
            .icon-tupian
                font-size .14rem
</style>