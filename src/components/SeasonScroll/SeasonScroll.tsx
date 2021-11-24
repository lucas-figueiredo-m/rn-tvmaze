import React from 'react'
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { styles } from './styles'

interface Props {
  seasons: number
}

const DISPLAY_SEASONS = 3

export const SeasonScroll: React.FC<Props> = ({ seasons }) => {
  const { width } = useWindowDimensions()

  const barX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler( (event) => {
    barX.value = event.contentOffset.x*DISPLAY_SEASONS/seasons
  })

  const scrollStyle = useAnimatedStyle( () => {
    return {
      transform: [{ translateX: seasons > DISPLAY_SEASONS ? barX.value : 0 }],
      width: seasons > DISPLAY_SEASONS ? width * DISPLAY_SEASONS/seasons : width
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
        bounces={seasons > 3}
      >
        <TouchableOpacity onPress={() => null} style={styles.seasonOption}>
          <Text style={styles.seasonLabel}>Season 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null} style={styles.seasonOption}>
          <Text style={styles.seasonLabel}>Season 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null} style={styles.seasonOption}>
          <Text style={styles.seasonLabel}>Season 3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null} style={styles.seasonOption}>
          <Text style={styles.seasonLabel}>Season 4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null} style={styles.seasonOption}>
          <Text style={styles.seasonLabel}>Season 5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null} style={styles.seasonOption}>
          <Text style={styles.seasonLabel}>Season 6</Text>
        </TouchableOpacity>
      </Animated.ScrollView>
      <Animated.View style={[styles.bar, scrollStyle]} />
    </View>
  )
}