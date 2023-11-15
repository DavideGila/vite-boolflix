<template>
    <div>
        <img :src="movieImg" :alt="movieTitle" class="w-100"/>
        <div class="text-center bg-cards h">
            <h5 class="title">{{ movieTitle }}</h5>
            <h6 class="title">{{ movieOriginalTitle }}</h6>
            <p>{{ movieLanguage }}</p>
            <p>{{ movieVote }}</p>
        </div>
    </div>
    <div>
        <div>
            <img :src="seriesImg" :alt="seriesTitle" class="w-100"/>
            <div class="text-center bg-cards h">
                <h5 class="title">{{ seriesTitle }}</h5>
                <h6 class="title">{{ seriesOriginalTitle }}</h6>
                <p>{{ seriesLanguage }}</p>
                <p>{{ seriesVote }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js'
export default {
    name: 'MainComponent',
    props: {
        movieImg: String,
        movieTitle: String,
        movieOriginalTitle: String,
        movieLanguage: String,
        movieVote: Number,
        seriesImg: String,
        seriesTitle: String,
        seriesOriginalTitle: String,
        seriesLanguage: String,
        seriesVote: Number
    },
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss">
</style>