import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from 'theme';
import { TabRoutes } from 'routes/config';
import ShowsList from 'screens/ShowsList/ShowsList';
import SearchScreen from 'screens/SearchScreen/SearchScreen';
import Home from 'assets/icons/home.svg'
import Magnifyer from 'assets/icons/search.svg'
import { SVG } from 'components/common';

const Tabs = createBottomTabNavigator()

const TabNavigator: React.FC = () => (
  <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      // tabBarStyle: styles.tabBar,
      // tabBarLabelStyle: styles.label,
      tabBarActiveTintColor: Colors.RoyalBlueDark
    }}
  >
    <Tabs.Screen
      name={TabRoutes.SHOWS_LIST}
      component={ShowsList}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => <SVG xml={Home} color={color} />
      }}
    />
    <Tabs.Screen
      name={TabRoutes.SEARCH_SCREEN}
      component={SearchScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => <SVG xml={Magnifyer} color={color} />
      }}
    />
  </Tabs.Navigator>
)

export default TabNavigator