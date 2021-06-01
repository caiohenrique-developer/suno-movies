import { fetchGenres, fetchMovieDiscover } from '@services/api';

import React, { createContext, useContext, useEffect, useState } from 'react';

const ReqApiContext = createContext({} as contextVal);

import {
  FetchMovieDiscoverProps,
  FetchGenreProps,
} from '@utils/types/services';
import { ChildrenGlobalType } from '@utils/types/GlobalTypes';
import { contextVal } from '@utils/types/hooks';

export const ReqApiProvider = ({ children }: ChildrenGlobalType) => {
  const [movieDiscoverApi, setMovieDiscoverApi] = useState<
    FetchMovieDiscoverProps[]
  >([]);
  const [genreApi, setGenreApi] = useState<FetchGenreProps[]>([]);

  useEffect(() => {
    const reqApi = async () => {
      setMovieDiscoverApi(await fetchMovieDiscover());
      setGenreApi(await fetchGenres());
    };

    reqApi();
  }, []);

  const valCtx = {
    movieDiscoverApi,
    genreApi,
  };

  return (
    <ReqApiContext.Provider value={valCtx}>{children}</ReqApiContext.Provider>
  );
};

export const useReqApi = () => {
  return useContext(ReqApiContext);
};
