// fetchMovie
export type FetchMovieProps = {
  id: number;
  title: string;
  poster: string;
  description?: string;
  genre: string;
  rating: number;
};

// fetchMovieDetail
export type FetchMovieDetailProps = FetchMovieProps & {
  posterBkg: string;
  genres: [{ name: string }];
  movieVideoID: string;
  trailer: string;
};

// fetchGenres
export type FetchGenreProps = {
  id: number;
  genreName: string;
};
