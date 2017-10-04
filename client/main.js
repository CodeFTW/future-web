import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { meteorClientConfig } from "meteor/apollo";

import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import App from "/imports/ui/App";

const client = new ApolloClient(meteorClientConfig());

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <App />
      </MuiThemeProvider>
    </ApolloProvider>,
    document.getElementById("app")
  );
});
