// Redux store configuration

import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from '../features/cards/cards-slice';
import usersSlice from '../features/cards/users-slice';

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    users: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
