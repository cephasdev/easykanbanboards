import {
  addCard,
  addUser,
  deleteCard,
  deleteUser,
  getAllCards,
  getAllUsers,
  getCardById,
  getUserById,
  ICard,
  IUser,
  updateCard,
  updateUser,
} from "../database";

export const root = {
  hello: () => {
    return "Hi there! From GraphQL and graphql-http :) ";
  },

  // Users

  getAllUsers: () => {
    return getAllUsers();
  },

  getUserById: (params: { id: string }) => {
    const { id } = params;
    return getUserById(id);
  },

  addUser: (params: { user: IUser }) => {
    const { user } = params;
    const newUser = addUser(user);
    return newUser;
  },

  updateUser: (params: { user: IUser }) => {
    const { user } = params;
    return updateUser(user.id || "", user);
  },

  deleteUser: (params: { id: string }) => {
    const { id } = params;
    return deleteUser(id);
  },

  // Cards

  getAllCards: () => {
    return getAllCards();
  },

  getCardById: (params: { id: string }) => {
    const { id } = params;
    return getCardById(id);
  },

  addCard: (params: { card: ICard }) => {
    const { card } = params;
    const newCard = addCard(card);
    return newCard;
  },

  updateCard: (params: { card: ICard }) => {
    const { card } = params;
    return updateCard(card.id || "", card);
  },

  deleteCard: (params: { id: string }) => {
    const { id } = params;
    return deleteCard(id);
  },
};
