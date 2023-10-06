import { gql } from "@apollo/client";

export const QUERY_ACTIVITIES = gql`
  query allProfiles {
    profiles {
      _id
      name
      duration
      date
      notes
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
