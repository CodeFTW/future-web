import React from 'react';
import { AlertProvider } from '@codeftw/future-web-ui-alert';
import { TunnelProvider } from 'react-tunnels';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { DDPLink } from 'meteor/swydo:ddp-apollo';
import { AppContainer } from '../imports/containers/AppContainer';
import '../imports/startup/client/';

const theme = createMuiTheme();

const client = new ApolloClient({
  link: new DDPLink(),
  cache: new InMemoryCache(),
});

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <TunnelProvider>
          <AlertProvider>
            <BrowserRouter>
              <AppContainer />
            </BrowserRouter>
          </AlertProvider>
        </TunnelProvider>
      </MuiThemeProvider>
    </ApolloProvider>,
    document.getElementById('app')
  );
});
