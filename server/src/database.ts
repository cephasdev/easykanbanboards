import Card, { ICardDocument } from "./db/schema";

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

export const addUser = (user: IUser): IUser => {
  const newUser: IUser = {
    ...user,
    id: Math.round(Math.random() * 100).toString(),
  };
  users.push(newUser);
  return newUser;
};

export const updateUser = (id: string, user: IUser): IUser | undefined => {
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

export const getAllCards = async (): Promise<ICard[]> => {
  try {
    const cards = (await Card.find()) as ICardDocument[];
    console.log("Mongoose: getAllCards", cards);
    const mapped = cards.map((card) => {
      return {
        ...card.toObject(),
        id: card.toObject()._id.toString(),
      };
    });
    return mapped;
  } catch (error) {
    console.error("Error getting cards from MongoDB: ", error);
  }

  return [];
};

export const getCardById = async (id: string): Promise<ICard | null> => {
  console.log("Received id: ", id);
  try {
    const card = await Card.findById(id);
    console.log("Mongoose: getCardById", card);
    return card;
  } catch (error) {
    console.error("Error getting card from MongoDB: ", error);
    return null;
  }
};

export const addCard = async (card: ICard): Promise<ICard> => {
  console.log("database.ts: received card", card);
  const newCard: ICard = {
    ...card,
    id: Math.round(Math.random() * 100).toString(),
    assignedTo: "999",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  console.log("database.ts: card for persisting to DB:", newCard);

  try {
    // add to MongoDB using mongoose
    const cardModel = new Card(newCard);
    await cardModel.save().then((result) => {
      console.log("Saved to MongoDB: ", result);
    });
  } catch (error) {
    console.error("Error saving to MongoDB: ", error);
  }
  return newCard;
};

export const updateCard = async (
  id: string,
  card: ICard
): Promise<ICard | null> => {
  try {
    const updatedCard = await Card.findByIdAndUpdate(id, {
      ...card,
      updatedAt: new Date().toISOString(),
    }).then((result) => {
      console.log("Mongoose: updateCard", result);
      return result;
    });
    return updatedCard;
  } catch (error) {
    console.error("Error updating card in MongoDB: ", error);
    return null;
  }
};

export const deleteCard = async (id: string): Promise<ICard | null> => {
  console.log("Received id: ", id);
  try {
    const deletedCard = await Card.findByIdAndDelete(id).then((result) => {
      console.log("Mongoose: deleteCard", result);
      return result;
    });
    return deletedCard;
  } catch (error) {
    console.error("Error deleting card from MongoDB: ", error);
    return null;
  }
};
