const typeDefs = `
  type User {
    _id: ID
    userName: String
    email: String
    activities: [Activity]
  }

  type Activity {
    _id: ID
    name: String
    duration: Int
    date: Date
    notes: String
  }

  input ActivityInput {
    name: String
    duration: Int
    date: Date
    notes: String
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addUser(userName: String!): User
    addActivity(input: ActivityInput): User
    removeActivity(_id: ID!): User
    updateActivity(_id: ID!): User
  }
`;

module.exports = typeDefs;
