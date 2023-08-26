import { api } from '../api';
import { GenresList, SelectOptions } from '../../../types';

export const genreApi = api.injectEndpoints({
  endpoints: builder => ({
    getGenresMovies: builder.query<SelectOptions, void>({
      query: () => 'genre/movie/list',

      transformResponse: (response: GenresList) => {
        const genresOptions = (response?.genres || []).map(item => ({ value: item.id, label: item.name }));

        return genresOptions;
      },
    }),

    getGenresTv: builder.query<SelectOptions, void>({
      query: () => 'genre/tv/list',

      transformResponse: (response: GenresList) => {
        const genresOptions = (response?.genres || []).map(item => ({ value: item.id, label: item.name }));

        return genresOptions;
      },
    }),
  }),
});

export const { useGetGenresMoviesQuery, useGetGenresTvQuery } = genreApi;
