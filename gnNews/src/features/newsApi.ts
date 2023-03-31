import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { News } from '../types';

// @ts-ignore - this is a workaround to get docker to work
const API_KEY = window.REACT_APP_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
  endpoints: (builder) => ({
    getNewsByCountry: builder.query<News, string>({
      query: (country) => `top-headlines?country=${country}&apiKey=${API_KEY}`,
      keepUnusedDataFor: 30
    })
  })
});

export const { useGetNewsByCountryQuery } = newsApi;
