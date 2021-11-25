import { useRoute } from '@react-navigation/native'
import { ShowHeader } from 'components'
import { SVG } from 'components/common'
import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { EpisodeDetailsRouteProps } from 'routes/config/types'
import { Colors } from 'theme'
import { formatNumber, removeHtml } from 'utils/textFormatter'
import Star from 'assets/icons/star.svg'
import { styles } from './styles'

const EpisodeDetailsScreen: React.FC = () => {
  const { params: { episode, show } } = useRoute<EpisodeDetailsRouteProps>()
  return (
    <View style={styles.root}>
      <ShowHeader label='Episode Detail' />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.infoContainer}>
            <Image
              source={{ uri: episode.image.original }}
              style={styles.image}
            />

            <View style={styles.textsContainer}>
              <Text style={styles.showTitle}>{show}</Text>
              <Text style={styles.episodeTitle}>{`S${formatNumber(episode.season)}E${formatNumber(episode.number)} - ${episode.name}`}</Text>
              <View style={styles.rating}>
                <SVG xml={Star} color={Colors.Yellow} fill={Colors.Yellow} />
                <Text style={styles.description}>{episode.rating.average}</Text>
              </View>
              <Text style={styles.runTime}>Runtime: {episode.runtime} minutes</Text>
            </View>
          </View>

          <Text style={styles.summaryTitle}>Summary</Text>
          <Text style={styles.summary}>{removeHtml(episode.summary)}</Text>
        </ScrollView>
      </View>
    </View>
  )
}

export default EpisodeDetailsScreen