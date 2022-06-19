import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(
  "https://graphql-portfolio-api.herokuapp.com/graphql"
);
