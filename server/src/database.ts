// src/database.ts
interface IUser {
  id: string;
  name: string;
}

interface ICard {
  id: string;
  title: string;
  description: string;
  // status: CardStatus;
  status: string;
  createdBy: string;
  assignedTo: string;
  createdAt: string; // ISO 8601 format
  updatedAt: string; // ISO 8601 format
  // TODO: suggestion: add "priority"?
}

const users: IUser[] = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
];

const cards: ICard[] = [
  {
    id: "1",
    title: "First Card",
    description: "This is the first card",
    status: "To Do",
    createdBy: "Alice",
    assignedTo: "Bob",
    createdAt: "2021-08-22T10:00:00Z",
    updatedAt: "2021-08-22T10:00:00Z",
  },
  {
    id: "2",
    title: "Second Card",
    description: "This is the second card",
    status: "In Progress",
    createdBy: "Bob",
    assignedTo: "Charlie",
    createdAt: "2021-08-22T11:00:00Z",
    updatedAt: "2021-08-22T11:00:00Z",
  },
  {
    id: "3",
    title: "Third Card",
    description: "This is the third card",
    status: "Done",
    createdBy: "Charlie",
    assignedTo: "Alice",
    createdAt: "2021-08-22T12:00:00Z",
    updatedAt: "2021-08-22T12:00:00Z",
  },
];

// Function to get a user by ID
export const getUserById = (params: { id: string }): IUser | undefined => {
  console.log("Received params: ", params);
  const { id } = params;
  return users.find((user) => user.id === id);
};

/*
To call previous resolver function:
1) open http://localhost:4000/playground
2) write the following query:
{
  userById(id: "2"){
  name
}}
*/

export const getAllUsers = (): IUser[] => {
  return users;
};

export const addUser = (name: string): IUser => {
  const newUser: IUser = {
    id: (users.length + 1).toString(),
    name,
  };
  users.push(newUser);
  return newUser;
};

export const getCardById = (params: { id: string }): ICard | undefined => {
  console.log("Received params: ", params);
  const { id } = params;
  return cards.find((card) => card.id === id);
};

export const getAllCards = (): ICard[] => {
  return cards;
};

export const addCard = (card: ICard): ICard => {
  const newCard: ICard = {
    ...card,
    id: (cards.length + 1).toString(),
  };
  cards.push(newCard);
  return newCard;
};

export const deleteCard = (params: { id: string }): ICard | undefined => {
  console.log("Received params: ", params);
  const { id } = params;
  const index = cards.findIndex((card) => card.id === id);
  if (index !== -1) {
    return cards.splice(index, 1)[0];
  }
  return undefined;
};
