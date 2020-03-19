<template>
    <div class="wrap">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
                <img class="swiper-img" src="http://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="http://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>


<script>
export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: '.swiper-pagination'
        }
      }
    },
    // computed: {
    //   swiper() {
    //     return this.$refs.mySwiper.swiper
    //   }
    // },
    // mounted() {
    //   // current swiper instance
    //   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
    // }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
.wrap
    overflow hidden
    width 100%
    height 0
    padding-bottom 30.71%
    .swiper-img
        width 100%
</style>