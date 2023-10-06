import { gql } from "@apollo/client";

export const ADD_ACTIVITY = gql`
  mutation addActivity($name: String!) {
    addActivity(name: $name) {
      _id
      name
      duration
      date
      notes

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
