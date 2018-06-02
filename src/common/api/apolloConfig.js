import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

const URI = 'http://localhost:3000/';

const restLink = new RestLink({
  uri: URI,
  endpoints: {
    whiskyCatalogue: `${URI}data/products.json`,
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  // https://github.com/apollographql/apollo-link-rest/blob/master/docs/rest.md#typename-patching
  typePatcher: {
    /* eslint-disable */
    Catalogue: (data, outerType, patchDeeper) => {
      if (data.products !== null) {
        data.products = data.products.map(product =>
          Object.assign({}, product, {
            __typename: 'Product',
          })
        );
      }
      return data;
    },
    /* eslint-enable */
  },
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

export default client;
