import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import Logo from 'assets/img/logo.png'
import { styles } from './styles'

interface Props {
title?: string
}
export const Header: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <Image source={Logo} style={styles.imageHeader} />
      </SafeAreaView>
    </View>
  )
}