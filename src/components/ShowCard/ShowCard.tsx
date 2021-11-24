import React from 'react'
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { ShowItem } from 'typings/showTypes'
import { styles } from './styles'
import { ImageLoader } from 'components/common/ImageLoader/ImageLoader'
import { Tag } from 'components/common/Tag/Tag'
import { SVG } from 'components/common'
import ChevronRight from 'assets/icons/chevron-right.svg'
import Heart from 'assets/icons/heart.svg'
import { Colors } from 'theme'

interface Props {
  show: ShowItem,
  onPress: () => void,
  onFavoritePress: () => void
}

const hitSlop = {
  top: 5,
  bottom: 5,
  left: 5,
  right: 5
}

export const ShowCard: React.FC<Props> = ({ show, onPress, onFavoritePress }) => {
  const { height } = useWindowDimensions()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.root}
    >
      <View style={styles.imageContainer}>
        <ImageLoader
          uri={show.image.original}
          width={height * 0.1}
          aspectRatio={1}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{show.name}</Text>

        <View style={styles.tags}>
          {
            show.genres.length > 0 && show.genres.map( (genre, index) => (
              <Tag key={index} label={genre} />
            ))
          }
        </View>
        <TouchableOpacity
          onPress={onFavoritePress}
          style={styles.favoriteContainer}
          hitSlop={hitSlop}
        >
          <SVG xml={Heart} color={Colors.Red} fill={Colors.Transparent} />
        </TouchableOpacity>
      </View>

      <View style={styles.chevron}>
        <SVG xml={ChevronRight} color={Colors.DarkGrey} />
      </View>
    </TouchableOpacity>
  )
}