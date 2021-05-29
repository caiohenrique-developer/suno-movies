import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const ptBR = 'pt-BR';
const nowPlayingUrl = 'movie/now_playing';
const topratedUrl = 'movie/top_rated';
const movieUrl = 'movie';
const genreUrl = 'genre/movie/list';
const moviesUrl = 'discover/movie';
const personUrl = 'trending/person/week';
const apiKey = process.env.API_KEY;

export const fetchMovies = async () => {
  try {
    const { data: movies } = await api.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: ptBR,
      },
    });

    return movies;
  } catch (error) {}
};

export const fetchName = async () => {
  try {
  } catch (error) {}
};
