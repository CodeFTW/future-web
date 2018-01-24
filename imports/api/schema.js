export const typeDefs = `
type Query {
  tasks: [Task]
  task(_id: ID!): Task
}

input AddTaskInput {
  description: String!
  details: String
}

type Mutation {
  addTask(task: AddTaskInput!): Task
  flipTask(_id: ID!): Task
  removeTask(_id: ID!): Task
}

type Task {
  _id: ID!
  description: String!
  details: String
  done: Boolean
}
`;
