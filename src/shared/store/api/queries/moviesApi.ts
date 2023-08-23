import { api } from '../api';
import { Paginated, Movie, MovieDetailed } from '../../../types';

export const moviesApi = api.injectEndpoints({
  endpoints: builder => ({
    getPopularMovies: builder.query<Paginated<Movie>, void>({
      query: () => '/movie/popular',
    }),
    getTrendingMovies: builder.query<Paginated<Movie>, void>({
      query: () => '/trending/movie/week',
    }),
    getAtCinemaTodayMovies: builder.query<Paginated<Movie>, void>({
      query: () => '/movie/now_playing',
    }),
    getMovie: builder.query<MovieDetailed, { movie_id: string }>({
      query: arg => {
        const { movie_id } = arg;

        return {
          url: `/movie/${movie_id}`,
        };
      },
    }),
  }),
});

export const { useGetPopularMoviesQuery, useGetTrendingMoviesQuery, useGetAtCinemaTodayMoviesQuery, useGetMovieQuery } =
  moviesApi;
