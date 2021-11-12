import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  disablebutton: {
    backgroundColor: '#181A20',
    marginHorizontal: wp('5%'),
    borderColor: '#5E6272',
    borderWidth: 1,
    borderRadius: 15,

    elevation: 20,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  activebutton: {
    backgroundColor: '#262A34',
    borderWidth: 1,
    marginHorizontal: wp('5%'),
    borderColor: '#246BFD',
    borderRadius: 15,
    shadowColor: '#246BFD',
    elevation: 20,
    paddingVertical: 20,
    flexDirection: 'row',
  },

  btntext: {
    color: 'white',
    fontWeight: '600',
    fontSize: wp('4.5%'),
     fontFamily:'Inter-Medium',
    flex: 1,
    marginLeft: hp('3%'),
  },
  btntextdisable: {
    color: '#5E6272',
    fontWeight: '600',
    fontSize: wp('4.5%'),
    fontFamily:'Inter-Medium',
    flex: 1,
    marginLeft: hp('3%'),
  },
  activecheck: {
    backgroundColor: '#246BFD',
    marginLeft: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 25,
    borderRadius: 20,
    // marginTop: hp('2%'),
  },
  disablecheck: {
    // backgroundColor: '#246BFD',
    backgroundColor: 'transparent',
    borderColor: '#5E6272',
    borderWidth: 2,
    // marginTop: hp('1%'),
    justifyContent: 'center',

    height: 25,
    width: 25,
    borderRadius: 20,
    marginLeft: wp('5%'),
    alignItems: 'center',
  },
});

export default styles;
