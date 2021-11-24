import { StyleSheet, Dimensions } from 'react-native'
import { Colors, FontFamilies } from 'theme'

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    width,
    // height: height * 0.35,
    backgroundColor: Colors.DarkGrey,
    padding: width * 0.05
  },

  image: {
    width: width * 0.3,
    aspectRatio: 1,
    borderRadius: width * 0.35 / 10,
  },

  container: {
    flexDirection: 'row',
  },
  
  infoContainer: {
    marginLeft: width * 0.02,
    width: width * (1 - 0.3 -2*0.05)
  },

  title: {
    fontFamily: FontFamilies.SemiBold,
    fontSize: 20,
    color: Colors.White
  },

  rating: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: height * 0.02
  },

  description: {
    fontFamily: FontFamilies.Medium,
    fontSize: 18,
    color: Colors.White,
    marginLeft: width * 0.02, 
  },

  airs: {
    fontFamily: FontFamilies.Medium,
    fontSize: 14,
    color: Colors.White
  },


  summaryTitle: {
    fontFamily: FontFamilies.SemiBold,
    fontSize: 14,
    color: Colors.White,
    marginTop: height * 0.02
  },

  summaryText: {
    fontFamily: FontFamilies.Regular,
    fontSize: 14,
    color: Colors.White,
    textAlign: 'justify',
    marginTop: height * 0.01
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: height * 0.02
  }
})