import { api } from '../api';
import { Paginated, ContentType, FilteredData, FilteredResultData, Movie } from '../../../types';

export const trendingApi = api.injectEndpoints({
  //   endpoints: builder => ({
  //     getTrendingAll: builder.query<FilteredData, { pageNumber: number }>({
  //       query: arg => {
  //         const { pageNumber } = arg;

  //         return {
  //           url: `/trending/all/week`,
  //           params: { page: pageNumber },
  //         };
  //       },

  //       transformResponse: (response: Paginated<ContentType>) => {
  //         const results: FilteredResultData = (response?.results || []).reduce((acc, item) => {
  //           if (item?.media_type) {
  //             acc[item.media_type as keyof typeof acc] = [...(acc[item.media_type as keyof typeof acc] || []), item];
  //           }
  //           return acc;
  //         }, {} as any);

  //         return { ...response, results };
  //       },
  //     }),
  //   }),

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
