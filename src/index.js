import React from 'react';
import ReactDOM from 'react-dom';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import { ApolloProvider } from 'react-apollo';
import client from './common/api/apolloConfig';
import app from './packages/app';


ReactDOM.render(
  <ApolloProvider client={client}>
    <app.components.Layout />
  </ApolloProvider>,
  document.getElementById('root')
);
