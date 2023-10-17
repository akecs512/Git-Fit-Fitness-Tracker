const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String
    workouts: [Workout]
  }
  
  type Workout {
    _id: ID
    title: String
    date: String
    duration: String
    note: String
    category: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    workout(workoutId: ID!): Workout
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addWorkout( title: String!, date: String!, duration: String, note: String, category: String!): User
   
    removeUser(userId: ID!): User
    removeWorkout(workoutId: ID!): User
    updateWorkout(workoutId: ID!, title: String, date: String, duration: String, 
      note: String, category: String): Workout
  }
`;

module.exports = typeDefs;
