import {
  ICardAddInput,
  ICardAddResponse,
  ICardUpdateInput,
  ICardUpdateResponse,
  IGetAllCardsResponse,
} from '@/entities/api/cards';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/graphql' }),
  // tagTypes: ['Boards', 'Cards', 'Users'],
  tagTypes: ['Cards'],
  endpoints: (builder) => ({
    getAllCards: builder.query<IGetAllCardsResponse, void>({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `{ getAllCards {
                    id
                    title
                    description
                    status
                    createdBy
                    createdAt
                    updatedAt
                } }`,
        },
      }),
      providesTags: ['Cards'],
      //   providesTags: (result) =>
      //     result
      //       ? result.items.map(({ id }: { id: string }) => ({ type: 'Item', id }))
      //       : ['Item'],
    }),
    addCard: builder.mutation<ICardAddResponse, ICardAddInput>({
      query: (card) => ({
        url: '',
        method: 'POST',
        body: {
          query: `mutation {
                addCard(card: {
                    title: "${card.title}",
                    description: "${card.description}",
                    status: "${card.status}",
                    createdBy: "${card.createdBy}",
                }) {
                    id
                    title
                    description
                    status
                    createdBy
                    createdAt
                    updatedAt
                }
            }`,
        },
      }),
      invalidatesTags: ['Cards'],
    }),
    updateCard: builder.mutation<ICardUpdateResponse, ICardUpdateInput>({
      query: (card) => ({
        url: '',
        method: 'POST',
        body: {
          query: `mutation {
                updateCard(card: {
                    id: "${card.id}",
                    title: "${card.title}",
                    description: "${card.description}",
                    status: "${card.status}",
                    assignedTo: "${card.assignedTo}",
                }) {
                    id
                    title
                    description
                    status
                    createdBy
                    createdAt
                    updatedAt
                }
            }`,
        },
      }),
      invalidatesTags: ['Cards'],
    }),
    deleteCard: builder.mutation<ICardUpdateResponse, string>({
      query: (id) => ({
        url: '',
        method: 'POST',
        body: {
          query: `mutation {
                    deleteCard(id: "${id}") {
                        id
                        title
                        description
                        status
                        createdBy
                        createdAt
                        updatedAt
                    }
                }`,
        },
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
});

export const {
  useGetAllCardsQuery,
  useUpdateCardMutation,
  useAddCardMutation,
  useDeleteCardMutation,
} = apiSlice;
