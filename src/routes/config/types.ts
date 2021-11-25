import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import { Episode } from "typings/episodeTypes"
import { ShowItem } from "typings/showTypes"
import { HomeStackRoutes, MainRoutes, TabRoutes } from "."

import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamsList = {
  [MainRoutes.SPLASH_SCREEN]: undefined,
  [MainRoutes.TAB_NAVIGATOR]: undefined
}

export type HomeStackParamsList = {
  [HomeStackRoutes.SHOWS_LIST]: undefined,
  [HomeStackRoutes.SHOW_DETAIL_SCREEN]: { show: ShowItem },
  [HomeStackRoutes.EPISODE_DETAILS_SCREEN]: { episode: Episode, show: string }
}

export type TabParamsList = {
  [TabRoutes.HOME_STACK]: NavigatorScreenParams<HomeStackParamsList>,
  [TabRoutes.SEARCH_SCREEN]: undefined,
}

export type HomeStackNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<TabParamsList, TabRoutes.HOME_STACK>,
  StackScreenProps<HomeStackParamsList>
>;

export type SplashScreenProps = StackNavigationProp<RootStackParamsList, MainRoutes.SPLASH_SCREEN>

export type ShowListProps = StackNavigationProp<HomeStackParamsList, HomeStackRoutes.SHOWS_LIST>
export type ShowDetailsScreenProps = StackNavigationProp<HomeStackParamsList, HomeStackRoutes.SHOW_DETAIL_SCREEN>
export type ShowDetailsRouteProps = RouteProp<HomeStackParamsList, HomeStackRoutes.SHOW_DETAIL_SCREEN>

export type EpisodeDetailsRouteProps = RouteProp<HomeStackParamsList, HomeStackRoutes.EPISODE_DETAILS_SCREEN>

export type SearchScreenProps = BottomTabNavigationProp<TabParamsList, TabRoutes.SEARCH_SCREEN>