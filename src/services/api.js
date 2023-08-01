
import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=037422a57e813fac7c6bb87a5ac218da&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;