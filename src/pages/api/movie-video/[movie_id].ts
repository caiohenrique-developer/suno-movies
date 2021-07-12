import type { NextApiRequest, NextApiResponse } from 'next';
import { tmdbApi, apiKey, movie, ptBR } from '@pages/api';

export default async function fetchMovieVideo(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const { movie_id } = req.query;

  try {
    const { data: result } = await tmdbApi.get(`${movie}/${movie_id}/videos`, {
      params: {
        api_key: apiKey,
        language: ptBR,
      },
    });

    if (result['results'].length === 0) {
      const { data: result } = await tmdbApi.get(
        `${movie}/${movie_id}/videos`,
        {
          params: {
            api_key: apiKey,
          },
        },
      );

      const { key: movieVideoID, name: trailer } = result['results']?.[0] || {};

      return res.status(200).json({ movieVideoID, trailer });
    }

    const { key: movieVideoID, name: trailer } = result['results']?.[0] || {};

    return res.status(200).json({ movieVideoID, trailer });
  } catch (err) {
    console.error(err);
  }
}
