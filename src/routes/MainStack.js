import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/Home';
import { ButtonRight, ButtonLeft } from '../components/HeaderComponents';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator
    screenOptions={{
      headerTransparent: true,
      headerTitleAlign: 'center',
      headerTitle: 'Canoas',
      headerTintColor: '#e9e9e9',
      headerRight: () => <ButtonRight />,
      headerLeft: () => <ButtonLeft />,
    }}
  >
    <Screen name="Home" component={Home} />
  </Navigator>
);
