import { FetchMovieProps, FetchGenreProps } from '@utils/types/api';

// usePageIndicator
export interface PageIDCtxProps {
  pageID: string;
  addPageID(page: string): void;
}

// useReqApi
export interface ReqApiValCtx {
  movieDiscoverApi: FetchMovieProps[];
  movieWithGenreApi: FetchMovieProps[];
  genreApi: FetchGenreProps[];
  reqApi(genre_id?: number): void;
}
