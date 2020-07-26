const { gql } = require("apollo-server");

// Apollo Server requires either an existing schema, modules or typeDefs
const typeDefs = gql`
  type Scout {
    id: ID!
    scoutName: String!
    japaneseName: String!
    englishName: String
    affiliation: String
    guardianCat: Boolean
  }
  type Query {
    scouts: [Scout]!
    scout(id: ID!): Scout
  }
`;

module.exports = typeDefs;
