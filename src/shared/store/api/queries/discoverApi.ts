import { api } from '../api';
import { Paginated, Movie, Tv, DiscoverReqData } from '../../../types';

export const discoverApi = api.injectEndpoints({
  endpoints: builder => ({
    getDiscoverMovies: builder.query<Paginated<Movie>, DiscoverReqData>({
      query: arg => {
        const { page, sort_by, with_genres, without_genres, vote_average, dateStart, dateEnd } = arg;

        const requestData = {
          page,
          sort_by,
          with_genres: with_genres?.join(','),
          without_genres: without_genres?.join(','),
          'primary_release_date.gte': dateStart,
          'primary_release_date.lte': dateEnd,
          'vote_average.gte': vote_average,
          adult: false,
        };

        return {
          url: 'discover/movie',
          params: requestData,
        };
      },
    }),

    getDiscoverTv: builder.query<Paginated<Tv>, DiscoverReqData>({
      query: arg => {
        const { sort_by } = arg;

        return {
          url: 'discover/tv',
          params: { sort_by },
        };
      },
    }),
  }),
});

export const { useGetDiscoverMoviesQuery, useGetDiscoverTvQuery } = discoverApi;
