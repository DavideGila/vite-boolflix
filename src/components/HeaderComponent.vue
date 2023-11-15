<template>
    <div class="d-flex justify-content-between align-items-center bg-dark">
        <h1 class="text-danger">Boolflix</h1>
        <div class="search-bar">
            <div class="input-group input-group-sm mb-3">
                <button class="input-group-text justify-content-center bg-white" @click="filterName">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <input type="text" class="form-control" placeholder="Cerca" v-model.trim="search" />
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js'
import axios from 'axios'

export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
            search: '',
        }
    },
    methods: {
        filterName() {
            const movieUrl = store.apiUrl + store.endPoint.movie;
            const seriesUrl = store.apiUrl + store.endPoint.series;
            if (this.search !== '') {
                this.store.params.query = this.search
                axios.get(movieUrl, { params: store.params }).then((response) => {
                    console.log(response.data.results);
                    store.movieList = response.data.results;
                })
                axios.get(seriesUrl, { params: store.params }).then((response) => {
                    console.log(response.data.results);
                    store.seriesList = response.data.results;
                })
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>