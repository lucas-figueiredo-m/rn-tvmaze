import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

interface Props {
  label: string 
}
export const Tag: React.FC<Props> = ({ label }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}