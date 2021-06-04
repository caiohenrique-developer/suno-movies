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
    const reqApi = async () => {
      setMovieDiscoverApi(await fetchMovieDiscover());
      setMovieDiscoverWithGenreApi(await fetchMovieDiscoverWithGenre(28));
      setGenreApi(await fetchGenres());
    };

    reqApi();
  }, []);

  const reqMovieDiscoverWithGenreApi = async (genre_id: number) => {
    setMovieDiscoverWithGenreApi(await fetchMovieDiscoverWithGenre(genre_id));
  };

  const valCtx = {
    movieDiscoverApi,
    movieDiscoverWithGenreApi,
    genreApi,
    reqMovieDiscoverWithGenreApi,
  };

  return (
    <ReqApiContext.Provider value={valCtx}>{children}</ReqApiContext.Provider>
  );
};

export const useReqApi = () => {
  return useContext(ReqApiContext);
};
