import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer ${import.meta.env.VITE_AUTH_BEARER}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchNowShowing: builder.query({
      query: () => 'movie/now_playing',
    }),
    fetchMovies: builder.query({
      query: (page = 1) => `movie/popular?page=${page}`,
    }),
    fetchMovieGenres: builder.query({
      query: () => 'genre/movie/list',
    }),
    fetchSearch: builder.query({
      query: (query = '') => `search/multi?query=${query}`,
    })
  }),
});

export const {
  useFetchNowShowingQuery,
  useFetchMoviesQuery,
  useFetchMovieGenresQuery,
  useFetchSearchQuery
} = moviesApi;

export const tvSeriesApi = createApi({
  reducerPath: 'tvSeriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer ${import.meta.env.VITE_AUTH_BEARER}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchTVSeries: builder.query({
      query: (page = 1) => `tv/popular?page=${page}`,
    }),
    fetchTvGenres: builder.query({
      query: () => 'genre/tv/list',
    }),
  }),
});

export const { useFetchTVSeriesQuery, useFetchTvGenresQuery } = tvSeriesApi;
