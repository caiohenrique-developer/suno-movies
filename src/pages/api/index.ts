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

const fetchMovieDiscover = async (): Promise<FetchMovieProps[]> => {
  try {
    const fetchResponse = await axios.all([
      hostEnv.get('movie-discover'),
      hostEnv.get('genres'),
    ]);

    const dataRes = fetchResponse.map(({ data: result }) => result);

    const movieApi = dataRes[0].map(
      ({ id, genreIDs, title, poster, rating, description }) => {
        const genre = dataRes[1]
          .filter(({ id: genreID }) => genreIDs.includes(genreID))
          .map(({ genreName }) => genreName)
          .join(', ');

        return { id, genre, title, poster, rating, description };
      },
    );

    return movieApi;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchMovieDiscoverWithGenre = async (
  genreID: number,
): Promise<FetchMovieProps[]> => {
  try {
    const fetchResponse = await axios.all([
      hostEnv.get(`movie-discover-with-genre/${genreID}`),
      hostEnv.get('genres'),
    ]);

    const dataRes = fetchResponse.map(({ data: result }) => result);

    const filteredGenreApi = dataRes[0].map(
      ({ id, genreIDs, title, poster, rating, description }) => {
        const genre = dataRes[1]
          .filter(({ id: filterGenreID }) => genreIDs.includes(filterGenreID))
          .map(({ genreName }) => genreName)
          .join(', ');

        return { id, genre, title, poster, rating, description };
      },
    );

    return filteredGenreApi;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchGenres = async (): Promise<FetchGenreProps[]> => {
  try {
    const { data: genre } = await hostEnv.get('genres');

    return genre;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchSearchMovie = async (search: string): Promise<FetchMovieProps[]> => {
  try {
    const fetchResponse = await axios.all([
      hostEnv.get(`movie-search/${search}`),
      hostEnv.get('genres'),
    ]);

    const dataRes = fetchResponse.map(({ data: result }) => result);

    const foundMovieApi = dataRes[0].map(
      ({ id, genreIDs, title, poster, rating, description }) => {
        const genre = dataRes[1]
          .filter(({ id: genreID }) => genreIDs.includes(genreID))
          .map(({ genreName }) => genreName)
          .join(', ');

        return { id, genre, title, poster, rating, description };
      },
    );

    return foundMovieApi;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchMovieDetail = async (
  movieID: number,
): Promise<FetchMovieDetailProps> => {
  try {
    const { data: movieDetailApi } = await hostEnv.get(
      `movie-detail/${movieID}`,
    );

    return movieDetailApi;
  } catch (err) {
    throw new Error(err);
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
  fetchMovieDiscoverWithGenre,
  fetchGenres,
  fetchSearchMovie,
  fetchMovieDetail,
};
