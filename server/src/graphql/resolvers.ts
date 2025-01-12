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

  getAllUsers: () => {
    return getAllUsers();
  },

  getUserById: (params: { id: string }) => {
    const { id } = params;
    return getUserById(id);
  },

  addUser: (name: string) => {
    return addUser(name);
  },

  updateUser: (params: { id: string; user: IUser }) => {
    return updateUser(params);
  },

  deleteUser: (id: string) => {
    return deleteUser(id);
  },

  // Cards

  getCardById: (params: { id: string }) => {
    const { id } = params;
    return getCardById(id);
  },

  getAllCards: () => {
    return getAllCards();
  },

  addCard: (params: { card: ICard }) => {
    const { card } = params;
    console.log("Received card", { card });
    const newCard = addCard(card);
    console.log("New card", { newCard });
    return newCard;
  },

  updateCard: (params: { card: ICard }) => {
    console.log("Received params", { params });
    const { card } = params;
    console.log("Received card", { card });
    return updateCard(card.id || "", card);
  },

  deleteCard: (params: { id: string }) => {
    console.log("Received params: ", params);
    const { id } = params;
    return deleteCard(id);
  },
};
