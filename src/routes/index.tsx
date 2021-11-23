import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from "screens/SplashScreen/SplashScreen";
import { MainRoutes } from "./config";
import { RootStackParamsList } from './config/types';
import TabNavigator from './navigators/TabNavigator';



const Stack = createStackNavigator<RootStackParamsList>()

const Router: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name={MainRoutes.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={MainRoutes.TAB_NAVIGATOR} component={TabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Router