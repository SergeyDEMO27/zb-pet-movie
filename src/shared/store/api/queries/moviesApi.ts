import { api } from '../api';
import {
  Paginated,
  Movie,
  MovieDetailed,
  Credits,
  MovieImages,
  Social,
  MovieVideos,
  MovieReviews,
} from '../../../types';

export const moviesApi = api.injectEndpoints({
  endpoints: builder => ({
    getMoviesPopular: builder.query<Paginated<Movie>, void>({
      query: () => '/movie/popular',
    }),

    getMoviesUpcoming: builder.query<Paginated<Movie>, void>({
      query: () => '/movie/upcoming',
    }),

    getMoviesTopRated: builder.query<Paginated<Movie>, { pageNumber: number }>({
      query: arg => {
        const { pageNumber } = arg;

        return {
          url: '/movie/top_rated',
          params: { page: pageNumber },
        };
      },
    }),

    getMoviesTrending: builder.query<Paginated<Movie>, void>({
      query: () => '/trending/movie/week',
    }),

    getMoviesAtCinemaToday: builder.query<Paginated<Movie>, void>({
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

    getMovieSocial: builder.query<Social, { movie_id: string }>({
      query: arg => {
        const { movie_id } = arg;

        return {
          url: `/movie/${movie_id}/external_ids`,
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

    getMovieSimilar: builder.query<Paginated<Movie>, { movie_id: string }>({
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

    getMovieReviews: builder.query<MovieReviews, { movie_id: string }>({
      query: arg => {
        const { movie_id } = arg;

        return {
          url: `/movie/${movie_id}/reviews`,
        };
      },
      transformResponse: (response: MovieReviews) => {
        const sortedReviews = [...(response?.results || [])].reverse();

        return { ...response, results: sortedReviews };
      },
    }),

    getMovieVideos: builder.query<MovieVideos, { movie_id: string }>({
      query: arg => {
        const { movie_id } = arg;

        return {
          url: `/movie/${movie_id}/videos`,
        };
      },
    }),
  }),
});

export const {
  useGetMoviesPopularQuery,
  useGetMoviesTrendingQuery,
  useGetMoviesAtCinemaTodayQuery,
  useGetMovieQuery,
  useGetMovieSocialQuery,
  useGetMovieCreditsQuery,
  useGetMovieSimilarQuery,
  useGetMovieImagesQuery,
  useGetMovieReviewsQuery,
  useGetMovieVideosQuery,
  useGetMoviesUpcomingQuery,
  useGetMoviesTopRatedQuery,
} = moviesApi;
