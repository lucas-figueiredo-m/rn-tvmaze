import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from 'theme';
import { TabRoutes } from 'routes/config';
import ShowsList from 'screens/ShowsList/ShowsList';
import SearchScreen from 'screens/SearchScreen/SearchScreen';

const Tabs = createBottomTabNavigator()

const TabNavigator: React.FC = () => (
  <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      // tabBarStyle: styles.tabBar,
      // tabBarLabelStyle: styles.label,
      tabBarActiveTintColor: Colors.White
    }}
  >
    <Tabs.Screen
      name={TabRoutes.SHOWS_LIST}
      component={ShowsList}
    />
    <Tabs.Screen
      name={TabRoutes.SEARCH_SCREEN}
      component={SearchScreen}
    />
  </Tabs.Navigator>
)

export default TabNavigator