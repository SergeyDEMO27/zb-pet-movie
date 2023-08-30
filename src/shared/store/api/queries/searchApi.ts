import { api } from '../api';
import { Paginated, ContentType, FilteredResultData, FilteredData } from '../../../types';

export const searchApi = api.injectEndpoints({
  endpoints: builder => ({
    getSearchResults: builder.query<FilteredData, { query: string }>({
      query: arg => {
        const { query } = arg;

        if (!query) return {} as any;

        return {
          url: 'search/multi',
          params: { query },
        };
      },
      transformResponse: (response: Paginated<ContentType>) => {
        const results: FilteredResultData = (response?.results || []).reduce((acc, item) => {
          if (item?.media_type) {
            acc[item.media_type as keyof typeof acc] = [...(acc[item.media_type as keyof typeof acc] || []), item];
          }
          return acc;
        }, {} as any);

        return { ...response, results };
      },
    }),
  }),
});

export const { useGetSearchResultsQuery } = searchApi;
