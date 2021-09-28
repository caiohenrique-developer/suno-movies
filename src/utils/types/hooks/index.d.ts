import { FetchMovieProps, FetchGenreProps } from '@utils/types/api';

// usePageIndicator
export type PageIDCtxProps = {
  pageID: string;
  addPageID(page: string): void;
};

// useReqApi
export type ReqApiValCtx = {
  movieDiscoverApi: FetchMovieProps[];
  movieWithGenreApi: FetchMovieProps[];
  genreApi: FetchGenreProps[];
  reqApi(genreID: number): void;
};

// useFilteredButtonOption
export type FilteredButtonOptionCtxProps = {
  filteredLayout: string;
  setFilteredLayout: React.Dispatch<React.SetStateAction<string>>;
};
