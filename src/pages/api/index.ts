import axios from 'axios';

import {
  FetchGenreProps,
  FetchMovieProps,
  FetchMovieDetailProps,
  FetchMovieVideoProps,
} from '@utils/types/api';

const { tmdbApi, hostEnv } = {
  tmdbApi: axios.create({
    baseURL: 'https://api.themoviedb.org/3',
  }),
  hostEnv: axios.create({
    baseURL:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000/api' // development
        : 'https://suno-movies.vercel.app/api', // production
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

const fetchMovieDiscover = async (): Promise<FetchMovieProps[]> => {
  try {
    const { data: movie } = await hostEnv.get('movie-discover');

    return movie;
  } catch (err) {
    console.error(err);
  }
};

const fetchMovieTopRated = async (
  genre_id: number,
): Promise<FetchMovieProps[]> => {
  try {
    const { data: movieTopRated } = await hostEnv.get(
      `movie-top-rated/${genre_id}`,
    );

    return movieTopRated;
  } catch (err) {
    console.error(err);
  }
};

const fetchMovieDiscoverWithGenre = async (
  genre_id: number,
): Promise<FetchMovieProps[]> => {
  try {
    const { data: filteredGenre } = await hostEnv.get(
      `movie-discover-with-genre/${genre_id}`,
    );

    return filteredGenre;
  } catch (err) {
    console.error(err);
  }
};

const fetchGenres = async (): Promise<FetchGenreProps[]> => {
  try {
    const { data: genres } = await hostEnv.get('genres');

    return genres;
  } catch (err) {
    console.error(err);
  }
};

const fetchSearchMovie = async (search: string): Promise<FetchMovieProps[]> => {
  try {
    const { data: foundMovie } = await hostEnv.get(`movie-search/${search}`);

    return foundMovie;
  } catch (err) {
    console.error(err);
  }
};

const fetchMovieDetail = async (
  movie_id: number,
): Promise<FetchMovieDetailProps> => {
  try {
    const { data: movieDetail } = await hostEnv.get(`movie-detail/${movie_id}`);

    return movieDetail;
  } catch (err) {
    console.error(err);
  }
};

const fetchMovieVideo = async (
  movie_id: number,
): Promise<FetchMovieVideoProps> => {
  try {
    const { data: trailer } = await hostEnv.get(`movie-video/${movie_id}`);

    return trailer;
  } catch (err) {
    console.error(err);
  }
};

export {
  // baseURL
  tmdbApi,
  hostEnv,
  // route
  movie,
  movieDiscover,
  searchMovie,
  topRated,
  genres,
  // route params
  apiKey,
  ptBR,
  // entrypoint requests
  fetchMovieDiscover,
  fetchMovieTopRated,
  fetchMovieDiscoverWithGenre,
  fetchGenres,
  fetchSearchMovie,
  fetchMovieDetail,
  fetchMovieVideo,
};
