import axios from 'axios';

import {
  FetchGenreProps,
  FetchMovieDiscoverProps,
  FetchSearchMovieProps,
} from '@utils/types/services';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// route
const movieDiscover = 'discover/movie';
const searchMovie = 'search/movie';
const nowPlaying = 'movie/now_playing';
const topRated = 'movie/top_rated';
const genres = 'genre/movie/list';

// route params
const ptBR = 'pt-BR';
const voteAverage = 'vote_average.desc';
const apiKey = process.env.API_KEY;

export const fetchMovieDiscover = async (): Promise<
  FetchMovieDiscoverProps[]
> => {
  try {
    const { data: result } = await api.get(movieDiscover, {
      params: {
        api_key: apiKey,
        language: ptBR,
        page: 8,
      },
    });

    return result['results'].map((movie) => {
      const dataMounted = {
        id: movie['id'],
        title: movie['title'],
        description: movie['overview'],
        genreIDs: movie['genre_ids'],
        average: movie['vote_average'],
      };

      if (
        movie['poster_path'] == null ||
        movie['poster_path'] == undefined ||
        movie['poster_path'] == ''
      )
        return {
          ...dataMounted,
          poster: '/assets/poster-placeholder.png',
        };
      else
        return {
          ...dataMounted,
          poster: `https://image.tmdb.org/t/p/original${movie['poster_path']}`,
        };
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchGenres = async (): Promise<FetchGenreProps[]> => {
  try {
    const { data: result } = await api.get(genres, {
      params: {
        api_key: apiKey,
        language: ptBR,
      },
    });

    return result['genres'].map((genre) => ({
      id: genre['id'],
      genreName: genre['name'],
    }));
  } catch (err) {
    console.error(err);
  }
};

export const fetchSearchMovie = async (
  search: string,
): Promise<FetchSearchMovieProps[]> => {
  try {
    const { data: result } = await api.get(searchMovie, {
      params: {
        api_key: apiKey,
        language: ptBR,
        query: search,
      },
    });

    return result['results'].map((movie) => {
      const dataMounted = {
        id: movie['id'],
        title: movie['title'],
        genreIDs: movie['genre_ids'],
        average: movie['vote_average'],
      };

      if (
        movie['poster_path'] == null ||
        movie['poster_path'] == undefined ||
        movie['poster_path'] == ''
      )
        return {
          ...dataMounted,
          poster: '/assets/poster-placeholder.png',
        };
      else
        return {
          ...dataMounted,
          poster: `https://image.tmdb.org/t/p/original${movie['poster_path']}`,
        };
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchName = async (): Promise<void> => {
  try {
  } catch (err) {
    console.error(err);
  }
};
