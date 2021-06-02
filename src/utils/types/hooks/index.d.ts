import {
  FetchMovieDiscoverProps,
  FetchMovieDiscoverWithGenreProps,
  FetchGenreProps,
} from '@utils/types/services';

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
  reqMovieDiscoverWithGenreApi(genre_id: number): void;
}
