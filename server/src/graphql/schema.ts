import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type User {
      id: String!,
      name: String!
    }

    input UserInput {
      name: String!
    }

    type Card {
      id: String!,
      title: String!,
      description: String!,
      status: String!,
      createdBy: String!,
      createdAt: String!,
      updatedAt: String!
    }

    input CardInput {
      id: String,
      title: String!,
      description: String!,
      status: String!,
      createdBy: String,
      assignedTo: String
    }

    type Query {
      hello: String,

      getAllCards: [Card],
      getCardById(id: String!): Card,

      getAllUsers: [User],
      getUserById(id: String!): User
    }

    type Mutation {
      addCard(card: CardInput!): Card,
      updateCard(card: CardInput!): Card,
      deleteCard(id: String!): Card,

      addUser(user: UserInput!): User,
      updateUser(id: String!, user: UserInput!): User,
      deleteUser(id: String!): User
    }
  `);

// updateCardStatus(id: String!, status: String!): Card,
