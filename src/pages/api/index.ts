import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import {
  FetchGenreProps,
  FetchMovieDiscoverProps,
  FetchMovieDiscoverWithGenreProps,
  FetchSearchMovieProps,
} from '@utils/types/api';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// route
const movieDiscover = 'discover/movie';
const searchMovie = 'search/movie';
const topRated = 'movie/top_rated';
// https://api.themoviedb.org/3/movie/top_rated?api_key=key
const genres = 'genre/movie/list';

// route params
const ptBR = 'pt-BR';
const apiKey = process.env.API_KEY;

export default async function tst(req: NextApiRequest, res: NextApiResponse) {
  const { data: result } = await api.get(movieDiscover, {
    params: {
      page: 8,
      api_key: apiKey,
      language: ptBR,
      include_adult: false,
    },
  });

  const tst = result['results'].map((movie) => {
    const dataMounted = {
      id: movie['id'],
      title: movie['title'],
      description: movie['overview'],
      genreIDs: movie['genre_ids'],
      rating: movie['vote_average'],
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

  return res.json({
    ok: true,
    api_req: 'Requisição pelo arquivo index.ts!',
    tst,
  });
}

export const fetchMovieDiscover = async (): Promise<
  FetchMovieDiscoverProps[]
> => {
  try {
    const { data: result } = await api.get(movieDiscover, {
      params: {
        page: 8,
        api_key: apiKey,
        language: ptBR,
        include_adult: false,
      },
    });

    return result['results'].map((movie) => {
      const dataMounted = {
        id: movie['id'],
        title: movie['title'],
        description: movie['overview'],
        genreIDs: movie['genre_ids'],
        rating: movie['vote_average'],
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

export const fetchMovieDiscoverWithGenre = async (
  genre_id: number,
): Promise<FetchMovieDiscoverWithGenreProps[]> => {
  try {
    const { data: result } = await api.get(movieDiscover, {
      params: {
        api_key: apiKey,
        language: ptBR,
        with_genres: genre_id,
        include_adult: false,
      },
    });

    return result['results'].map((movie) => {
      const dataMounted = {
        id: movie['id'],
        title: movie['title'],
        description: movie['overview'],
        genreIDs: movie['genre_ids'],
        rating: movie['vote_average'],
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
        include_adult: false,
      },
    });

    return result['results'].map((movie) => {
      const dataMounted = {
        id: movie['id'],
        title: movie['title'],
        genreIDs: movie['genre_ids'],
        rating: movie['vote_average'],
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
