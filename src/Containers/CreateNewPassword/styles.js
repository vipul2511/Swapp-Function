import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#181A20'
},
createbtn:{
  width: wp('85%'),
  height: hp('7.3%'),
  backgroundColor: '#246BFD',
  borderColor: '#246BFD',
  justifyContent:'center',
  alignItems:'center',
  marginTop:'auto'
},
  activeborder: {
    borderBottomColor: '#FF0B80',
    shadowColor: '#FF0B80',

    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 10,
    borderBottomWidth: 1.5,
  },
  disableborder: {
    borderBottomColor: '#5E6272',

    borderBottomWidth: 1.5,
  },
  disable: {
    color: '#5E6272',
  },
  active: {
    color: '#FF0B80',
  },
});

export default styles;
