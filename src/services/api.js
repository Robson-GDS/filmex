import axios from 'axios';

// BASE DA URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=215676f43605ace1c8ac8237af04ecf1

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;