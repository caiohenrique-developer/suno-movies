// fetchMovie
export interface FetchMovieProps {
  id: number;
  title: string;
  poster: string;
  description?: string;
  genreIDs: [key: number];
  rating: number;
}

// fetchMovieDetail
export interface FetchMovieDetailProps extends FetchMovieProps {
  posterBkg: string;
  genres: [{ name: string }];
  movieID: string;
  trailer: string;
}

// fetchGenres
export interface FetchGenreProps {
  id: number;
  genreName: string;
}
