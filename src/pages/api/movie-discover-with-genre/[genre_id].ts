import type { NextApiRequest, NextApiResponse } from 'next';

import { tmdbApi, apiKey, movieDiscover, topRated, ptBR } from '@services/api';

export default async function fetchMovieDiscoverWithGenre(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const { genre_id: genreID } = req.query;

  try {
    const entrypointUrl = genreID === '8' ? topRated : movieDiscover;

    const { data: result } = await tmdbApi.get(entrypointUrl, {
      params: {
        api_key: apiKey,
        language: ptBR,
        include_adult: false,
        ...(genreID !== '8' ? { with_genres: genreID } : {}),
      },
    });

    const resultMounted = result.results.map(
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

        if (poster === null || poster === undefined || poster === '')
          return {
            ...dataMounted,
            poster: '/assets/poster-placeholder.png',
          };
        return {
          ...dataMounted,
          poster: `https://image.tmdb.org/t/p/original${poster}`,
        };
      },
    );

    return res.status(200).json(resultMounted);
  } catch (err) {
    throw new Error(err);
  }
}
