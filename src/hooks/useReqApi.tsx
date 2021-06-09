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
  const [movieDiscoverWithGenreApi, setMovieDiscoverWithGenreApi] = useState<
    FetchMovieProps[]
  >([]);
  const [genreApi, setGenreApi] = useState<FetchGenreProps[]>([]);

  useEffect(() => {
    reqApi();
  }, []);

  const reqApi = async (genre_id?: number) => {
    setMovieDiscoverWithGenreApi(
      await fetchMovieDiscoverWithGenre(genre_id ? genre_id : 28),
    );
    // setMovieDiscoverWithGenreApi(
    //   await fetchMovieTopRated(genre_id ? genre_id : 28),
    // );

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
