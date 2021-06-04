// fetchMovieDiscover
export interface FetchMovieDiscoverProps {
  id: number;
  title: string;
  poster: string;
  description: string;
  genreIDs: [key: number];
  rating: number;
}

// fetchMovieDiscoverWithGenre
export interface FetchMovieDiscoverWithGenreProps
  extends FetchMovieDiscoverProps {}

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
