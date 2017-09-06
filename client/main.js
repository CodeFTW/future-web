import {Meteor} from 'meteor/meteor';
import React from 'react';
import {render} from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import {meteorClientConfig} from 'meteor/apollo';

import App from '/imports/ui/App';

const client = new ApolloClient(meteorClientConfig());

Meteor.startup(() => {
    render(
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>,
        document.getElementById('app'));
});