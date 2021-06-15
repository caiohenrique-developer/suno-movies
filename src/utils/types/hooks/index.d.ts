import {
  FetchMovieProps,
  FetchGenreProps,
  // FetchMovieDetailProps,
} from '@utils/types/api';

// usePageIndicator
export interface PageIDCtxProps {
  pageID: string;
  addPageID(page: string): void;
}

// useReqApi
export interface ReqApiValCtx {
  movieDiscoverApi: FetchMovieProps[];
  movieWithGenreApi: FetchMovieProps[];
  movieDetailApi: FetchMovieDetailProps;
  genreApi: FetchGenreProps[];
  reqApi(genre_id?: number): void;
}
