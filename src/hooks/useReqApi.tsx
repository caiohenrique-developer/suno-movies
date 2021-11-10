import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { fetchMovieDiscover } from '@pages/api';
import { FetchMovieProps } from '@pages/api/_types';

import { ChildrenGlobalType } from '@utils/types/GlobalTypes';
import { ReqApiCtxVal } from '@utils/types/hooks';

const ReqApiContext = createContext({} as ReqApiCtxVal);

export const ReqApiProvider = ({
  children,
}: ChildrenGlobalType): JSX.Element => {
  const [movieDiscoverApi, setMovieDiscoverApi] = useState<FetchMovieProps[]>(
    [],
  );

  const reqApi = useCallback(async () => {
    setMovieDiscoverApi(await fetchMovieDiscover()); // List movies
  }, []);

  useEffect(() => {
    reqApi();
  }, [reqApi]);

  const ctxVal = {
    movieDiscoverApi,
    reqApi,
  } as ReqApiCtxVal;

  return (
    <ReqApiContext.Provider value={ctxVal}>{children}</ReqApiContext.Provider>
  );
};

export const useReqApi = (): ReqApiCtxVal => {
  return useContext(ReqApiContext);
};
