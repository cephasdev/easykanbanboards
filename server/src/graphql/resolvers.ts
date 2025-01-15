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
    console.log("Received user", { user });
    const newUser = addUser(user);
    console.log("New user", { newUser });
    return newUser;
  },

  updateUser: (params: { user: IUser }) => {
    console.log("Received params", { params });
    const { user } = params;
    console.log("Received user", { user });
    return updateUser(user.id || "", user);
  },

  deleteUser: (params: { id: string }) => {
    console.log("Received params: ", params);
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
    console.log("Received card 1", { card });
    const newCard = addCard(card);
    console.log("New card 1", { newCard });
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
