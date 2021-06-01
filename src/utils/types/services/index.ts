// fetchMovieDiscover
export interface FetchMovieDiscoverProps {
  id: number;
  title: string;
  poster: string;
  description: string;
  genreIDs: [key: number];
  average: number;
}

// fetchGenres
export interface FetchGenreProps {
  id: number;
  genreName: string;
}

// fetchSearchMovie
export type FetchSearchMovieProps = Omit<
  FetchMovieDiscoverProps,
  'description'
>;
