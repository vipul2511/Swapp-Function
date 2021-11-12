import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  button: {
    backgroundColor: '#246BFD',
    borderColor: 0,
    borderWidth: 0,
    overflow: 'visible',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10
  },
  text: {
    color: '#fff',
    fontSize: wp('4.2%'),
    textAlign: 'center',
    fontFamily:'Inter-Bold'
  },

})