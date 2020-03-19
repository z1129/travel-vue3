<template>
    <div class="weekend">
        <div class="hot-recommend">周末旅游</div>
        <ul>
            <li class="item-warp border-bottom" v-for="item in recommendList" :key="item.id">
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
    data(){
        return {
            recommendList: [
                {
                    id: '001',
                    title: '普陀岛1',
                    desc: '大理·洱海',
                    src: 'https://imgs.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg'
                },
                {
                    id: '002',
                    title: '普陀岛2',
                    desc: '大理·洱海',
                    src: 'https://imgs.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg'
                },
                {
                    id: '003',
                    title: '普陀岛3',
                    desc: '大理·洱海',
                    src: 'https://imgs.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg'
                },
                {
                    id: '004',
                    title: '普陀岛',
                    desc: '大理·洱海',
                    src: 'https://imgs.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg'
                }
            ]
        }
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