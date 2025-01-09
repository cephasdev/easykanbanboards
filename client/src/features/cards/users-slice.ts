import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '../../entities/interfaces/IUser';

const initialState: IUser[] = [
  {
    id: '1',
    username: 'user A',
    email: 'usera@easykanbanboards.com',
    createdAt: '2024-06-01T12:00:00Z',
    updatedAt: '2024-06-01T12:00:00Z',
  },
  {
    id: '2',
    username: 'user B',
    email: 'userb@easykanbanboards.com',
    createdAt: '2024-06-01T12:00:00Z',
    updatedAt: '2024-06-01T12:00:00Z',
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.push(action.payload);
    },
    removeUser(state, action: PayloadAction<string>) {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export default usersSlice.reducer;
export const { addUser, removeUser } = usersSlice.actions;
