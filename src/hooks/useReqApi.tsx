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
  fetchMovieDetail,
} from '@pages/api';

import {
  FetchMovieProps,
  FetchGenreProps,
  FetchMovieDetailProps,
} from '@utils/types/api';
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
  const [movieDetailApi, setMovieDetailApi] = useState<FetchMovieDetailProps>(
    {} as FetchMovieDetailProps,
  );

  const reqApi = useCallback(async (genreID: number, movieID: number) => {
    if (genreID) {
      setMovieWithGenreApi(await fetchMovieDiscoverWithGenre(genreID)); // Filtered by genre
    }

    if (movieID) {
      const movieDetailSelected = await fetchMovieDetail(movieID); // Get details by selected movie

      localStorage.setItem(
        '@SunoMoveis:movie-selected',
        JSON.stringify(movieDetailSelected),
      );

      setMovieDetailApi(movieDetailSelected);
    }

    setMovieDiscoverApi(await fetchMovieDiscover()); // List movies
    setGenreApi(await fetchGenres()); // Get genre categories
  }, []);

  useEffect(() => {
    reqApi(8, undefined);
  }, [reqApi]);

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

export const useReqApi = (): ReqApiValCtx => {
  return useContext(ReqApiContext);
};
