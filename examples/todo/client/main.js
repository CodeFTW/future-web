import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { AlertProvider, Alert } from '@codeftw/future-web-ui-alert';
import { TunnelProvider } from 'react-tunnels';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { DDPLink } from 'meteor/swydo:ddp-apollo';
import { AppContainer } from '../imports/ui/AppContainer';
import { store } from '../imports/core/reduxCore/store';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';

import '../imports/startup/client/';

const theme = createMuiTheme();

const client = new ApolloClient({
  link: new DDPLink(),
  cache: new InMemoryCache(),
});

Meteor.startup(() => {
  render(
    <Fragment>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <MuiThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <TunnelProvider>
              <BrowserRouter>
                <AppContainer />
              </BrowserRouter>
            </TunnelProvider>
            </MuiPickersUtilsProvider>
          </MuiThemeProvider>
        </ApolloProvider>
      </Provider>
      <AlertProvider>
        <Alert />
      </AlertProvider>
    </Fragment>,
    document.getElementById('app')
  );
});
