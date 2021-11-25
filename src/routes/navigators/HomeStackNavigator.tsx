import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeStackRoutes } from "routes/config";
import { HomeStackParamsList } from 'routes/config/types';
import ShowsList from 'screens/ShowsList/ShowsList';
import ShowDetailsScreen from 'screens/ShowDetailsScreen/ShowDetailsScreen';
import EpisodeDetailsScreen from 'screens/EpisodeDetailsScreen/EpisodeDetailsScreen';

const Stack = createStackNavigator<HomeStackParamsList>()

const HomeStackNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={HomeStackRoutes.SHOWS_LIST} component={ShowsList} />
    <Stack.Screen name={HomeStackRoutes.SHOW_DETAIL_SCREEN} component={ShowDetailsScreen} />
    <Stack.Screen name={HomeStackRoutes.EPISODE_DETAILS_SCREEN} component={EpisodeDetailsScreen} />
  </Stack.Navigator>
)

export default HomeStackNavigator