// @flow
import React from 'react';
import { Query } from 'react-apollo';
import GET_CATALOGUE from '../query/Catalogue.graphql';
import Whisky from '../components/Whisky';

type QueryProps = {
  loading: boolean,
  error: string,
  data?: Query,
};

const Catalogue = () => (
  <Query query={GET_CATALOGUE}>
    {({ loading, error, data }: QueryProps) => {
      if (loading) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Failed to fetch</div>;
      }
      if (!data) {
        return <div>No products found</div>;
      }

      return (
        <ul>
          {data.catalogue.products.map(whisky => (
            <li key={whisky.id}>
              <Whisky whisky={whisky} addToCart={() => console.log(whisky)} />
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default Catalogue;
