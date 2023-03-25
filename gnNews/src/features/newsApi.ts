import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { News } from '../types';

const API_KEY = '3320a39c8eeb484dbd6d7f9ae11950ce';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
  endpoints: (builder) => ({
    getNews: builder.query<News, void>({
      query: () => `top-headlines?country=us&apiKey=${API_KEY}`,
      keepUnusedDataFor: 30
    })
  })
});

export const { useGetNewsQuery } = newsApi;
