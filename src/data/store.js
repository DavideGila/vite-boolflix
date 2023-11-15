import {reactive} from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        series: 'search/tv'
    },
    params: {
        api_key: 'a9f12e55fa53586e59311102e6a5b433',
        query: 'star wars'
    },
    error: '',
    loading: true,
    movieList:[],
    seriesList:[],
    flagsList:
        {
            en: '/images/Flag_of_the_United_Kingdom.png',
            fr: '/images/Flag_of_France.jpg',
            ja: '/images/Flag_of_Japan.jpg'
        }
})