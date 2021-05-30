import axios from 'axios';

import { fetchMovieDiscoverProps } from '@utils/types/services';

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
  fetchMovieDiscoverProps[]
> => {
  try {
    const { data: result } = await api.get(movieDiscover, {
      params: {
        api_key: apiKey,
        language: ptBR,
        page: 1,
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

export const fetchName = async () => {
  try {
  } catch (err) {
    console.error(err);
  }
};
