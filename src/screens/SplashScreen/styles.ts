import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: width * 0.8,
    height: height * 0.3,
    resizeMode: 'contain'
  }
})