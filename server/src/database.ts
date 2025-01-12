// src/database.ts
export interface IUser {
  id: string;
  name: string;
}

export interface ICard {
  id?: string;
  title: string;
  description: string;
  status: string;
  createdBy: string;
  assignedTo?: string;
  createdAt?: string; // ISO 8601 format
  updatedAt?: string; // ISO 8601 format
}

enum CardStatus {
  TODO = "todo",
  IN_PROGRESS = "inProgress",
  DONE = "done",
}

const users: IUser[] = [
  { id: "999", name: "Unassigned" },
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
];

const cards: ICard[] = [
  {
    id: "1",
    title: "First Card",
    description: "This is the first card",
    status: CardStatus.TODO,
    createdBy: "1",
    assignedTo: "2",
    createdAt: "2021-08-22T10:00:00Z",
    updatedAt: "2021-08-22T10:00:00Z",
  },
  {
    id: "2",
    title: "Second Card",
    description: "This is the second card",
    status: CardStatus.IN_PROGRESS,
    createdBy: "1",
    assignedTo: "3",
    createdAt: "2021-08-22T11:00:00Z",
    updatedAt: "2021-08-22T11:00:00Z",
  },
  {
    id: "3",
    title: "Third Card",
    description: "This is the third card",
    status: CardStatus.DONE,
    createdBy: "3",
    assignedTo: "2",
    createdAt: "2021-08-22T12:00:00Z",
    updatedAt: "2021-08-22T12:00:00Z",
  },
  {
    id: "4",
    title: "Fourth Card",
    description: "This is the fourth card",
    status: CardStatus.DONE,
    createdBy: "3",
    assignedTo: "2",
    createdAt: "2021-08-22T12:00:00Z",
    updatedAt: "2021-08-22T12:00:00Z",
  },
];

// Users

export const getAllUsers = (): IUser[] => {
  return users;
};

export const getUserById = (id: string): IUser | undefined => {
  console.log("Received id: ", id);
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

export const addUser = (name: string): IUser => {
  const newUser: IUser = {
    id: (users.length + 1).toString(),
    name,
  };
  users.push(newUser);
  return newUser;
};

export const updateUser = (params: {
  id: string;
  user: IUser;
}): IUser | undefined => {
  console.log("Received params: ", params);
  const { id, user } = params;
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) {
    users[index] = { ...user, id };
    return users[index];
  }
  return undefined;
};

export const deleteUser = (id: string): IUser | undefined => {
  console.log("Received params: ", id);
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return undefined;
};

// Cards

export const getAllCards = (): ICard[] => {
  return cards;
};

export const getCardById = (id: string): ICard | undefined => {
  console.log("Received id: ", id);
  return cards.find((card) => card.id === id);
};

export const addCard = (card: ICard): ICard => {
  const newCard: ICard = {
    ...card,
    id: (cards.length + 1).toString(),
    assignedTo: "999",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  cards.push(newCard);
  return newCard;
};

export const updateCard = (id: string, card: ICard): ICard | undefined => {
  const index = cards.findIndex((c) => c.id === id);
  if (index !== -1) {
    cards[index] = { ...cards[index], id, updatedAt: new Date().toISOString() };
    console.log("Updated card: ", cards[index]);
    return cards[index];
  }
  return undefined;
};

export const deleteCard = (id: string): ICard | undefined => {
  console.log("Received id: ", id);
  const index = cards.findIndex((card) => card.id === id);
  if (index !== -1) {
    return cards.splice(index, 1)[0];
  }
  return undefined;
};
