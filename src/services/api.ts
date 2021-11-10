import axios from 'axios';

const { tmdbApi, hostEnv } = {
  tmdbApi: axios.create({
    baseURL: 'https://api.themoviedb.org/3',
  }),
  hostEnv: axios.create({
    baseURL: '/api',
  }),
};

// route
const movie = 'movie';
const movieDiscover = 'discover/movie';
const searchMovie = 'search/movie';
const topRated = 'movie/top_rated';
const genres = 'genre/movie/list';

// route params
const ptBR = 'pt-BR';
const apiKey = process.env.API_KEY;

export {
  // baseURL
  tmdbApi,
  hostEnv,
  // route
  movie,
  genres,
  topRated,
  searchMovie,
  movieDiscover,
  // route params
  ptBR,
  apiKey,
};
