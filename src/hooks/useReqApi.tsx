import {
  fetchGenres,
  fetchMovieDiscover,
  fetchMovieDiscoverWithGenre,
  fetchMovieDetail,
} from '@pages/api';

import React, { createContext, useContext, useEffect, useState } from 'react';

import {
  FetchMovieProps,
  FetchGenreProps,
  FetchMovieDetailProps,
} from '@utils/types/api';
import { ChildrenGlobalType } from '@utils/types/GlobalTypes';
import { ReqApiValCtx } from '@utils/types/hooks';

const ReqApiContext = createContext({} as ReqApiValCtx);

export const ReqApiProvider = ({ children }: ChildrenGlobalType) => {
  const [movieDiscoverApi, setMovieDiscoverApi] = useState<FetchMovieProps[]>(
    [],
  );
  const [movieWithGenreApi, setMovieWithGenreApi] = useState<FetchMovieProps[]>(
    [],
  );
  const [genreApi, setGenreApi] = useState<FetchGenreProps[]>([]);
  const [movieDetailApi, setMovieDetailApi] = useState<FetchMovieDetailProps>(
    {} as FetchMovieDetailProps,
  );

  useEffect(() => {
    reqApi(8, undefined);
  }, []);

  const reqApi = async (genre_id?: number, movie_id?: number) => {
    if (genre_id) {
      setMovieWithGenreApi(await fetchMovieDiscoverWithGenre(genre_id)); // Filtered by genre
    }

    if (movie_id) {
      const movieDetailSelected = await fetchMovieDetail(movie_id); // Get details by selected movie

      localStorage.setItem(
        '@SunoMoveis:movie-selected',
        JSON.stringify(movieDetailSelected),
      );

      setMovieDetailApi(movieDetailSelected);
    }

    setMovieDiscoverApi(await fetchMovieDiscover()); // List movies
    setGenreApi(await fetchGenres()); // Get genre categories
  };

  const valCtx = {
    movieDiscoverApi,
    movieWithGenreApi,
    movieDetailApi,
    genreApi,
    reqApi,
  } as ReqApiValCtx;

  return (
    <ReqApiContext.Provider value={valCtx}>{children}</ReqApiContext.Provider>
  );
};

export const useReqApi = () => {
  return useContext(ReqApiContext);
};
