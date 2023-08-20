import { api } from '../api';
import { AtCinemaMovies } from '../../../types';

export const moviesApi = api.injectEndpoints({
  endpoints: builder => ({
    getTrendingMovies: builder.query<any, void>({
      query: () => '/3/trending/movie/week',
    }),
    getAtCinemaTodayMovies: builder.query<AtCinemaMovies, void>({
      query: () => '/3/movie/now_playing',
    }),
  }),
});

export const { useGetTrendingMoviesQuery, useGetAtCinemaTodayMoviesQuery } = moviesApi;
