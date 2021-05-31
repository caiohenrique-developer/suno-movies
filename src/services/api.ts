import axios from 'axios';

import {
  FetchGenreProps,
  FetchMovieDiscoverProps,
} from '@utils/types/services';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// route
const movieDiscover = 'discover/movie';
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

    return result['results'].map((movie) => ({
      id: movie['id'],
      title: movie['title'],
      poster: `https://image.tmdb.org/t/p/original${movie['poster_path']}`,
      description: movie['overview'],
      genreIDs: movie['genre_ids'],
      average: movie['vote_average'],
    }));
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

export const fetchName = async (): Promise<void> => {
  try {
  } catch (err) {
    console.error(err);
  }
};
