<template>
    <h2>Movies</h2>
    <div v-for="movie in store.movieList"> {{ movie.title }}</div>

    <h2>Series</h2>
    <div v-for="serie in store.seriesList"> {{ serie.name }}</div>
</template>

<script>
import {store} from '../data/store.js'
    export default {
        name: 'MainComponent',
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>