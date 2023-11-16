<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="imgAbsent()" :alt="title" class="w-100" style="height: 459px;" />
            </div>
            <div class="flip-card-back overflow-y-auto">
                <h5 class="title">{{ title }}</h5>
                <h6 class="title">{{ originalTitle }}</h6>
                <img :src="flagSwitch()" :alt="language" class="flags-w">
                <p><i class="fa-solid fa-star" v-for="n in Math.round(vote / 2)"></i></p>
                <p>{{ plot }}</p>
            </div>
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
        plot: String
    },
    data() {
        return {
            store
        }
    },
    methods: {
        flagSwitch() {
            if (this.language === 'en') {
                return this.store.flagsList.en
            } else if (this.language === 'fr') {
                return this.store.flagsList.fr
            } else if (this.language === 'ja') {
                return this.store.flagsList.ja
            }
        },
        imgAbsent() {
            if (this.img) {
                return store.imgLink + this.img;
            } else {
                return '/images/nope-not-here.jpg';
            }
        }
    },
    created() {
    }
}
</script>

<style lang="scss">
.flags-w {
    width: 50px;
}

.flip-card {
    background-color: transparent;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: #bbb;
    color: black;
}

.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: grey;
    color: white;
    transform: rotateY(180deg);
}
</style>