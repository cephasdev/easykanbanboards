// Redux store configuration

import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './cards/cards-slice';
import usersSlice from './users/users-slice';
import { apiSlice } from './api/api-slice';

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    users: usersSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
