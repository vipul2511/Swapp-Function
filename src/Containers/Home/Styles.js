import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    main: {
        marginTop:hp('2%'),
        justifyContent:'center',
        alignItems:'center',
        width:wp('100%')
    }


});
export default styles;