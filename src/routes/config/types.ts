import { StackNavigationProp } from "@react-navigation/stack"
import { HomeStackRoutes, MainRoutes, SearchStackRoutes } from "."

export type RootStackParamsList = {
  [MainRoutes.SPLASH_SCREEN]: undefined,
  [MainRoutes.TAB_NAVIGATOR]: undefined
}

export type HomeStackParamsList = {
  [HomeStackRoutes.SHOWS_LIST]: undefined,
}

export type SearchStackParamsList = {
  [SearchStackRoutes.SEARCH_SCREEN]: undefined,
}

export type SplashScreenProps = StackNavigationProp<RootStackParamsList, MainRoutes.SPLASH_SCREEN>