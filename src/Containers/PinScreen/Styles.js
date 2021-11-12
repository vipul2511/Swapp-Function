import {StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  MainCon: {backgroundColor: '#181A20', flex: 1},
  ImageCon: {
    height:220,width:220,overflow:'hidden',
    // marginLeft:wp('24%'),
    marginTop:hp('10%'),
    marginBottom:hp('3%')
  },
  CodeCon: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('35%'),
    marginTop: hp('2%'),
  },
  Code1: {height: 10, width: 10, borderRadius: 20, backgroundColor: '#262A34'},
  Code2: {
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: '#246BFD',
    shadowColor: '#246BFD',
    // overflow: "hidden",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation:5,
  },

  NumberCon: {
    marginTop: hp('7%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Number: {
    width: wp('30%'),
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  NumberText: {color: 'white', fontWeight: 'bold', fontSize: 32},
});

export default styles;
