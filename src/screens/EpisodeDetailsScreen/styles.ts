import { StyleSheet, Dimensions } from 'react-native'
import { Colors, FontFamilies } from 'theme'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  root: {
    flex: 1
  },

  container: {
    flex: 1
  },

  infoContainer: {
    flexDirection: 'row'
  },

  scrollContent: {
    padding: width * 0.03
  },

  image: {
    width: width * 0.3,
    aspectRatio: 1,
    borderRadius: width * 0.3 * 0.1
  },

  textsContainer: {
    width: width * (1 - 2*-0.03 - 0.5),
    paddingLeft: width * 0.03
  },

  showTitle: {
    fontFamily: FontFamilies.SemiBold,
    fontSize: 20,
    color: Colors.DarkGrey
  },

  episodeTitle: {
    fontFamily: FontFamilies.Medium,
    fontSize: 16,
    color: Colors.DarkGrey,
    marginTop: height * 0.01
  },

  rating: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: height * 0.01
  },

  description: {
    fontFamily: FontFamilies.Medium,
    fontSize: 18,
    color: Colors.DarkGrey,
    marginLeft: width * 0.02, 
  },

  runTime: {
    fontFamily: FontFamilies.Medium,
    fontSize: 16,
    color: Colors.DarkGrey,
    marginTop: height * 0.01
  },

  summaryTitle: {
    fontFamily: FontFamilies.SemiBold,
    fontSize: 18,
    color: Colors.DarkGrey,
    marginTop: height * 0.01
  },

  summary: {
    fontFamily: FontFamilies.Medium,
    fontSize: 16,
    color: Colors.DarkGrey,
    marginTop: height * 0.01,
    textAlign: 'justify'
  },

})