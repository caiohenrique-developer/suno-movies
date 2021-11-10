import type { NextApiRequest, NextApiResponse } from 'next';

import { tmdbApi, apiKey, genres, ptBR } from '@services/api';

export default async function fetchGenres(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const { data: result } = await tmdbApi.get(genres, {
      params: {
        api_key: apiKey,
        language: ptBR,
      },
    });

    const resultMounted = result.genres.map(({ id, name: genreName }) => ({
      id,
      genreName,
    }));

    const newValue = [{ id: 8, genreName: 'Populares' }, ...resultMounted];

    return res.status(200).json(newValue);
  } catch (err) {
    throw new Error(err);
  }
}
