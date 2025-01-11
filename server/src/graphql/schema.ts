import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type User {
      id: String!,
      name: String!
    }

    type Query {
      hello: String,
      userById(id: String!): User,
      users: [User]
    }
  `);
