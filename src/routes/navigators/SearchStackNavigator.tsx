import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SearchStackRoutes } from "routes/config";
import { SearchStackParamsList } from 'routes/config/types';
import SearchScreen from 'screens/SearchScreen/SearchScreen';

const Stack = createStackNavigator<SearchStackParamsList>()

const SearchStackNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SearchStackRoutes.SEARCH_SCREEN} component={SearchScreen} />
  </Stack.Navigator>
)

export default SearchStackNavigator