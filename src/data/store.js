import {reactive} from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        series: 'search/tv'
    },
    params: {
        api_key: 'a9f12e55fa53586e59311102e6a5b433',
        query: 'a'
    },
    error: '',
    loading: true,
    movieList:[],
    seriesList:[]
})

