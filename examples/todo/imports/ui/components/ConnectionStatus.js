import React, { Component } from 'react';
import NotInterested from 'material-ui-icons/NotInterested';
import { showAlert } from '@codeftw/future-web-ui-alert';


export class ConnectionStatus extends React.Component {
  // eslint-disable-next-line no-undef
  state = {
    isConnected: true,
    isConnecting: false,
    retryTime: 0,
    retryInterval: 0,
  };

  componentDidMount() {
    let retryHandle = null;

    const clearRetryInterval = () => {
      clearInterval(retryHandle)
      retryHandle = null
    }

    const trackStatus = () => {
      if (Meteor.status().status === 'waiting') {
        retryHandle = retryHandle || setInterval(() => {
          let timeDiff   = Math.round((Meteor.status().retryTime - (new Date).getTime()) / 1000);
          let _retryTime = timeDiff > 0 && timeDiff || 0;
          let _retryInterval = Math.max(this.state.retryInterval, timeDiff);

          this.setState({
            retryTime: _retryTime,
            retryInterval: _retryInterval,
          });
        }, 500);

        this.setState({
          isConnected: false,
          isConnecting: false,
          retryHandle,
        })
      } else {
        clearRetryInterval();
      }

      if (Meteor.status().status === 'offline') {
        showAlert('OFFLINE', this.props);
        this.setState({
          isConnected: false,
          isConnecting: false,
        })
      }

      if (Meteor.status().status === 'connecting') {
        this.setState({
          isConnecting: true,
          retryInterval: 0,
        })
      }

      if (Meteor.status().connected) {
        this.setState({
          isConnected: true,
          isConnecting: false,
        })
      }      
    }

    Meteor.autorun(trackStatus);
  }

  componentWillMount() {
    clearInterval(this.state.retryHandle);
  }

  render() {
    if ( !(this.state.isConnected || this.state.isConnecting) ) {
      return (
        <div>
          <NotInterested color="secondary"></NotInterested>
        </div>
      );
    }

    return (<div></div>);
}
}
