import type { NextApiRequest, NextApiResponse } from 'next';
import { tmdbApi, apiKey, topRated, ptBR } from '@pages/api';

export default async function fetchMovieDiscoverWithGenre(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const { data: result } = await tmdbApi.get(topRated, {
      params: {
        page: 1,
        api_key: apiKey,
        language: ptBR,
        include_adult: false,
      },
    });

    const resultMounted = result['results'].map(
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

    return res.status(200).json(resultMounted);
  } catch (err) {
    console.error(err);
  }
}
