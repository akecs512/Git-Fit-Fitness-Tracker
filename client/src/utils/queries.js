import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allUsers {
    users {
      _id
      name
      activitys
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleUser($profileId: ID!) {
    user(profileId: $profileId) {
      _id
      name
      activitys
    }
  }
`;
