import { api } from '../api';
import { Paginated, Movie, MovieDetailed, Credits, MovieImages } from '../../../types';

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
    getMovieCredits: builder.query<Credits, { movie_id: string }>({
      query: arg => {
        const { movie_id } = arg;

        return {
          url: `/movie/${movie_id}/credits`,
        };
      },
      transformResponse: (response: Credits) => {
        const filteredCast = response.cast.slice(0, 10);
        const director = response.crew.find(item => item.job === 'Director');

        return { ...response, cast: filteredCast, director };
      },
    }),
    getSimilarMovies: builder.query<Paginated<Movie>, { movie_id: string }>({
      query: arg => {
        const { movie_id } = arg;

        return {
          url: `/movie/${movie_id}/similar`,
        };
      },
    }),
    getMovieImages: builder.query<MovieImages, { movie_id: string }>({
      query: arg => {
        const { movie_id } = arg;

        return {
          url: `/movie/${movie_id}/images`,
        };
      },
    }),
    getMovieReviews: builder.query<MovieImages, { movie_id: string }>({
      query: arg => {
        const { movie_id } = arg;

        return {
          url: `/movie/${movie_id}/reviews`,
        };
      },
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetTrendingMoviesQuery,
  useGetAtCinemaTodayMoviesQuery,
  useGetMovieQuery,
  useGetMovieCreditsQuery,
  useGetSimilarMoviesQuery,
  useGetMovieImagesQuery,
  useGetMovieReviewsQuery,
} = moviesApi;
