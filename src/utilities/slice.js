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
    }),
    fetchMovieDetails: builder.query({
      query: (id) => `movie/${id}`,
    }),
    fetchMovieReviews: builder.query({
      query: (id) => `movie/${id}/reviews`,
    }),
    fetchSimilarMovies: builder.query({
      query: (id) => `movie/${id}/similar`,
    }),
  }),
});

export const {
  useFetchNowShowingQuery,
  useFetchMoviesQuery,
  useFetchMovieGenresQuery,
  useFetchSearchQuery,
  useFetchMovieDetailsQuery,
  useFetchMovieReviewsQuery,
  useFetchSimilarMoviesQuery,
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
    fetchTvDetails: builder.query({
      query: (id) => `tv/${id}`,
    }),
    fetchTvReviews: builder.query({
      query: (id) => `tv/${id}/reviews`,
    }),
    fetchSimilarTVSeries: builder.query({
      query: (id) => `tv/${id}/similar`,
    }),
  }),
});

export const {
  useFetchTVSeriesQuery,
  useFetchTvGenresQuery,
  useFetchTvDetailsQuery,
  useFetchTvReviewsQuery,
  useFetchSimilarTVSeriesQuery,
} = tvSeriesApi;
