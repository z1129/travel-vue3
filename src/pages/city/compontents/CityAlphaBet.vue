<template>
  <div  class="alphabet">
      <div class="right-list">
        <div class="item"  
            v-for="item of letters" 
            :key="item" 
            :ref="item"
            @click="handleClick"
            @touchstart.prevent="handletouchStart"
            @touchmove="handletouchMove"
            @touchend="handletouchEnd"
        >
        {{item}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CityAlphaBet',
    props: {
        cities: Object
    },
    data(){
        return {
            istouch: false,
            startY: 0,
            timer: null
        }
    },
    computed:{
        letters() {
            const letters = []
            for(var i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    updated(){
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods:{
        handleClick(e){
            this.$emit('clickalpha', e.target.innerHTML)
        },
        handletouchStart() {
            this.istouch = true
        },
        handletouchMove(e){
            if(this.istouch) {
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout( () => {
                    const clientY = e.touches[0].clientY - 86
                    const index = Math.floor((clientY - this.startY) / 20)
                    if( index >= 0 && index < this.letters.length){
                        this.$emit('clickalpha', this.letters[index])
                    }
                },16)
            }
        },
        handletouchEnd(){
            this.istouch = false
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
.right-list
    position absolute
    top 1.7rem
    right 0
    bottom 0
    width .4rem
    display flex
    flex-direction column
    justify-content center
    .item
        color $bgColor
        height .4rem
        text-align center
</style>