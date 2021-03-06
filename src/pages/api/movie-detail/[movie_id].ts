import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';

import { tmdbApi, apiKey, movie, ptBR } from '@services/api';

export default async function fetchMovieDetail(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const { movie_id: movieID } = req.query;

  try {
    const fetchResponse = await axios.all([
      tmdbApi.get(`${movie}/${movieID}`, {
        params: {
          api_key: apiKey,
          language: ptBR,
        },
      }),
      tmdbApi.get(`${movie}/${movieID}/videos`, {
        params: {
          api_key: apiKey,
          language: ptBR,
        },
      }),
    ]);

    const movieDetail = fetchResponse[0]['data'];
    const video = fetchResponse[1]['data'];

    const {
      id,
      title,
      genres,
      poster_path: poster,
      vote_average: rating,
      overview: description,
      backdrop_path: posterBkg,
    } = movieDetail;

    const { key: movieVideoID, name: trailer } = video.results?.[0] || {};

    let resultMounted = {
      id,
      title,
      rating,
      genres,
      poster,
      posterBkg,
      description,
      movieVideoID,
      trailer,
    };

    if (poster === null || poster === undefined || poster === '') {
      resultMounted = {
        ...resultMounted,
        poster: '/assets/poster-placeholder.png',
        posterBkg: '/assets/poster-placeholder.png',
      };
    } else {
      resultMounted = {
        ...resultMounted,
        poster: `https://image.tmdb.org/t/p/original${poster}`,
        posterBkg: `https://image.tmdb.org/t/p/original${posterBkg}`,
      };
    }

    return res.status(200).json(resultMounted);
  } catch (err) {
    throw new Error(err);
  }
}
