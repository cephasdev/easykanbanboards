// function which seeds the MongoDB database with sample data for the Cards model

import Card from "./schema";
import User from "./schema";

enum CardStatus {
  TODO = "todo",
  IN_PROGRESS = "inProgress",
  DONE = "done",
}

const seed = async () => {
  // const users = await User.find();
  // if (users.length === 0) {
  //   await User.create([
  //     { name: "Alice" },
  //     { name: "Bob" },
  //     { name: "Charlie" },
  //   ]);
  // }

  const cards = await Card.find();
  if (cards.length === 0) {
    await Card.create([
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
    ]);
  }
};

export default seed;
