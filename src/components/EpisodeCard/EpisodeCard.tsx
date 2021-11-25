import React from 'react'
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'

import { styles } from './styles'
import { ImageLoader } from 'components/common/ImageLoader/ImageLoader'
import { SVG } from 'components/common'
import ChevronRight from 'assets/icons/chevron-right.svg'
import { Colors } from 'theme'
import { Episode } from 'typings/episodeTypes'
import { formatNumber } from 'utils/textFormatter'

interface Props {
  episode: Episode,
  onPress: () => void
}


export const EpisodeCard: React.FC<Props> = ({ episode, onPress }) => {
  const { height } = useWindowDimensions()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.root}
    >
      <View style={styles.imageContainer}>
        <ImageLoader
          uri={episode.image.original}
          width={height * 0.1}
          aspectRatio={1}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          {`S${formatNumber(episode.season)}E${formatNumber(episode.number)}`}
          {' - '}
          {episode.name}
        </Text>
        <Text style={styles.runtime}>{episode.runtime} min</Text>
      </View>

      <View style={styles.chevron}>
        <SVG xml={ChevronRight} color={Colors.DarkGrey} />
      </View>
    </TouchableOpacity>
  )
}