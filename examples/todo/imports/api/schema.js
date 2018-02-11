export const typeDefs = `
scalar DateTime

type Query {
  tasks: [Task]
  task(_id: ID!): Task
  loggedUser: User
}

input AddTaskInput {
  _id: ID
  description: String!
  details: String
  done: Boolean
  dueDate: DateTime
}

type Mutation {
  addTask(task: AddTaskInput!): Task
  flipTask(_id: ID!): Task
  removeTask(_id: ID!): Task
  removeTasksChecked: Task
}

type Task {
  _id: ID!
  description: String!
  details: String
  done: Boolean 
  dueDate: DateTime
}

type User {
  _id: ID!
  email: String!
  name: String
}
`;
