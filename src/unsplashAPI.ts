import axios from 'axios';
import type { FetchImagesResult, Image } from './types';

const ACCESS_KEY = 'ebyG_w27CbvfjJ3g8SW69ysZY-2EeXBXa8GwEIVg1iQ'; 
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 12
): Promise<FetchImagesResult> => {
  try {
    const response = await axios.get<{ results: Image[]; total_pages: number }>(BASE_URL, {
      params: {
        query,
        page,
        per_page: perPage,
        client_id: ACCESS_KEY,
      },
    });

    const { results, total_pages } = response.data;

    return {
      images: results,
      totalPages: total_pages,
    };
  } catch {
    throw new Error('Помилка під час завантаження зображень');
  }
};