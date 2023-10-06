import { gql } from "@apollo/client";

<<<<<<< HEAD
export const ADD_ACTIVITY = gql`
  mutation addActivity($name: String!) {
    addActivity(name: $name) {
      _id
      name
      duration
      date
      notes
=======
export const ADD_PROFILE = gql`
  mutation addUser($name: String!) {
    addUser(name: $name) {
      _id
      name
      activitys
>>>>>>> 6dda95c53939c19ac973efe39d2142c02484e734
    }
  }
`;

export const ADD_SKILL = gql`
  mutation addActivity($profileId: ID!, $activity: String!) {
    addActivity(profileId: $profileId, activity: $activity) {
      _id
      name
      activitys
    }
  }
`;
