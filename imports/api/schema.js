export const typeDefs = `
type Query {
  say: String
  tasks: [Task]
}

type Task {
    description: String!
}
`;