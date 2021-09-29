import { Dispatch, SetStateAction } from 'react';

import { FetchMovieProps } from '@utils/types/api';

// usePageIndicator
export type PageIDCtxProps = {
  pageID: string;
  addPageID(page: string): void;
};

// useReqApi
export type ReqApiCtxVal = {
  movieDiscoverApi: FetchMovieProps[];
  reqApi(): void;
};

// useFilteredButtonOption
export type FilteredButtonOptionCtxProps = {
  filteredLayout: string;
  filteredMoviesByGenre: FetchMovieProps[];
  setFilteredLayout: Dispatch<SetStateAction<string>>;
  setFilteredMoviesByGenre: Dispatch<SetStateAction<FetchMovieProps[]>>;
};
