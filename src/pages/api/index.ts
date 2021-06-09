import axios from 'axios';

import { FetchGenreProps, FetchMovieProps } from '@utils/types/api';

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

const fetchMovieTopRated = async (): Promise<FetchMovieProps[]> => {
  try {
    const { data: movieTopRated } = await hostEnv.get('movie-top-rated');

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

export {
  // baseURL
  tmdbApi,
  hostEnv,
  // route
  movieDiscover,
  searchMovie,
  topRated,
  genres,
  // route params
  apiKey,
  ptBR,
  // entry point requests
  fetchMovieDiscover,
  fetchMovieTopRated,
  fetchMovieDiscoverWithGenre,
  fetchGenres,
  fetchSearchMovie,
};
