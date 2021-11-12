import {StyleSheet,Dimensions} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height
export default StyleSheet.create({
    container: {
        marginTop:hp('2%'),
        height: hp('12%'),
        display: 'flex',
        width:wp('90%'),
        alignSelf:'center',
        justifyContent:'space-between'
    },
    title: {
        color:'white',
        fontSize:wp('7%'),
        fontFamily:'Poppins-SemiBold'
    },
    text: {
        width:wp('90%'),
        color:'#5E6272',
        lineHeight:hp('3.5%'),
        fontSize:wp('3.8%'),
        fontFamily:'Inter-Regular'
    },
})
