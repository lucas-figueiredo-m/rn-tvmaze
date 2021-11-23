import { StyleSheet, Dimensions } from 'react-native'
import { Colors, FontFamilies } from 'theme'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  root: {
    width,
    backgroundColor: Colors.White,
    // height: height * 0.13,
    flexDirection: 'row',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015
  },

  image: {
    height: height * 0.1,
    aspectRatio: 1,
    borderRadius: height * 0.01
  },

  imageContainer: {
    flex: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: FontFamilies.SemiBold,
    fontSize: 16,
    color: Colors.DarkGrey
  },

  infoContainer: {
    flex: 70,
    paddingVertical: height * 0.015,
    paddingLeft: width * 0.05
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  chevron: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  favoriteContainer: {
    marginVertical: height * 0.005
  }
})