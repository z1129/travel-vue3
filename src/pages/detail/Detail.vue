<template>
  <div>
      <banner :gallaryImgs="gallaryImgs" :bannerImg="bannerImg" :sightName="sightName"></banner>
      <detail-header></detail-header>
      <detail-list :categoryList="categoryList"></detail-list>
  </div>
</template>

<script>
import Banner from './compontents/Banner.vue'
import DetailHeader from './compontents/Header.vue'
import DetailList from './compontents/List.vue'
import axios from 'axios'

export default {
    name: 'Detail',
    components: {
        Banner,
        DetailHeader,
        DetailList
    },
    data() {
        return {
            gallaryImgs: [],
            bannerImg: '',
            sightName:'',
            categoryList: []
        }
    },
    mounted (){
        axios.get('/api/detail.json',{
            params:{
                id:this.$route.params.id
            }
        }).then(this.handleinit)
    },
    methods: {
        handleinit (res){
            if(res.status === 200){
                console.log(res)
                this.gallaryImgs = res.data.data.gallaryImgs
                this.bannerImg = res.data.data.bannerImg
                this.sightName = res.data.data.sightName
                this.categoryList = res.data.data.categoryList
            }
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>