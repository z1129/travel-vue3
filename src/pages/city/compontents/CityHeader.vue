<template>
  <div  class="city-header">
      城市选择
      <router-link to="/">
        <i class="iconfont icon-fanhui1"></i>
      </router-link>
  </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'

.city-header
    height .86rem
    line-height .86rem
    background $bgColor
    color #fff
    text-align center
    font-size .32rem
    position relative
    .icon-fanhui1
        position absolute
        left 0
        top 0
        width .64rem
        color #fff
</style>