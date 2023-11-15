<template>
    <div>
        <img :src="img" :alt="title" class="w-100"/>
        <div class="text-center bg-cards h">
            <h5 class="title">{{ title }}</h5>
            <h6 class="title">{{ originalTitle }}</h6>
            <p>{{ language }}</p>
            <p>{{ vote }}</p>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js'
export default {
    name: 'MainComponent',
    props: {
        img: String,
        title: String,
        originalTitle: String,
        language: String,
        vote: Number
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