<template>
  <div class="gallary" @click="handleClose">
      <div class="wrapper">
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in gallaryImgs" :key="index">
                <img class="swiper-img" :src="item">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Gallary',
    props: {
        gallaryImgs:{
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            swiperOption:{
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true,
                observer: true
            }
        }
    },
    methods: {
        handleClose(){
            this.$emit('changeClose')
        }
    }
}
</script>

<style lang="stylus" scoped>
.gallary >>> .swiper-container
    overflow inherit
.gallary
    z-index 99
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background #000
    display flex
    flex-direction column
    justify-content center 
    .wrapper
        background #FFF
        .swiper-img
            width 100%
        .swiper-pagination
            color #fff
            bottom -1rem

</style>