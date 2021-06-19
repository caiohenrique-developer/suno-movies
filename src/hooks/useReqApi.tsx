import {
  fetchGenres,
  fetchMovieDiscover,
  fetchMovieDiscoverWithGenre,
  fetchMovieTopRated,
  fetchMovieDetail,
} from '@pages/api';

import React, { createContext, useContext, useEffect, useState } from 'react';

const ReqApiContext = createContext({} as ReqApiValCtx);

import {
  FetchMovieProps,
  FetchGenreProps,
  FetchMovieDetailProps,
} from '@utils/types/api';
import { ChildrenGlobalType } from '@utils/types/GlobalTypes';
import { ReqApiValCtx } from '@utils/types/hooks';

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
    if (genre_id !== 8) {
      // Filtered by all other genres
      setMovieWithGenreApi(await fetchMovieDiscoverWithGenre(genre_id));
    } else {
      // Filtered by "Populares" genre
      setMovieWithGenreApi(await fetchMovieTopRated(genre_id));
    }

    if (movie_id) {
      setMovieDetailApi(await fetchMovieDetail(movie_id));
    }

    setMovieDiscoverApi(await fetchMovieDiscover());
    setGenreApi(await fetchGenres());
  };

  const valCtx = {
    movieDiscoverApi,
    movieWithGenreApi,
    movieDetailApi,
    genreApi,
    reqApi,
  };

  return (
    <ReqApiContext.Provider value={valCtx}>{children}</ReqApiContext.Provider>
  );
};

export const useReqApi = () => {
  return useContext(ReqApiContext);
};
