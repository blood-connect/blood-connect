import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { View } from 'react-native';

import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';

class Router extends Component {
  render() {
    const AppFlow = createSwitchNavigator(
      {
        auth: AuthScreen,
        main: HomeScreen,
      },
      {}
    );

    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <AppFlow />
      </View>
    );
  }
}

export default Router;
