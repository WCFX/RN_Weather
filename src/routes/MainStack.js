import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ButtonRight, ButtonLeft } from '../components/HeaderComponents';

import Home from '../views/Home';
import SearchAdress from '../views/SearchAdress';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTitle: 'Canoas',
      headerTintColor: '#e9e9e9',
    }}
  >
    <Screen
      options={{
        headerTransparent: true,
        headerRight: () => <ButtonRight />,
        headerLeft: () => <ButtonLeft />,
      }}
      name="Home"
      component={Home}
    />
    <Screen
      options={{
        headerStyle: {
          backgroundColor: '#222',
        },
        headerTitle: false,
        headerShown: true,
      }}
      name="SearchAdress"
      component={SearchAdress}
    />
  </Navigator>
);
