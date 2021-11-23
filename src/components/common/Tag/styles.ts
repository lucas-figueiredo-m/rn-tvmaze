import { StyleSheet, Dimensions } from 'react-native'
import { Colors, FontFamilies } from 'theme'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  root: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.005,
    backgroundColor: Colors.RoyalBlueDark,
    borderRadius: 100,
    marginRight: width * 0.02,
    marginTop: height * 0.005
  },

  label: {
    fontFamily: FontFamilies.SemiBold,
    fontSize: 12,
    color: Colors.White
  }
})