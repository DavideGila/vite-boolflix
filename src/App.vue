<template>
  <MainComponent />
</template>

<script>
import axios from 'axios'
import {store} from './data/store.js'
import MainComponent from './components/MainComponent.vue'

  export default {
    name: 'App',
    data() {
      return {
        store        
      }
    },
    components: {
      MainComponent
    },
    methods: {
      getMoviesAndSeries(){
        const movieUrl = store.apiUrl+store.endPoint.movie;
        axios.get(movieUrl, {params: store.params}).then((response) => {
          console.log(response.data.results);
          store.movieList = response.data.results;
        })
        const seriesUrl = store.apiUrl+store.endPoint.series;
        axios.get(seriesUrl, {params: store.params}).then((response) => {
          console.log(response.data.results);
          store.seriesList = response.data.results;
        })
      }
    },
    created(){
      this.getMoviesAndSeries()
    }
  }
</script>

<style lang="scss">

</style>