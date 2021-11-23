import React from 'react'
import { useWindowDimensions, View } from 'react-native'
// import { styles } from './styles'

export const Separator: React.FC = () => {
  const { height } = useWindowDimensions()
  return (
    <View style={{ height: height * 0.02}} />
  )
}