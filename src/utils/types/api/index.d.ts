// fetchMovie
export interface FetchMovieProps {
  id: number;
  title: string;
  poster: string;
  description?: string;
  genre: string;
  rating: number;
}

// fetchMovieDetail
export interface FetchMovieDetailProps extends FetchMovieProps {
  posterBkg: string;
  genres: [{ name: string }];
  movieVideoID: string;
  trailer: string;
}

// fetchGenres
export interface FetchGenreProps {
  id: number;
  genreName: string;
}
