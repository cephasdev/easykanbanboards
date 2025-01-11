import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import ICard from '../../entities/interfaces/ICard';
import { CardStatus } from '../../entities/enumerations/CardStatus';

interface CardsState {
  cards: ICard[];
}

const initialState: CardsState = {
  cards: [
    {
      id: '1',
      title: 'First card',
      description: 'This is the first card',
      status: CardStatus.TODO,
      createdBy: 'admin',
      assignedTo: 'admin',
      createdAt: '2021-06-01T12:00:00Z',
      updatedAt: '2021-06-01T12:00:00Z',
    },
    {
      id: '2',
      title: 'Second card',
      description: 'This is the second card',
      status: CardStatus.IN_PROGRESS,
      createdBy: 'admin',
      assignedTo: 'admin',
      createdAt: '2021-06-01T12:00:00Z',
      updatedAt: '2021-06-01T12:00:00Z',
    },
    {
      id: '3',
      title: 'Third card',
      description: 'This is the third card',
      status: CardStatus.DONE,
      createdBy: 'admin',
      assignedTo: 'admin',
      createdAt: '2021-06-01T12:00:00Z',
      updatedAt: '2021-06-01T12:00:00Z',
    },
    {
      id: '4',
      title: 'Fourth card',
      description: 'This is the fourth card',
      status: CardStatus.DONE,
      createdBy: 'admin',
      assignedTo: 'admin',
      createdAt: '2021-06-01T12:00:00Z',
      updatedAt: '2021-06-01T12:00:00Z',
    },
  ],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<ICard>) {
      state.cards.push(action.payload);
    },
    removeCard(state, action: PayloadAction<string>) {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    updateCard(state, action: PayloadAction<ICard>) {
      state.cards = state.cards.map((card) => {
        if (card.id !== action.payload.id) {
          return card;
        }

        return {
          ...card,
          ...action.payload,
        };
      });
    },
    updateCardStatus(
      state,
      action: PayloadAction<{ id: string; status: CardStatus }>,
    ) {
      state.cards = state.cards.map((card) => {
        if (card.id !== action.payload.id) {
          return card;
        }

        card.status = action.payload.status;
        return card;
      });
    },
  },
});

export const { addCard, removeCard, updateCard, updateCardStatus } =
  cardsSlice.actions;

export default cardsSlice.reducer;
