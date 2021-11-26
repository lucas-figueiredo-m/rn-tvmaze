import React from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import Logo from 'assets/img/logo.png'
import { styles } from './styles'

export const Header: React.FC = () => {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <Image source={Logo} style={styles.imageHeader} />
      </SafeAreaView>
    </View>
  )
}