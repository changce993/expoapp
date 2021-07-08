import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Chat } from '../screens';
import { APP_SCREENS } from '../utils/constants';

const { Navigator, Screen } = createStackNavigator();

const BreadNavigator = () => (
  <NavigationContainer>
    <Navigator initialRouteName={APP_SCREENS.home}>
      <Screen name={APP_SCREENS.home} component={Home} />
      <Screen name={APP_SCREENS.chat} component={Chat} />
    </Navigator>
  </NavigationContainer>
);

export default BreadNavigator;
