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
                
            }
            // iconlist: []
        }
    },
    props: {
        iconlist: {
            type: Array
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