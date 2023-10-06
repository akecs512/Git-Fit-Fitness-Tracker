import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addUser($name: String!) {
    addUser(name: $name) {
      _id
      name
      activitys
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
