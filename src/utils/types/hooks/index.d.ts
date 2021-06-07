import {
  FetchMovieDiscoverProps,
  FetchMovieDiscoverWithGenreProps,
  FetchGenreProps,
} from '@utils/types/api';

// usePageIndicator
export interface PageIDContextProps {
  pageID: string;
  addPageID(page: string): void;
}

// useReqApi
export interface contextValue {
  movieDiscoverApi: FetchMovieDiscoverProps[];
  movieDiscoverWithGenreApi: FetchMovieDiscoverWithGenreProps[];
  genreApi: FetchGenreProps[];
  reqApi(genre_id?: number): void;
}
