import { StyleSheet, Dimensions } from 'react-native'
import { Colors, FontFamilies } from 'theme'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  root: {
    width,
    backgroundColor: Colors.DarkGrey
  },

  seasonOption: {
    width: width/3,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center'
  },

  seasonLabel: {
    fontFamily: FontFamilies.SemiBold,
    fontSize: 16,
    color: Colors.White
  },

  bar: {
    height: 5,
    backgroundColor: Colors.White,
    borderRadius: 5
  }

})