<template>
    <div>
        <img :src="img" :alt="title" class="w-100"/>
        <div class="text-center bg-cards h">
            <h5 class="title">{{ title }}</h5>
            <h6 class="title">{{ originalTitle }}</h6>
            <img :src="flagSwitch()" :alt="language" class="flags-w">
            <p><i class="fa-solid fa-star" v-for="n in Math.round(vote / 2)"></i></p>
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
        vote: Number,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        flagSwitch(){
            if(this.language === 'en'){
                return this.store.flagsList.en
            } else if(this.language === 'fr'){
                return this.store.flagsList.fr
            } else if(this.language === 'ja'){
                return this.store.flagsList.ja
            }
        }
    },
    created(){
    }
}
</script>

<style lang="scss">
.flags-w{
    width: 50px;
}
</style>