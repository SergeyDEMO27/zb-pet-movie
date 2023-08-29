import { api } from '../api';
import { Paginated, Movie } from '../../../types';

export const trendingApi = api.injectEndpoints({
  endpoints: builder => ({
    getTrendingMovie: builder.query<Paginated<Movie>, { pageNumber: number }>({
      query: arg => {
        const { pageNumber } = arg;

        return {
          url: `/trending/movie/week`,
          params: { page: pageNumber },
        };
      },
    }),
  }),
});

export const { useGetTrendingMovieQuery } = trendingApi;
