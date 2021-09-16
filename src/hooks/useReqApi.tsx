import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  fetchGenres,
  fetchMovieDiscover,
  fetchMovieDiscoverWithGenre,
} from '@pages/api';

import { FetchMovieProps, FetchGenreProps } from '@utils/types/api';
import { ChildrenGlobalType } from '@utils/types/GlobalTypes';
import { ReqApiValCtx } from '@utils/types/hooks';

const ReqApiContext = createContext({} as ReqApiValCtx);

export const ReqApiProvider = ({
  children,
}: ChildrenGlobalType): JSX.Element => {
  const [movieDiscoverApi, setMovieDiscoverApi] = useState<FetchMovieProps[]>(
    [],
  );
  const [movieWithGenreApi, setMovieWithGenreApi] = useState<FetchMovieProps[]>(
    [],
  );
  const [genreApi, setGenreApi] = useState<FetchGenreProps[]>([]);

  const reqApi = useCallback(async (genreID: number) => {
    if (genreID) {
      setMovieWithGenreApi(await fetchMovieDiscoverWithGenre(genreID)); // Filtered by genre
    }

    setMovieDiscoverApi(await fetchMovieDiscover()); // List movies
    setGenreApi(await fetchGenres()); // Get genre categories
  }, []);

  useEffect(() => {
    reqApi(8);
  }, [reqApi]);

  const valCtx = {
    movieDiscoverApi,
    movieWithGenreApi,
    genreApi,
    reqApi,
  } as ReqApiValCtx;

  return (
    <ReqApiContext.Provider value={valCtx}>{children}</ReqApiContext.Provider>
  );
};

export const useReqApi = (): ReqApiValCtx => {
  return useContext(ReqApiContext);
};
