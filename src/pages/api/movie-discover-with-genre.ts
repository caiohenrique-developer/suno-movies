import { api } from '.';
import type { NextApiRequest, NextApiResponse } from 'next';

// route
const movieDiscover = 'discover/movie';

// route params
const ptBR = 'pt-BR';
const apiKey = process.env.API_KEY;

export default async function fetchMovieDiscoverWithGenre(
  req: NextApiRequest,
  res: NextApiResponse,
  genre_id: number,
): Promise<void> {
  try {
    const { data: result } = await api.get(movieDiscover, {
      params: {
        api_key: apiKey,
        language: ptBR,
        with_genres: genre_id,
        include_adult: false,
      },
    });

    const resultMounted = result['results'].map((movie) => {
      const dataMounted = {
        id: movie['id'],
        title: movie['title'],
        description: movie['overview'],
        genreIDs: movie['genre_ids'],
        rating: movie['vote_average'],
      };

      if (
        movie['poster_path'] == null ||
        movie['poster_path'] == undefined ||
        movie['poster_path'] == ''
      )
        return {
          ...dataMounted,
          poster: '/assets/poster-placeholder.png',
        };
      else
        return {
          ...dataMounted,
          poster: `https://image.tmdb.org/t/p/original${movie['poster_path']}`,
        };
    });

    return res.status(200).json(resultMounted);
  } catch (err) {
    console.error(err);
  }
}
