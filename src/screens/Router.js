import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { View } from 'react-native';

import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';
import BloodGroupScreen from './BloodGroupScreen';

class Router extends Component {
  render() {
    const HomeFlow = createSwitchNavigator(
      {
        bloodgroup: BloodGroupScreen,
        home: HomeScreen,
      },
      {}
    );
    const AppFlow = createSwitchNavigator(
      {
        auth: AuthScreen,
        main: HomeFlow,
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
