import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { Colors } from 'theme'
import { ShowEpisodes } from 'typings/showTypes'
import { styles } from './styles'

interface Props {
  seasons: ShowEpisodes[],
  selected: number,
  onSeasonPress: (value: number) => void
}

const DISPLAY_SEASONS = 3

export const SeasonScroll: React.FC<Props> = ({ seasons, selected, onSeasonPress }) => {
  const { width } = useWindowDimensions()

  const barX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler( (event) => {
    barX.value = event.contentOffset.x*DISPLAY_SEASONS/seasons.length
  })

  const scrollStyle = useAnimatedStyle( () => {
    return {
      transform: [{ translateX: seasons.length > DISPLAY_SEASONS ? barX.value : 0 }],
      width: seasons.length > DISPLAY_SEASONS ? width * DISPLAY_SEASONS/seasons.length : width
    }
  })

  return (
    <View style={styles.root}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        snapToInterval={width/DISPLAY_SEASONS}
        decelerationRate='fast'
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        bounces={seasons.length > 3}
      >
        {
          seasons.length === 0
          ? (
            <View style={styles.spinnerContainer}>
              <ActivityIndicator size='large' color={Colors.SapphireBlue} />
            </View>
          ) : (
            seasons.map( (season, index) => (
              <TouchableOpacity 
                key={index}
                onPress={() => onSeasonPress(season.season)}
                style={styles.seasonOption}
              >
                <Text
                  style={[
                    styles.seasonLabel,
                    { color: selected === season.season ? Colors.White : Colors.MediumGrey }
                  ]}
                >
                  {`Season ${season.season}`}
                </Text>
              </TouchableOpacity>
            ))
          )
        }
      </Animated.ScrollView>
      <Animated.View style={[styles.bar, scrollStyle]} />
    </View>
  )
}