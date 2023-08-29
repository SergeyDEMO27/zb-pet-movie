import { api } from '../api';

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    createSession: builder.mutation<any, any>({
      query: ({ reqData }) => ({
        url: '/authentication/session/new',
        method: 'POST',
        body: reqData,
      }),
    }),
  }),
});

export const { useCreateSessionMutation } = authApi;
