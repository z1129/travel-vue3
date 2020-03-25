<template>
    <div>
        <div class="banner" @click="hangleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="info">
                <div class="info-name">{{sightName}}</div>
                <div class="info-number">
                    <i class="iconfont icon-tupian"></i>
                    {{gallaryImgs.length}}
            </div>
            </div>
        </div>
        <fade>
            <gallary :gallaryImgs="gallaryImgs" v-show="show" @changeClose= "hangleBannerClose"></gallary>
        </fade>
    </div>
    
</template>

<script>
import Gallary from 'common/gallary/Gallary.vue'
import Fade from 'common/Fade.vue'
export default {
    name: 'Banner',
    components:{
        Gallary,
        Fade
    },
    props: {
        gallaryImgs: Array,
        bannerImg: String,
        sightName: String
    },
    data() {
        return {
            show: false
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