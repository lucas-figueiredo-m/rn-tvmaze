import React, { useEffect } from 'react'
import { Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from 'theme'
import { styles } from './styles'
import Logo from 'assets/img/logo.png'
import { useNavigation } from '@react-navigation/core'
import { MainRoutes } from 'routes/config'
import { SplashScreenProps } from 'routes/config/types'

const SplashScreen: React.FC = () => {
  const { reset } = useNavigation<SplashScreenProps>();

  useEffect( () => {
    setTimeout(() => {
      reset({
        index: 0,
        routes: [{ name: MainRoutes.TAB_NAVIGATOR }]
      })
    }, 3500);
  }, [])

  return (
    <LinearGradient
      colors={[Colors.DarkGrey, Colors.RoyalBlueDark]}
      locations={[0.4, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.root}
    >
      <Image source={Logo} style={styles.logo} />
    </LinearGradient>
  )
}

export default SplashScreen