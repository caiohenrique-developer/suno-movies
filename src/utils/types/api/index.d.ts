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
}

// fetchMovieVideo
export interface FetchMovieVideoProps {
  key: string;
  name: string;
  type: string;
}

// fetchGenres
export interface FetchGenreProps {
  id: number;
  genreName: string;
}
