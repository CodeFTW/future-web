import React from 'react';
import Card, { CardContent } from 'material-ui/Card';

export default (Home = () => (
    <Card>
      <CardContent>
        <p style={{ textAlign: 'justify' }}>
          <img src="/img/codeFTW.png" width="30" height="30" /> Template project
          using Meteor, React, Apollo, Material UI
        </p>
      </CardContent>
    </Card>
  ));
