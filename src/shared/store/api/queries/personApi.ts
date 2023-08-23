import { api } from '../api';
import { PersonDetailed } from '../../../types';

export const personApi = api.injectEndpoints({
  endpoints: builder => ({
    getPerson: builder.query<PersonDetailed, { person_id: string }>({
      query: arg => {
        const { person_id } = arg;

        return {
          url: `/person/${person_id}`,
        };
      },
    }),
  }),
});

export const { useGetPersonQuery } = personApi;
