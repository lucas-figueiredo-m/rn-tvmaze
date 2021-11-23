import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from 'theme';
import { TabRoutes } from 'routes/config';
import Home from 'assets/icons/home.svg'
import Magnifyer from 'assets/icons/search.svg'
import { SVG } from 'components/common';
import HomeStackNavigator from './HomeStackNavigator';
import SearchStackNavigator from './SearchStackNavigator';

const Tabs = createBottomTabNavigator()

const TabNavigator: React.FC = () => (
  <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.RoyalBlueDark
    }}
  >
    <Tabs.Screen
      name={TabRoutes.HOME_STACK}
      component={HomeStackNavigator}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => <SVG xml={Home} color={color} />
      }}
    />
    <Tabs.Screen
      name={TabRoutes.SEARCH_STACK}
      component={SearchStackNavigator}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => <SVG xml={Magnifyer} color={color} />
      }}
    />
  </Tabs.Navigator>
)

export default TabNavigator