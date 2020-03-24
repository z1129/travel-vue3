<template>
    <div>
        <city-header></city-header>
        <city-search :cities= "cities"></city-search>
        <city-list :cities= "cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alpha-bet :cities= "cities" @clickalpha="clickalpha"></city-alpha-bet>
    </div>
</template>

<script>
import CityHeader from './compontents/CityHeader'
import CitySearch from './compontents/CitySearch'
import CityList from './compontents/CityList'
import CityAlphaBet from './compontents/CityAlphaBet'
import axios from 'axios'

export default {
    name:'city',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphaBet
    },
    data(){
        return {
            cities: {},
            hotCities: [],
            letter: ''
        }
    },
    mounted() {
        axios.get('/api/city.json')
        .then(this.getcity)
    },
    methods:{
        getcity(res){
            if(res.data.ret) {
                this.hotCities = res.data.data.hotCities
                this.cities = res.data.data.cities
            }
        },
        clickalpha(letter){
            if(letter){
                this.letter = letter
            }
        }
    }
}
</script>

<style scoped lang='stylus'>

</style>