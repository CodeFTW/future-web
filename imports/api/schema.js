export const typeDefs = `
type Query {
  say: String
  tasks: [Task]
}

type Task {
    _id: String!
    description: String!
    details: String
}
`;