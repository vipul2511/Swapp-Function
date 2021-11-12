import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#2C303A'},
  Imgcon: {
    height: hp('22%'),
    width: wp('22%'),
    overflow: 'hidden',
    marginLeft: wp('5%'),
  },

  headfont: {
    fontSize: wp('6.5%'),
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    // fontWeight: 'bold',
    lineHeight:hp('6%')
  },
  Transpbtn: {
    width: wp('85%'),
    height: hp('7.3%'),
    backgroundColor: '#246BFD',
    borderColor: '#246BFD',
    marginLeft: wp('7%'),
    marginTop: hp('5%'),
  },
  FontHeadCon: {
    marginLeft: wp('5%'),
    marginBottom: wp('5%'),
    marginTop: wp('-2%'),
  },
});

export default Styles;