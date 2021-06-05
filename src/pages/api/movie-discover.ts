import type { NextApiRequest, NextApiResponse } from 'next';
import { api } from '.';

// route
const movieDiscover = 'discover/movie';

// route params
const ptBR = 'pt-BR';
const apiKey = process.env.API_KEY;

export default async function tst(req: NextApiRequest, res: NextApiResponse) {
  const { data: result } = await api.get(movieDiscover, {
    params: {
      page: 8,
      api_key: apiKey,
      language: ptBR,
      include_adult: false,
    },
  });

  const tst = result['results'].map((movie) => {
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

  return res.json({
    ok: true,
    api_req: 'Requisição pelo arquivo index.ts!',
    tst,
  });
}
