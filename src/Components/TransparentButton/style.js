import { StyleSheet,Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { Colors,Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'

export default StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderColor: '#5E6272',
    borderWidth: 1,
    overflow: 'visible',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-around',
    paddingBottom: 10,
    paddingTop: 10
  },
  text: {
    color: '#fff',
    fontSize: wp('4.2%'),
    textAlign: 'center',
    fontFamily:'Inter-Bold',
    marginRight:Platform.OS=="ios"?wp('5%'):wp('5%')
  },

})
