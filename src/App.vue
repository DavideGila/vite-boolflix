<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <div class="container">
      <div class="row">
        <h2>Movies</h2>
        <div class="col-3" v-for="movie in store.movieList">
          <MainComponent 
            :img="'https://image.tmdb.org/t/p/w342/' + movie.poster_path" 
            :title="movie.title"
            :originalTitle="movie.original_title" 
            :language="movie.original_language"
            :vote="movie.vote_average"            
            />
        </div>
        <h2>Series</h2>
        <div class="col-3" v-for="serie in store.seriesList">
          <MainComponent
            :img="'https://image.tmdb.org/t/p/w342/' + serie.poster_path" 
            :title="serie.name"
            :originalTitle="serie.original_name" 
            :language="serie.original_language"
            :vote="serie.vote_average" />
        </div>

      </div>
    </div>

  </main>
</template>

<script>
import axios from 'axios'
import { store } from './data/store.js'
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'

export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  components: {
    HeaderComponent,
    MainComponent
  },
  methods: {
    getMoviesAndSeries() {
      const movieUrl = store.apiUrl + store.endPoint.movie;
      axios.get(movieUrl, { params: store.params }).then((response) => {
        console.log(response.data.results);
        store.movieList = response.data.results;
      })
      const seriesUrl = store.apiUrl + store.endPoint.series;
      axios.get(seriesUrl, { params: store.params }).then((response) => {
        console.log(response.data.results);
        store.seriesList = response.data.results;
      })
    }
  },
  created() {
    this.getMoviesAndSeries()
  }
}
</script>

<style lang="scss"></style>