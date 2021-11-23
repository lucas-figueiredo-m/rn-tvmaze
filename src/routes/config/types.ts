import { StackNavigationProp } from "@react-navigation/stack"
import { MainRoutes } from "."

export type RootStackParamsList = {
  [MainRoutes.SPLASH_SCREEN]: undefined,
  [MainRoutes.TAB_NAVIGATOR]: undefined
}

export type SplashScreenProps = StackNavigationProp<RootStackParamsList, MainRoutes.SPLASH_SCREEN>