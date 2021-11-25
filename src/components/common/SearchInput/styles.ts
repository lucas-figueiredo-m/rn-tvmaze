import { StyleSheet, Dimensions } from 'react-native'
import { Colors, FontFamilies } from 'theme'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  root: {
    height: 70,
    width,
    backgroundColor: Colors.DarkGrey,
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    width: width * 0.9,
    height: 50,
    backgroundColor: Colors.White,
    borderRadius: 10,
    paddingHorizontal: width * 0.05,
    fontFamily: FontFamilies.Regular,
    fontSize: 16
  },

  button: {
    position: 'absolute',
    right: width * 0.05 * 1.5
  }
})