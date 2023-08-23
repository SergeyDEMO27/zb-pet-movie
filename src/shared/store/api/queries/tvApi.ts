import { api } from '../api';
import { TvDetailed } from '../../../types';

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
  }),
});

export const { useGetTvQuery } = tvApi;
