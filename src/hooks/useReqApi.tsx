import {
  fetchGenres,
  fetchMovieDiscover,
  fetchMovieDiscoverWithGenre,
} from '@pages/api';

import React, { createContext, useContext, useEffect, useState } from 'react';

const ReqApiContext = createContext({} as contextValue);

import {
  FetchMovieDiscoverProps,
  FetchGenreProps,
  FetchMovieDiscoverWithGenreProps,
} from '@utils/types/api';
import { ChildrenGlobalType } from '@utils/types/GlobalTypes';
import { contextValue } from '@utils/types/hooks';

export const ReqApiProvider = ({ children }: ChildrenGlobalType) => {
  const [movieDiscoverApi, setMovieDiscoverApi] = useState<
    FetchMovieDiscoverProps[]
  >([]);
  const [movieDiscoverWithGenreApi, setMovieDiscoverWithGenreApi] = useState<
    FetchMovieDiscoverWithGenreProps[]
  >([]);
  const [genreApi, setGenreApi] = useState<FetchGenreProps[]>([]);

  useEffect(() => {
    reqApi();
  }, []);

  const reqApi = async (genre_id?: number) => {
    setMovieDiscoverWithGenreApi(
      await fetchMovieDiscoverWithGenre(genre_id ? genre_id : 28),
    );

    setMovieDiscoverApi(await fetchMovieDiscover());
    setGenreApi(await fetchGenres());
  };

  const valCtx = {
    movieDiscoverApi,
    movieDiscoverWithGenreApi,
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
