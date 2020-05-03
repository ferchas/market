import ApolloClient from 'apollo-boost';

const handleErro = (err) => {
  console.log('#Error : ',err);
};

const client = new ApolloClient({
  uri: `http://${location.hostname}:8081/api`,
  // headers: {},
  onError: handleErro,
});

export default client;
