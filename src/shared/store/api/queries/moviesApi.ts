import { api } from '../api';
import { Paginated, Movie } from '../../../types';

export const moviesApi = api.injectEndpoints({
  endpoints: builder => ({
    getPopularMovies: builder.query<Paginated<Movie>, void>({
      query: () => '/3/movie/popular',
    }),
    getTrendingMovies: builder.query<Paginated<Movie>, void>({
      query: () => '/3/trending/movie/week',
    }),
    getAtCinemaTodayMovies: builder.query<Paginated<Movie>, void>({
      query: () => '/3/movie/now_playing',
    }),
  }),
});

export const { useGetPopularMoviesQuery, useGetTrendingMoviesQuery, useGetAtCinemaTodayMoviesQuery } = moviesApi;
