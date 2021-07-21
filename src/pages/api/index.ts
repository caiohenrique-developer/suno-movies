import axios from 'axios';

import {
  FetchGenreProps,
  FetchMovieProps,
  FetchMovieDetailProps,
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
    const fetchResponse = await axios.all([
      hostEnv.get('movie-discover'),
      hostEnv.get('genres'),
    ]);

    const dataRes = fetchResponse.map(({ data: result }) => result);

    const movie = dataRes[0].map(
      ({ id, genreIDs, title, poster, rating, description }) => {
        const genres = dataRes[1]
          .filter(({ id }) => genreIDs.includes(id))
          .map(({ genreName }) => genreName)
          .join(', ');

        return { id, genres, title, poster, rating, description };
      },
    );

    return movie;
  } catch (err) {
    console.error(err);
  }
};

const fetchMovieTopRated = async (
  genre_id: number,
): Promise<FetchMovieProps[]> => {
  try {
    const fetchResponse = await axios.all([
      hostEnv.get(`movie-top-rated/${genre_id}`),
      hostEnv.get('genres'),
    ]);

    const dataRes = fetchResponse.map(({ data: result }) => result);

    const movieTopRated = dataRes[0].map(
      ({ id, genreIDs, title, poster, rating, description }) => {
        const genres = dataRes[1]
          .filter(({ id }) => genreIDs.includes(id))
          .map(({ genreName }) => genreName)
          .join(', ');

        return { id, genres, title, poster, rating, description };
      },
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
    const fetchResponse = await axios.all([
      hostEnv.get(`movie-discover-with-genre/${genre_id}`),
      hostEnv.get('genres'),
    ]);

    const dataRes = fetchResponse.map(({ data: result }) => result);

    const filteredGenre = dataRes[0].map(
      ({ id, genreIDs, title, poster, rating, description }) => {
        const genres = dataRes[1]
          .filter(({ id }) => genreIDs.includes(id))
          .map(({ genreName }) => genreName)
          .join(', ');

        return { id, genres, title, poster, rating, description };
      },
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
    const fetchResponse = await axios.all([
      hostEnv.get(`movie-search/${search}`),
      hostEnv.get('genres'),
    ]);

    const dataRes = fetchResponse.map(({ data: result }) => result);

    const foundMovie = dataRes[0].map(
      ({ id, genreIDs, title, poster, rating, description }) => {
        const genres = dataRes[1]
          .filter(({ id }) => genreIDs.includes(id))
          .map(({ genreName }) => genreName)
          .join(', ');

        return { id, genres, title, poster, rating, description };
      },
    );

    return foundMovie;
  } catch (err) {
    console.error(err);
  }
};

const fetchMovieDetail = async (
  movie_id: number,
): Promise<FetchMovieDetailProps> => {
  try {
    const fetchResponse = await axios.all([
      hostEnv.get(`movie-detail/${movie_id}`),
      hostEnv.get(`movie-video/${movie_id}`),
    ]);

    const dataRes = fetchResponse.map(({ data: result }) => result);

    const movieDetail = { ...dataRes[0], ...dataRes[1] };

    return movieDetail;
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
};
