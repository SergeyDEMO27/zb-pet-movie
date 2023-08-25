import { api } from '../api';
import { Paginated, Tv, TvDetailed, Social, Credits, MovieImages, MovieVideos, MovieReviews } from '../../../types';

export const tvApi = api.injectEndpoints({
  endpoints: builder => ({
    getTv: builder.query<TvDetailed, { tv_id: string }>({
      query: arg => {
        const { tv_id } = arg;

        return {
          url: `/tv/${tv_id}`,
        };
      },
    }),

    getTvSocial: builder.query<Social, { tv_id: string }>({
      query: arg => {
        const { tv_id } = arg;

        return {
          url: `/tv/${tv_id}/external_ids`,
        };
      },
    }),

    getTvCredits: builder.query<Credits, { tv_id: string }>({
      query: arg => {
        const { tv_id } = arg;

        return {
          url: `/tv/${tv_id}/credits`,
        };
      },
      transformResponse: (response: Credits) => {
        const filteredCast = response.cast.slice(0, 10);
        const director = response.crew.find(item => item.job === 'Director');

        return { ...response, cast: filteredCast, director };
      },
    }),

    getTvSimilar: builder.query<Paginated<Tv>, { tv_id: string }>({
      query: arg => {
        const { tv_id } = arg;

        return {
          url: `/tv/${tv_id}/similar`,
        };
      },
    }),

    getTvImages: builder.query<MovieImages, { tv_id: string }>({
      query: arg => {
        const { tv_id } = arg;

        return {
          url: `/tv/${tv_id}/images`,
        };
      },
    }),

    getTvReviews: builder.query<MovieReviews, { tv_id: string }>({
      query: arg => {
        const { tv_id } = arg;

        return {
          url: `/tv/${tv_id}/reviews`,
        };
      },
      transformResponse: (response: MovieReviews) => {
        const sortedReviews = [...(response?.results || [])].reverse();

        return { ...response, results: sortedReviews };
      },
    }),

    getTvVideos: builder.query<MovieVideos, { tv_id: string }>({
      query: arg => {
        const { tv_id } = arg;

        return {
          url: `/tv/${tv_id}/videos`,
        };
      },
    }),
  }),
});

export const {
  useGetTvQuery,
  useGetTvCreditsQuery,
  useGetTvSimilarQuery,
  useGetTvSocialQuery,
  useGetTvImagesQuery,
  useGetTvReviewsQuery,
  useGetTvVideosQuery,
} = tvApi;
