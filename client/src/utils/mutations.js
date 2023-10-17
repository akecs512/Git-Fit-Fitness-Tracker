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
    $title: String!
    $date: String!
    $duration: String!
    $note: String
    $category: String!
  ) {
    addWorkout(
      title: $title
      date: $date
      duration: $duration
      note: $note
      category: $category
    ) {
      workouts {
        _id
        title
        date
        duration
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
      date
      duration
      title
    }
  }
`;
