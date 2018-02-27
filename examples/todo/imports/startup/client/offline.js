import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { ConnectionStatus } from '../../ui/components/ConnectionStatus';

Meteor.startup(() => {
  window.addEventListener('load', function() {
    window.addEventListener('online', function() {
      render(
        <ConnectionStatus offline={false} />,
        document.getElementById('offline')
      );
    });
    window.addEventListener('offline', function() {
      render(<ConnectionStatus offline />, document.getElementById('offline'));
    });
  });
});
