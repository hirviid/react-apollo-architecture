import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Page, Toolbar, Icon, ToolbarButton } from 'react-onsenui';
import client from './common/api/apolloConfig';
import Flights from './packages/flights/containers/Flights';

const App = () => (
  <ApolloProvider client={client}>
    <Page
      renderToolbar={() => (
        <Toolbar>
          <div className="center">FLIGHTS</div>
          <div className="right">
            <ToolbarButton>
              <Icon icon="ion-navicon, material:md-menu" />
            </ToolbarButton>
          </div>
        </Toolbar>
      )}
    >
      <Flights />
    </Page>
  </ApolloProvider>
);

export default App;
