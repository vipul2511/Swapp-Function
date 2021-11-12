import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
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
  focusborder:{
    borderBottomColor: '#fff',
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
