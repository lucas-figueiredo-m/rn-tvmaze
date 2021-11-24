import { SVG } from 'components/common'
import React from 'react'
import { Image, View, Text } from 'react-native'
import { Colors } from 'theme'
import { ShowItem, ShowStatus } from 'typings/showTypes'
import Star from 'assets/icons/star.svg'
import { styles } from './styles'
import { formatDate, removeHtml } from 'utils/textFormatter'
import { Tag } from 'components/common/Tag/Tag'

interface Props {
  show: ShowItem
}

export const ShowInfo: React.FC<Props> = ({ show }) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: show.image.original }}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{show.name}</Text>
          <View style={styles.rating}>
            <SVG xml={Star} color={Colors.Yellow} fill={Colors.Yellow} />
            <Text style={styles.description}>{show.rating.average}</Text>
          </View>
          <Text style={styles.airs}>{`Premiered: ${formatDate(show.premiered)}`}</Text>
          <Text style={styles.airs}>{`${show.status === ShowStatus.ENDED && show.ended ? `Ended: ${formatDate(show.ended)}` : 'Running'}`}</Text>
        </View>

      </View>

      <Text style={styles.summaryTitle}>Summary</Text>
      <Text style={styles.summaryText}>{removeHtml(show.summary)}</Text>

      <View style={styles.tags}>
        {
          show.genres.map( (genre, index) => (
            <Tag key={index} label={genre} />
          ))
        }
      </View>
    </View>
  )
}