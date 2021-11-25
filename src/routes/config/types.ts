import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import { Episode } from "typings/episodeTypes"
import { ShowItem } from "typings/showTypes"
import { HomeStackRoutes, MainRoutes, SearchStackRoutes } from "."

export type RootStackParamsList = {
  [MainRoutes.SPLASH_SCREEN]: undefined,
  [MainRoutes.TAB_NAVIGATOR]: undefined
}

export type HomeStackParamsList = {
  [HomeStackRoutes.SHOWS_LIST]: undefined,
  [HomeStackRoutes.SHOW_DETAIL_SCREEN]: { show: ShowItem },
  [HomeStackRoutes.EPISODE_DETAILS_SCREEN]: { episode: Episode, show: string }
}

export type SearchStackParamsList = {
  [SearchStackRoutes.SEARCH_SCREEN]: undefined,
}

export type SplashScreenProps = StackNavigationProp<RootStackParamsList, MainRoutes.SPLASH_SCREEN>

export type ShowListProps = StackNavigationProp<HomeStackParamsList, HomeStackRoutes.SHOWS_LIST>
export type ShowDetailsScreenProps = StackNavigationProp<HomeStackParamsList, HomeStackRoutes.SHOW_DETAIL_SCREEN>
export type ShowDetailsRouteProps = RouteProp<HomeStackParamsList, HomeStackRoutes.SHOW_DETAIL_SCREEN>

export type EpisodeDetailsRouteProps = RouteProp<HomeStackParamsList, HomeStackRoutes.EPISODE_DETAILS_SCREEN>