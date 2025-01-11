// src/database.ts
interface IUser {
  id: string;
  name: string;
}

const users: IUser[] = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
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
