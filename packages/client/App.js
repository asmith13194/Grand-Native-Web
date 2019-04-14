import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { NativeRouter } from "react-router-native";

import Routes from "./src/Routes";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI || "http://127.0.0.1:4000"
});

const App = () => (
  <ApolloProvider client={client}>
    <NativeRouter>
      <Routes />
    </NativeRouter>
  </ApolloProvider>
);

export default App;
