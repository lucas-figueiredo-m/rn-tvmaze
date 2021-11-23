import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { Colors } from 'theme'
import { styles } from './styles'

interface Props {
  loading?: boolean,
  error?: string
}

export const Container: React.FC<Props> = ({ loading, error, children }) => {

  if (loading)
    return (
      <View style={styles.centralContainer}>
        <ActivityIndicator size='large' color={Colors.RoyalBlueDark} />
      </View>
    )

  if (error || error !== '')
    return (
      <View style={styles.centralContainer}>
        <Text style={styles.errorMessage}>{error}</Text>
      </View>
    )

  return (
    <View style={styles.root}>
      {children}
    </View>
  )
}