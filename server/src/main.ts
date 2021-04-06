import { ApolloServer, PubSub } from "apollo-server";
import { connect } from "mongoose";

import { environment } from "./environment";
import resolvers from "./resolvers";
import typeDefs from "./type-defs";

const pubsub = new PubSub();

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: ({ req }) => ({ req, pubsub }),
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
});

const db: string =
  "mongodb+srv://adminn:trongkim123@cluster0.q8gw6.mongodb.net/mern?retryWrites=true&w=majority";

connect(db, { useNewUrlParser: true })
  .then(() => {
    return console.log(`Successfully connected to ${db}`);
  })
  .catch((error) => {
    console.log("Error connecting to database: ", error);
    return process.exit(1);
  });

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}
