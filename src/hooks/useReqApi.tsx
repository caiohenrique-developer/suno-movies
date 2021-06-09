import {
  fetchGenres,
  fetchMovieDiscover,
  fetchMovieDiscoverWithGenre,
  fetchMovieTopRated,
} from '@pages/api';

import React, { createContext, useContext, useEffect, useState } from 'react';

const ReqApiContext = createContext({} as ReqApiValCtx);

import { FetchMovieProps, FetchGenreProps } from '@utils/types/api';
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

  useEffect(() => {
    reqApi(8);
  }, []);

  const reqApi = async (genre_id?: number) => {
    if (genre_id !== 8) {
      setMovieWithGenreApi(await fetchMovieDiscoverWithGenre(genre_id));
    } else {
      setMovieWithGenreApi(await fetchMovieTopRated(genre_id));
    }

    setMovieDiscoverApi(await fetchMovieDiscover());
    setGenreApi(await fetchGenres());
  };

  const valCtx = {
    movieDiscoverApi,
    movieWithGenreApi,
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
