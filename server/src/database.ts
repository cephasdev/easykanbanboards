import Card, { ICardDocument } from "./db/schema";
import User, { IUserDocument } from "./db/schema/user";

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

export const getAllUsers = async (): Promise<IUser[]> => {
  try {
    const users = (await User.find()) as IUserDocument[];
    console.log("Mongoose: getAllUsers", users);
    const mapped = users.map((user) => {
      return {
        ...user.toObject(),
        id: user.toObject()._id.toString(),
      };
    });
    return mapped;
  } catch (error) {
    console.error("Error getting users from MongoDB: ", error);
  }

  return [];
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  console.log("Received id: ", id);
  try {
    const user = await User.findById(id);
    console.log("Mongoose: getUserById", user);
    return user;
  } catch (error) {
    console.error("Error getting user from MongoDB: ", error);
    return null;
  }
};

export const addUser = async (user: IUser): Promise<IUser> => {
  console.log("database.ts: received user", user);
  const newUser: IUser = {
    ...user,
    id: Math.round(Math.random() * 100).toString(),
  };
  console.log("database.ts: user for persisting to DB:", newUser);

  try {
    // add to MongoDB using mongoose
    const userModel = new User(newUser);
    await userModel.save().then((result) => {
      console.log("Saved to MongoDB: ", result);
    });
  } catch (error) {
    console.error("Error saving to MongoDB: ", error);
  }
  return newUser;
};

export const updateUser = async (
  id: string,
  user: IUser
): Promise<IUser | null> => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, user).then(
      (result) => {
        console.log("Mongoose: updateUser", result);
        return result;
      }
    );
    return updatedUser;
  } catch (error) {
    console.error("Error updating user in MongoDB: ", error);
    return null;
  }
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
  console.log("Received id: ", id);
  try {
    const deletedUser = await User.findByIdAndDelete(id).then((result) => {
      console.log("Mongoose: deleteUser", result);
      return result;
    });
    return deletedUser;
  } catch (error) {
    console.error("Error deleting user from MongoDB: ", error);
    return null;
  }
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
