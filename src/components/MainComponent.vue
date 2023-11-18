<template>
    <div class="col-3">
        <div class="flip-card pb-3">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img :src="imgAbsent()" :alt="title" class="w-100" style="height: 459px;" />
                </div>
                <div class="flip-card-back d-flex justify-content-center align-items-center flex-column">
                    <div class="overflow-y-auto">
                        <h5 class="title">{{ title }}</h5>
                        <h6 class="title">{{ originalTitle }}</h6>
                        <img :src="flagSwitch()" :alt="language" class="flags-w">
                        <p><i class="fa-solid fa-star text-warning" v-for="n in Math.round(vote / 2)"></i></p>
                        <button class="btn" type="button" @click="moreInfo()">More Info</button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="appear" @click="closeInfo()" class="info d-flex justify-content-center align-items-center text-white">
            <div class="w-50 overflow-y-auto">
                <img :src="backdrop" :alt="originalTitle" class="w-100">
                <h2 class="title">{{ title }}</h2>
                <h4 class="title">{{ originalTitle }} </h4>
                <p><i class="fa-solid fa-star text-warning" v-for="n in Math.round(vote / 2)"></i></p>
                <span>Main Cast:</span>
                <span v-for="actor in store.actorsList" class="px-2">{{ actor }}</span> <br>
                <span>Genre:</span>
                <span v-for="genre in store.genreList" class="px-2">{{ genre }}</span>
                <div class="pt-3">Plot:</div>
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
        plot: String,
        backdrop: String
    },
    data() {
        return {
            store,
            appear: false
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
        },
        moreInfo() {
            if (!this.appear) {
                this.appear = true;
                return
            }
        },
        closeInfo(){
            if (this.appear) {
                this.appear = false;
                return
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

.info {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2000;
    background-color: rgba(0, 0, 0, 0.3);
    >div{
        background-color: black;
    }
}
</style>