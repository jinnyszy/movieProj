import { configureStore } from '@reduxjs/toolkit';
import { moviesApi, tvSeriesApi } from './slice';

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [tvSeriesApi.reducerPath]: tvSeriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware, tvSeriesApi.middleware),
});

export default store;
