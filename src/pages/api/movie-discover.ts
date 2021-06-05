import type { NextApiRequest, NextApiResponse } from 'next';
import { api } from '.';

// route
const movieDiscover = 'discover/movie';

// route params
const ptBR = 'pt-BR';
const apiKey = process.env.API_KEY;

export default async function tst(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    ok: true,
    api_req: 'Requisição pelo arquivo index.ts!',
  });
}
