import {
  ICardAddInput,
  ICardAddResponse,
  ICardUpdateInput,
  ICardUpdateResponse,
  IGetAllCardsResponse,
} from '../../entities/api/cards';
import {
  IGetAllUsersResponse,
  IUserAddInput,
  IUserAddResponse,
  IUserUpdateInput,
  IUserUpdateResponse,
} from '../../entities/api/users';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/graphql' }),
  tagTypes: ['Cards', 'Users'],
  // cards
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
    // users
    getAllUsers: builder.query<IGetAllUsersResponse, void>({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `{ getAllUsers {
                    id
                    name
                } }`,
        },
      }),
      providesTags: ['Users'],
    }),
    addUser: builder.mutation<IUserAddResponse, IUserAddInput>({
      query: (user) => ({
        url: '',
        method: 'POST',
        body: {
          query: `mutation {
                addUser(user: {
                    name: "${user.name}",
                }) {
                    id
                    name
                }
            }`,
        },
      }),
    }),
    updateUser: builder.mutation<IUserUpdateResponse, IUserUpdateInput>({
      query: (user) => ({
        url: '',
        method: 'POST',
        body: {
          query: `mutation {
                updateUser(id: "${user.id}", user: {
                    name: "${user.name}",
                }) {
                    id
                    name
                }
            }`,
        },
      }),
    }),
    deleteUser: builder.mutation<IUserUpdateResponse, string>({
      query: (id) => ({
        url: '',
        method: 'POST',
        body: {
          query: `mutation {
                    deleteUser(id: "${id}") {
                        id
                        name
                    }
                }`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllCardsQuery,
  useUpdateCardMutation,
  useAddCardMutation,
  useDeleteCardMutation,
} = apiSlice;
