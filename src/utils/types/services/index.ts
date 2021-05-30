// fetchMovieDiscover
export interface FetchMovieDiscoverProps {
  id?: number;
  title: string;
  poster: string;
  description: string;
  genreIDs?: [key: number];
  average: number;
}
