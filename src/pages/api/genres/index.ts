import type { NextApiRequest, NextApiResponse } from 'next';
import { tmdbApi, apiKey, genres, ptBR } from '@pages/api';

export default async function fetchMovieDiscoverWithGenre(
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

    const resultMounted = result['genres'].map(({ id, name: genreName }) => ({
      id,
      genreName,
    }));

    const newValue = [{ id: 8, genreName: 'Populares' }, ...resultMounted];

    return res.status(200).json(newValue);
  } catch (err) {
    console.error(err);
  }
}