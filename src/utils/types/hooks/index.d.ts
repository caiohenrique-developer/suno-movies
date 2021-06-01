// usePageIndicator
export interface PageIDContextProps {
  pageID: string;
  addPageID(page: string): void;
}

// useReqApi
export interface contextVal {
  movieDiscoverApi: FetchMovieDiscoverProps[];
  genreApi: FetchGenreProps[];
}
