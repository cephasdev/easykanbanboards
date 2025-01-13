// Redux store configuration

import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './cards/cards-slice';
import usersSlice from './users/users-slice';

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    users: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
