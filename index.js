const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

let scouts = [
  {
    id: "1",
    scoutName: "Sailor Moon",
    japaneseName: "Usagi Tsukino (月野 うさぎ)",
    englishName: "Serena Tsukino",
    affiliation: "Inner Sailor Scouts",
    guardianCat: true
  },
  {
    id: "2",
    scoutName: "Sailor Mercury",
    japaneseName: "Ami Mizuno (水野 亜美)",
    englishName: "Amy Anderson",
    affiliation: "Inner Sailor Scouts",
    guardianCat: false
  },
  {
    id: "3",
    scoutName: "Sailor Mars",
    japaneseName: "Rei Hino (火野 レイ)",
    englishName: "Raye Hino",
    affiliation: "Inner Sailor Scouts",
    guardianCat: false
  },
  {
    id: "4",
    scoutName: "Sailor Jupiter",
    japaneseName: "Makoto Kino (木野 まこと)",
    englishName: "Lita Kino",
    affiliation: "Inner Sailor Scouts",
    guardianCat: false
  },
  {
    id: "5",
    scoutName: "Sailor Venus",
    japaneseName: "Minako Aino (愛野 美奈子)",
    englishName: "Mina Aino",
    affiliation: "Inner Sailor Scouts",
    guardianCat: true
  }
];

const resolvers = {
  Query: {
    scouts: () => scouts,
    scout: (parent, args) => {
      return scouts.find(scout => scout.id === args.id);
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🌙 Sailor scout server ready at ${url}`);
});
