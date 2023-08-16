import { api } from "../api";

export const moviesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCinemaMovies: builder.query<any, void>({
      query: () => "/3/trending/movie/week",
    }),
  }),
});

export const { useGetCinemaMoviesQuery } = moviesApi;
