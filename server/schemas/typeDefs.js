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
    workoutTitle: String
    workoutDate: String
    workoutDuration: String
    comment: String
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

    addWorkout( workoutTitle: String!, workoutDate: String!, workoutDuration: String!, comment: String!): User
   
    removeUser(userId: ID!): User
    removeWorkout(workout: String!): User
    updateWorkout(workoutId: ID!, workoutTitle: String!, workoutDate: String!, workoutDuration: String!, comment: String!): Workout
  }
`;

module.exports = typeDefs;
