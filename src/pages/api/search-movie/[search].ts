import type { NextApiRequest, NextApiResponse } from 'next';
import { tmdbApi, apiKey, searchMovie, ptBR } from '@pages/api';

export default async function fetchMovieDiscoverWithGenre(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const { search } = req.query;

    const { data: result } = await tmdbApi.get(searchMovie, {
      params: {
        api_key: apiKey,
        language: ptBR,
        query: search,
        include_adult: false,
      },
    });

    const resultMounted = result['results'].map(
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

    return res.status(200).json(resultMounted);
  } catch (err) {
    console.error(err);
  }
}
