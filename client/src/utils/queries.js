import { gql } from '@apollo/client';

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
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;
