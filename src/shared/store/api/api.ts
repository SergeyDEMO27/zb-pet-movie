import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['main'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  }),
  endpoints: () => ({}),
});
