import axios from 'axios';

import {
  FetchGenreProps,
  FetchMovieDiscoverProps,
  FetchMovieDiscoverWithGenreProps,
  FetchSearchMovieProps,
} from '@utils/types/api';

const { tmdbApi, smEnv } = {
  tmdbApi: axios.create({
    baseURL: 'https://api.themoviedb.org/3',
  }),
  smEnv: axios.create({
    baseURL: !!process.env.HOST_ENV
      ? 'http://localhost:3000/api'
      : 'https://suno-movies.vercel.app/api',
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

export const fetchMovieDiscover = async (): Promise<
  FetchMovieDiscoverProps[]
> => {
  try {
    const { data: result } = await tmdbApi.get(movieDiscover, {
      params: {
        page: 1,
        api_key: apiKey,
        language: ptBR,
        include_adult: false,
      },
    });

    return result['results'].map(
      ({
        id,
        title,
        overview: description,
        genre_ids: genreIDs,
        vote_average: rating,
        poster_path: poster,
      }) => {
        const dataMounted = {
          id,
          title,
          description,
          genreIDs,
          rating,
        };

        if (poster == null || poster == undefined || poster == '')
          return {
            ...dataMounted,
            poster: '/assets/poster-placeholder.png',
          };
        else
          return {
            ...dataMounted,
            poster: `https://image.tmdb.org/t/p/original${poster}`,
          };
      },
    );
  } catch (err) {
    console.error(err);
  }
};

export const fetchMovieDiscoverWithGenre = async (
  genre_id: number,
): Promise<FetchMovieDiscoverWithGenreProps[]> => {
  try {
    const { data: filteredGenre } = await smEnv.get(
      `movie-discover-with-genre/${genre_id}`,
    );

    return filteredGenre;
  } catch (err) {
    console.error(err);
  }
};

export const fetchGenres = async (): Promise<FetchGenreProps[]> => {
  try {
    const { data: result } = await tmdbApi.get(genres, {
      params: {
        api_key: apiKey,
        language: ptBR,
      },
    });

    return result['genres'].map(({ id, name: genreName }) => ({
      id,
      genreName,
    }));
  } catch (err) {
    console.error(err);
  }
};

export const fetchSearchMovie = async (
  search: string,
): Promise<FetchSearchMovieProps[]> => {
  try {
    const { data: result } = await tmdbApi.get(searchMovie, {
      params: {
        api_key: apiKey,
        language: ptBR,
        query: search,
        include_adult: false,
      },
    });

    return result['results'].map(
      ({
        id,
        title,
        genre_ids: genreIDs,
        vote_average: rating,
        poster_path: poster,
      }) => {
        const dataMounted = {
          id,
          title,
          genreIDs,
          rating,
        };

        if (poster == null || poster == undefined || poster == '')
          return {
            ...dataMounted,
            poster: '/assets/poster-placeholder.png',
          };
        else
          return {
            ...dataMounted,
            poster: `https://image.tmdb.org/t/p/original${poster}`,
          };
      },
    );
  } catch (err) {
    console.error(err);
  }
};

export {
  // baseURL
  tmdbApi,
  smEnv,
  // route
  movieDiscover,
  searchMovie,
  topRated,
  genres,
  // route params
  apiKey,
  ptBR,
};
