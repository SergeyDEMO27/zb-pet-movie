import { api } from '../api';
import { PersonDetailed, PersonImages, Social, Credits } from '../../../types';

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

    getPersonImages: builder.query<PersonImages, { person_id: string }>({
      query: arg => {
        const { person_id } = arg;

        return {
          url: `/person/${person_id}/images`,
        };
      },
    }),

    getPersonSocial: builder.query<Social, { person_id: string }>({
      query: arg => {
        const { person_id } = arg;

        return {
          url: `/person/${person_id}/external_ids`,
        };
      },
    }),

    getPersonMovieCredits: builder.query<Credits, { person_id: string }>({
      query: arg => {
        const { person_id } = arg;

        return {
          url: `/person/${person_id}/movie_credits`,
        };
      },
    }),
  }),
});

export const { useGetPersonQuery, useGetPersonImagesQuery, useGetPersonSocialQuery, useGetPersonMovieCreditsQuery } =
  personApi;
