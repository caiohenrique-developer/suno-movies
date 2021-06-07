import axios from 'axios';

import {
  FetchGenreProps,
  FetchMovieDiscoverProps,
  FetchMovieDiscoverWithGenreProps,
  FetchSearchMovieProps,
} from '@utils/types/api';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// route
const movieDiscover = 'discover/movie';
const searchMovie = 'search/movie';
const topRated = 'movie/top_rated';
const genres = 'genre/movie/list';

// route params
const ptBR = 'pt-BR';
const apiKey = process.env.API_KEY;

export const fetchMovieDiscover = async (): Promise<
  FetchMovieDiscoverProps[]
> => {
  try {
    const { data: result } = await api.get(movieDiscover, {
      params: {
        page: 1,
        api_key: apiKey,
        language: ptBR,
        include_adult: false,
      },
    });

    return result['results'].map(
      ({
        id,
        title,
        overview: description,
        genre_ids: genreIDs,
        vote_average: rating,
        poster_path: poster,
      }) => {
        const dataMounted = {
          id,
          title,
          description,
          genreIDs,
          rating,
        };

        if (poster == null || poster == undefined || poster == '')
          return {
            ...dataMounted,
            poster: '/assets/poster-placeholder.png',
          };
        else
          return {
            ...dataMounted,
            poster: `https://image.tmdb.org/t/p/original${poster}`,
          };
      },
    );
  } catch (err) {
    console.error(err);
  }
};

// export const fetchMovieDiscoverWithGenre = async (
//   genre_id: number,
// ): Promise<FetchMovieDiscoverWithGenreProps[]> => {
//   try {
//     const { data: result } = await api.get(movieDiscover, {
//       params: {
//         api_key: apiKey,
//         language: ptBR,
//         with_genres: genre_id,
//         include_adult: false,
//       },
//     });

//     return result['results'].map(
//       ({
//         id,
//         title,
//         overview: description,
//         genre_ids: genreIDs,
//         vote_average: rating,
//         poster_path: poster,
//       }) => {
//         const dataMounted = {
//           id,
//           title,
//           description,
//           genreIDs,
//           rating,
//         };

//         if (poster == null || poster == undefined || poster == '')
//           return {
//             ...dataMounted,
//             poster: '/assets/poster-placeholder.png',
//           };
//         else
//           return {
//             ...dataMounted,
//             poster: `https://image.tmdb.org/t/p/original${poster}`,
//           };
//       },
//     );
//   } catch (err) {
//     console.error(err);
//   }
// };

export const fetchGenres = async (): Promise<FetchGenreProps[]> => {
  try {
    const { data: result } = await api.get(genres, {
      params: {
        api_key: apiKey,
        language: ptBR,
      },
    });

    return result['genres'].map(({ id, name: genreName }) => ({
      id,
      genreName,
    }));
  } catch (err) {
    console.error(err);
  }
};

export const fetchSearchMovie = async (
  search: string,
): Promise<FetchSearchMovieProps[]> => {
  try {
    const { data: result } = await api.get(searchMovie, {
      params: {
        api_key: apiKey,
        language: ptBR,
        query: search,
        include_adult: false,
      },
    });

    return result['results'].map(
      ({
        id,
        title,
        genre_ids: genreIDs,
        vote_average: rating,
        poster_path: poster,
      }) => {
        const dataMounted = {
          id,
          title,
          genreIDs,
          rating,
        };

        if (poster == null || poster == undefined || poster == '')
          return {
            ...dataMounted,
            poster: '/assets/poster-placeholder.png',
          };
        else
          return {
            ...dataMounted,
            poster: `https://image.tmdb.org/t/p/original${poster}`,
          };
      },
    );
  } catch (err) {
    console.error(err);
  }
};

export {
  // baseURL
  api,
  // route
  movieDiscover,
  searchMovie,
  topRated,
  genres,
  // route params
  ptBR,
  apiKey,
};
