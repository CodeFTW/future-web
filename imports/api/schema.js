export const typeDefs = `
type Query {
  say: String
  tasks: [Task]
}

input AddTaskInput {
  description: String!
  details: String
}

type Mutation {
  addTask(task: AddTaskInput!): Task
  doneTask(_id: ID!): Task
}

type Task {
  _id: ID!
  description: String!
  details: String
  done: Boolean
}
`;