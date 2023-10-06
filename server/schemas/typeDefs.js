const typeDefs = `
  type User {
    _id: ID
    userName: String
    email: String
    activities: [Activity]
  }

  type Query {
    me: User
  }

  type Activity {
    _id: ID
    name: String
    duration: String
    date: String
    notes: String
  }

  input ActivityInput {
    name: String
    duration: String
    date: String
    notes: String
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(userName: String!): Auth
    login(userName: String!, password: String!): Auth

    addActivity(input: ActivityInput): User
    removeActivity(_id: ID!): User
    updateActivity(_id: ID!): User
  }
`;

module.exports = typeDefs;
