import { StyleSheet, Dimensions } from 'react-native'
import { FontFamilies } from 'theme'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  root: {
    flex: 1
  },

  centralContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  errorMessage: {
    fontFamily: FontFamilies.SemiBold,
    textAlign: 'center',
    marginHorizontal: width * 0.05
  },

})