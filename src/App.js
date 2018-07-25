import React, { Component } from 'react';
import { Text } from 'react-native';
import Amplify, { Analytics } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

class App extends Component {
  render() {
    Analytics.record('appRender');
    return (
      <Text>Hello World!</Text>
    );
  }
}

export default withAuthenticator(App);
