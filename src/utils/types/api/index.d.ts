// fetchMovie
export interface FetchMovieProps {
  id: number;
  title: string;
  poster: string;
  description?: string;
  genreIDs: [key: number];
  rating: number;
}

// fetchGenres
export interface FetchGenreProps {
  id: number;
  genreName: string;
}
