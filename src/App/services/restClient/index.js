import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: `http://${location.hostname}:8081/api`,
});

export default client;
