import { Platform, StatusBar, StyleSheet, Dimensions } from 'react-native'
import { Colors, FontFamilies } from 'theme'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  root: {
    height: Platform.OS === 'android' ? height * 0.12 + Number(StatusBar.currentHeight) : height * 0.12,
    width,
    backgroundColor: Colors.DarkGrey,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    padding: '2%',
    // alignItems: 'center'
  },

  safeView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between'
  },

  label: {
    fontFamily: FontFamilies.Medium,
    fontSize: 20,
    color: Colors.White,
    marginLeft: width * 0.05
  }
})