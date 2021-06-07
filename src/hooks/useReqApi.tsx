import {
  fetchGenres,
  fetchMovieDiscover,
  // fetchMovieDiscoverWithGenre,
} from '@pages/api';

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

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
      try {
        setMovieDiscoverApi(await fetchMovieDiscover());
        // setMovieDiscoverWithGenreApi(await fetchMovieDiscoverWithGenre(28));
        setGenreApi(await fetchGenres());

        console.log('Resultado reqApi');

        const { data: action } = await axios.get(
          'https://suno-movies.vercel.app/api/movie-discover-with-genre/28',
        );

        setMovieDiscoverWithGenreApi(action);
      } catch (err) {
        console.error(err);
      }
    };

    reqApi();
  }, []);

  const reqMovieDiscoverWithGenreApi = async (genre_id: number) => {
    console.log('Resultado reqMovieDiscoverWithGenreApi');

    try {
      // setMovieDiscoverWithGenreApi(await fetchMovieDiscoverWithGenre(genre_id));

      const { data: genreFiltered } = await axios.get(
        `https://suno-movies.vercel.app/api/movie-discover-with-genre/${genre_id}`,
      );

      setMovieDiscoverWithGenreApi(genreFiltered);
    } catch (err) {
      console.error(err);
    }
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
