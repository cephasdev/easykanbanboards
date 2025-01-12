import {
  getAllCards,
  getAllUsers,
  getCardById,
  getUserById,
} from "../database";

export const root = {
  hello: () => {
    return "Hi there! From GraphQL and graphql-http :) ";
  },

  // Resolver for getting a user by ID
  userById: (id: string) => {
    return getUserById(id);
  },

  // Resolver for getting all users
  users: () => {
    return getAllUsers();
  },

  cardById: (id: string) => {
    return getCardById(id);
  },

  cards: () => {
    return getAllCards();
  },
};
