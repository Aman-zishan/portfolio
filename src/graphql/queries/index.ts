import { gql } from "graphql-request";

export const GET_ALL_DATA = gql`
  query {
    getSkills {
      image
      title
      link
    }
    getProjects {
      id
      title
      description
      demo
      github
      technologies
      image {
        url
      }
    }
    getSmallProjects {
      id
      title
      description
      link
      icon {
        url
      }
    }
  }
`;
