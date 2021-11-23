import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native'
import { Colors } from 'theme'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  root: {
    height: Platform.OS === 'android' ? height * 0.15 + Number(StatusBar.currentHeight) : height * 0.15,
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
    alignItems: 'center'
  },

  safeView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Number(StatusBar.currentHeight) : 0,
  },

  imageHeader: {
    width: width * 0.35,
    aspectRatio: 16/9,
    // height: height * 0.05,
    resizeMode: 'contain',
  }
})