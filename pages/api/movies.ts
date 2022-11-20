// API URLS
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from '../../config';
// GET MOVIE DATA
import { basicFetch } from '../../api/fetchFuntions';
// Types
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Movies } from '../../api/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies>
) {
  const { page, search } = req.query;
  const endpoint = search
    ? `${SEARCH_BASE_URL}${search}&page=${page}`
    : `${POPULAR_BASE_URL}&page=${page}`;
  const data = await basicFetch<Movies>(endpoint);
  res.status(200).json(data);
}
