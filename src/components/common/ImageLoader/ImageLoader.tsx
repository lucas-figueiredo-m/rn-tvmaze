import React, { useState } from 'react'
import { Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import Logo from 'assets/img/logo.png'
import { styles } from './styles'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

interface Props {
  uri?: string | null 
  width: number,
  aspectRatio: number
}

export const ImageLoader: React.FC<Props> = ({ uri, width, aspectRatio }) => {
  const [loading, setLoading] = useState<boolean>(uri ? true : false)
  return (
    <ShimmerPlaceholder visible={!loading}
      style={[{ width, aspectRatio, borderRadius: width * 0.1 }, styles.root]}
    >
      <Image
        source={uri ? { uri } : Logo}
        style={
          {
            width,
            aspectRatio,
            borderRadius: width * 0.1,
            resizeMode: uri ? 'cover' : 'contain'
          }
        }
        onLoadEnd={() => setLoading(false)}
      />
    </ShimmerPlaceholder>
  )
}