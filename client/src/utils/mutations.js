import { gql } from '@apollo/client';

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
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;
