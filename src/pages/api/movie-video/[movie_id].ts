import type { NextApiRequest, NextApiResponse } from 'next';
import { tmdbApi, apiKey, movie, ptBR } from '@pages/api';

export default async function fetchMovieDetail(
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

    const resultMounted = result['results'].map(({ key, name, type }) => ({
      key,
      name,
      type,
    }));

    return res.status(200).json(resultMounted);
  } catch (err) {
    console.error(err);
  }
}
