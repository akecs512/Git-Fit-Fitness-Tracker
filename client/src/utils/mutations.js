import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_WORKOUT = gql`
  mutation AddWorkout(
    $workoutTitle: String!
    $workoutDate: String!
    $workoutDuration: String!
    $note: String
    $category: String!
  ) {
    addWorkout(
      workoutTitle: $workoutTitle
      workoutDate: $workoutDate
      workoutDuration: $workoutDuration
      note: $note
      category: $category
    ) {
      workouts {
        _id
        workoutTitle
        workoutDate
        workoutDuration
        note
        category
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const REMOVE_WORKOUT = gql`
  mutation removeWorkout($workoutId: ID!) {
    removeWorkout(workoutId: $workoutId) {
      _id
    }
  }
`;
export const UPDATE_WORKOUT = gql`
  mutation updateWorkout($workoutId: ID!) {
    updateWorkout(workoutId: $workoutId) {
      _id
      category
      note
      workoutDate
      workoutDuration
      workoutTitle
    }
  }
`;
