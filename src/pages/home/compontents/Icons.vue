<template>
    <div class="icons">
        <!-- {{pages}} -->
        <swiper  :options="swiperOption" >
            <!-- slides -->
            <swiper-slide v-for="page in pages" :key="page.id">
                <div class="icon-item" v-for="item in page" :key="item.id">
                    <img :src="item.src" class="imgs">
                    <div class="desc">{{item.desc}}</div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data(){
        return {
            swiperOption: {
                
            },
            iconlist: [
                {
                    id: 1,
                    src: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    desc: '酒店1'
                },
                {
                    id: 2,
                    src: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    desc: '酒店2'
                },
                {
                    id: 3,
                    src: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    desc: '酒店3'
                },
                {
                    id: 4,
                    src: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    desc: '酒店4'
                },
                {
                    id: 5,
                    src: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    desc: '酒店5'
                },
                {
                    id: 6,
                    src: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    desc: '酒店6'
                },
                {
                    id: 7,
                    src: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    desc: '酒店7'
                },
                {
                    id: 8,
                    src: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    desc: '酒店8'
                },
                {
                    id: 9,
                    src: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    desc: '酒店8'
                },
                {
                    id: 10,
                    src: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    desc: '酒店8'
                }
            ]
        }
    },
    computed: {
        pages() {
            var pages = []
            this.iconlist.forEach((item,index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item) 
                
            })
            return pages
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
.icons
    overflow hidden
    width 100%
    height 0
    padding-bottom 45%
    margin-top .1rem
    .icon-item
        width 25%
        float left
        .imgs
            display block
            width 1rem
            margin 0 auto
            padding .1rem
        .desc
            text-align center
            height .44rem
            line-height .44rem
</style>