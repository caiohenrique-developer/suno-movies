import { api } from '.';
import type { NextApiRequest, NextApiResponse } from 'next';

// route
const movieDiscover = 'discover/movie';

// route params
const ptBR = 'pt-BR';
const apiKey = process.env.API_KEY;

// fetchMovieDiscover
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  return res.status(200).json({ menssagem: 'Valor retornado' });
}
