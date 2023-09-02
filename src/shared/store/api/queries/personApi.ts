import { api } from '../api';
import { PersonDetailed, PersonImages, Social, MovieCrew } from '../../../types';
import { ConsoleSqlOutlined } from '@ant-design/icons';

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

    getPersonMovieCredits: builder.query<MovieCrew, { person_id: string }>({
      query: arg => {
        const { person_id } = arg;

        return {
          url: `/person/${person_id}/movie_credits`,
        };
      },
      transformResponse: (response: MovieCrew) => {
        const sortedCast = { ...response }.cast
          .filter(item => item?.release_date)
          .sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
        const sortedCrew = { ...response }.crew
          .filter(item => item?.release_date)
          .sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());

        return { ...response, cast: sortedCast, crew: sortedCrew };
      },
    }),
  }),
});

export const { useGetPersonQuery, useGetPersonImagesQuery, useGetPersonSocialQuery, useGetPersonMovieCreditsQuery } =
  personApi;
