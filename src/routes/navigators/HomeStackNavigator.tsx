import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeStackRoutes } from "routes/config";
import { HomeStackParamsList } from 'routes/config/types';
import ShowsList from 'screens/ShowsList/ShowsList';
import ShowDetailsScreen from 'screens/ShowDetailsScreen/ShowDetailsScreen';

const Stack = createStackNavigator<HomeStackParamsList>()

const HomeStackNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={HomeStackRoutes.SHOWS_LIST} component={ShowsList} />
    <Stack.Screen name={HomeStackRoutes.SHOW_DETAIL_SCREEN} component={ShowDetailsScreen} />
  </Stack.Navigator>
)

export default HomeStackNavigator