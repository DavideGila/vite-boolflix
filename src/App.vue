<template>
  <header>
    <HeaderComponent />
  </header>
  <main class="mt-5">
    <div class="container bg-dark">
      <h2 class="text-danger fs-1">Movies</h2>
      <div class="row">
        <MainComponent v-for="movie in store.movieList" :img="movie.poster_path" :title="movie.title"
          :originalTitle="movie.original_title" :language="movie.original_language" :vote="movie.vote_average"
          :plot="movie.overview" :id="movie.id" :backdrop="store.imgLink+movie.backdrop_path"
          @click="getMovieActors(movie.id), getMovieGenres(movie.id)"/>
        <h2 class="text-danger fs-1">Series</h2>
        <MainComponent v-for="serie in store.seriesList" :img="serie.poster_path" :title="serie.name"
          :originalTitle="serie.original_name" :language="serie.original_language" :vote="serie.vote_average"
          :plot="serie.overview" :id="serie.id" :backdrop="store.imgLink+serie.backdrop_path"
          @click="getSeriesActors(serie.id), getSeriesGenres(serie.id)"/>
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
      store,
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
        store.movieList = response.data.results;
      })
      const seriesUrl = store.apiUrl + store.endPoint.series;
      axios.get(seriesUrl, { params: store.params }).then((response) => {
        store.seriesList = response.data.results;
      })
    },
    getMovieActors(actorId) {
      store.actorsList = [];
      const movieActUrl = store.endPoint.actorsMovie + actorId + '/credits';
      axios.get(store.apiUrl + movieActUrl, { params: store.paramsActor }).then((response) => {
        for (let i = 0; i < 5; i++) {
          if (response.data.cast[i]) {
            store.actorsList.push(response.data.cast[i].name)
          }
        }
      })
    },
    getSeriesActors(actorId) {
      store.actorsList = [];
      const seriesActUrl = store.endPoint.actorsSeries + actorId + '/credits';
      axios.get(store.apiUrl + seriesActUrl, { params: store.paramsActor }).then((response) => {
        for (let i = 0; i < 5; i++) {
          if (response.data.cast[i]) {
            store.actorsList.push(response.data.cast[i].name)
            console.log(store.actorsList);
          }
        }
      })
    },
    getMovieGenres(genreId){
      store.genreList = []
      const genreUrl = store.endPoint.actorsMovie + genreId;
      axios.get(store.apiUrl + genreUrl, { params: store.paramsActor }).then((response) =>{
        response.data.genres.forEach(genre => {
          store.genreList.push(genre.name)
          return store.genreList
        });
      })
    },
    getSeriesGenres(genreId){
      store.genreList = []
      const genreUrl = store.endPoint.actorsSeries + genreId;
      axios.get(store.apiUrl + genreUrl, { params: store.paramsActor }).then((response) =>{
        response.data.genres.forEach(genre => {
          store.genreList.push(genre.name)
          return store.genreList
        });
      })
    }
  },
  created() {
    this.getMoviesAndSeries()
  }
}
</script>

<style lang="scss">
#app{
  background-image: url('./assets/images/film-icons-seamless-pattern-14b273.jpg');
  background-size: contain;
}
</style>