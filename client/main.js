import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { meteorClientConfig } from "meteor/apollo";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import App from "/imports/ui/App";

const client = new ApolloClient(meteorClientConfig());

const theme = createMuiTheme();

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>,
    document.getElementById("app")
  );
});
