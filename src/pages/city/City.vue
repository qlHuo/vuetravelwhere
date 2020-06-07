<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list
          :cities='cities'
          :hotCities="hotCities"
          :letter='letter'
        ></city-list>
        <city-alphabet
          :cities='cities'
          @letterChange="handleLetterChange">
        </city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    async getCityInfo () {
      // axios 请求返回的是一个promise对象
      const { data: res } = await axios.get('/api/city.json')
      // console.log(res)
      if (res.ret && res.data) {
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
      // console.log(letter)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
